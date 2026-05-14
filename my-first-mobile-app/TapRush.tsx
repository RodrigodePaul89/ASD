import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const ROUND_SECONDS = 20;
const TARGET_SIZE = 72;
const TARGET_PADDING = 12;

type Board = { width: number; height: number };
type TargetPosition = { x: number; y: number };

export default function TapRush({ onExit }: { onExit: () => void }) {
    const [board, setBoard] = useState<Board>({ width: 0, height: 0 });
    const [target, setTarget] = useState<TargetPosition>({ x: 24, y: 24 });
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
    const [isRunning, setIsRunning] = useState(false);

    const getRandomPosition = useCallback((): TargetPosition => {
        const maxX = Math.max(TARGET_PADDING, board.width - TARGET_SIZE - TARGET_PADDING);
        const maxY = Math.max(TARGET_PADDING, board.height - TARGET_SIZE - TARGET_PADDING);
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY),
        };
    }, [board.height, board.width]);

    const moveTarget = useCallback(() => {
        if (board.width <= TARGET_SIZE || board.height <= TARGET_SIZE) return;
        setTarget(getRandomPosition());
    }, [board.height, board.width, getRandomPosition]);

    const startGame = useCallback(() => {
        setScore(0);
        setTimeLeft(ROUND_SECONDS);
        setIsRunning(true);
        moveTarget();
    }, [moveTarget]);

    useEffect(() => {
        if (!isRunning) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isRunning]);

    useEffect(() => {
        if (!isRunning) return;
        const mover = setInterval(moveTarget, 850);
        return () => clearInterval(mover);
    }, [isRunning, moveTarget]);

    useEffect(() => {
        if (!isRunning && score > bestScore) setBestScore(score);
    }, [bestScore, isRunning, score]);

    const onHitTarget = () => {
        if (!isRunning) return;
        setScore((prev) => prev + 1);
        moveTarget();
    };

    return (
        <View style={styles.gameContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Tap Rush</Text>
                <Text style={styles.subtitle}>Toca el objetivo antes de que se escape</Text>
            </View>

            <View style={styles.hud}>
                <Text style={styles.hudItem}>Puntos: {score}</Text>
                <Text style={styles.hudItem}>Tiempo: {timeLeft}s</Text>
                <Text style={styles.hudItem}>Record: {bestScore}</Text>
            </View>

            <View
                style={styles.board}
                onLayout={(event) => {
                    const { width, height } = event.nativeEvent.layout;
                    setBoard({ width, height });
                }}
            >
                {isRunning ? (
                    <Pressable
                        onPress={onHitTarget}
                        style={[styles.target, { transform: [{ translateX: target.x }, { translateY: target.y }] }]}
                    >
                        <Text style={styles.targetText}>+1</Text>
                    </Pressable>
                ) : (
                    <View style={styles.centerPanel}>
                        <Text style={styles.panelTitle}>{timeLeft === 0 ? 'Tiempo terminado' : 'Listo para jugar'}</Text>
                        <Text style={styles.panelText}>
                            Toca el circulo rojo tantas veces como puedas en {ROUND_SECONDS} segundos.
                        </Text>
                        <Pressable style={styles.button} onPress={startGame}>
                            <Text style={styles.buttonText}>{timeLeft === 0 ? 'Jugar otra vez' : 'Empezar'}</Text>
                        </Pressable>
                    </View>
                )}
            </View>

            <View style={styles.bottomDock}>
                <Pressable style={styles.exitButton} onPress={onExit}>
                    <Text style={styles.exitIcon}>⌂</Text>
                    <Text style={styles.exitText}> Salir al menu</Text>
                </Pressable>
            </View>
        </View>
    );
}
