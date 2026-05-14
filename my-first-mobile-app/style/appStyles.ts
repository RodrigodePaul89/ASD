import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    homeBackground: { flex: 1 },
    homeImage: { resizeMode: 'cover' as const },
    homeOverlay: {
        flex: 1,
        backgroundColor: 'rgba(10, 17, 40, 0.4)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 48,
        paddingHorizontal: 20,
    },
    homeTitle: {
        color: '#F9FAFB',
        fontSize: 30,
        fontWeight: '900' as any,
        textShadowColor: 'rgba(0,0,0,0.55)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        marginTop: 18,
    },
    homePlayButton: {
        width: 74,
        height: 74,
        borderRadius: 37,
        backgroundColor: 'rgba(239, 68, 68, 0.95)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FECACA',
        marginTop: 14,
    },
    homePlayIcon: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '900' as any,
        marginLeft: 4,
    },
});

export default appStyles;
