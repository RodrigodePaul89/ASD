import React, { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { musicWidgetStyles } from '../style/musicWidgetStyles';

type Song = {
    id: string;
    title: string;
    artist: string;
};

const SONGS: Song[] = [
    { id: '1', title: 'Midnight City', artist: 'M83' },
    { id: '2', title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: '3', title: 'Do I Wanna Know?', artist: 'Arctic Monkeys' },
    { id: '4', title: 'Sunflower', artist: 'Post Malone' },
    { id: '5', title: 'Hasta La Raiz', artist: 'Natalia Lafourcade' },
];

export default function MusicWidget() {
    const [query, setQuery] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredSongs = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return SONGS;
        return SONGS.filter(
            (song) => song.title.toLowerCase().includes(normalizedQuery) || song.artist.toLowerCase().includes(normalizedQuery),
        );
    }, [query]);

    const activeSong = filteredSongs.length > 0 ? filteredSongs[currentIndex % filteredSongs.length] : null;

    const moveSong = (direction: 'prev' | 'next') => {
        if (filteredSongs.length === 0) return;
        setCurrentIndex((prev) => {
            if (direction === 'next') return (prev + 1) % filteredSongs.length;
            return (prev - 1 + filteredSongs.length) % filteredSongs.length;
        });
    };

    const onChangeQuery = (value: string) => {
        setQuery(value);
        setCurrentIndex(0);
    };

    return (
        <View style={musicWidgetStyles.musicShell}>
            <TextInput
                placeholder="Buscar cancion"
                placeholderTextColor="#9CA3AF"
                value={query}
                onChangeText={onChangeQuery}
                style={musicWidgetStyles.musicSearchInput}
            />

            <View style={musicWidgetStyles.musicCard}>
                <Text style={musicWidgetStyles.musicBadge}>Music</Text>
                {activeSong ? (
                    <>
                        <Text style={musicWidgetStyles.musicTitle}>{activeSong.title}</Text>
                        <Text style={musicWidgetStyles.musicArtist}>{activeSong.artist}</Text>
                    </>
                ) : (
                    <>
                        <Text style={musicWidgetStyles.musicTitle}>Sin resultados</Text>
                        <Text style={musicWidgetStyles.musicArtist}>Intenta otro nombre</Text>
                    </>
                )}

                <View style={musicWidgetStyles.musicControlsRow}>
                    <Pressable style={musicWidgetStyles.musicIconButton} onPress={() => moveSong('prev')}>
                        <Text style={musicWidgetStyles.musicIconLabel}>⏮</Text>
                    </Pressable>

                    <Pressable style={musicWidgetStyles.musicPlayButton} onPress={() => setIsPlaying((prev) => !prev)}>
                        <Text style={musicWidgetStyles.musicPlayLabel}>{isPlaying ? 'II' : '▶'}</Text>
                    </Pressable>

                    <Pressable style={musicWidgetStyles.musicIconButton} onPress={() => moveSong('next')}>
                        <Text style={musicWidgetStyles.musicIconLabel}>⏭</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
