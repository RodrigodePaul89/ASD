import { StyleSheet } from 'react-native';

export const musicWidgetStyles = StyleSheet.create({
    musicShell: {
        width: '100%',
        maxWidth: 360,
        marginTop: 14,
    },
    musicSearchInput: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        color: '#E2E8F0',
        fontSize: 14,
        marginBottom: 10,
    },
    musicCard: {
        backgroundColor: 'rgba(15, 23, 42, 0.82)',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 14,
    },
    musicBadge: {
        color: '#93C5FD',
        fontSize: 12,
        fontWeight: '700' as any,
        marginBottom: 6,
    },
    musicTitle: {
        color: '#F8FAFC',
        fontSize: 18,
        fontWeight: '900' as any,
    },
    musicArtist: {
        color: '#CBD5E1',
        fontSize: 13,
        marginTop: 2,
    },
    musicControlsRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    musicIconButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#334155',
        backgroundColor: '#111827',
        marginHorizontal: 6,
    },
    musicIconLabel: {
        color: '#E2E8F0',
        fontSize: 16,
    },
    musicPlayButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#334155',
        backgroundColor: '#CBD5E1',
        marginHorizontal: 6,
    },
    musicPlayLabel: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '900' as any,
        marginLeft: 1,
    },
});

export default musicWidgetStyles;
