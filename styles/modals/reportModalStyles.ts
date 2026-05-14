import { StyleSheet } from 'react-native';

export const reportModalStyles = StyleSheet.create({

    overlay: {
        flex: 1,

        backgroundColor: 'rgba(0,0,0,0.65)',

        justifyContent: 'center',
        alignItems: 'center',

        padding: 24,
    },

    modal: {
        width: '100%',

        backgroundColor: 'rgba(25,25,45,0.96)',

        borderRadius: 28,

        padding: 24,

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },

    title: {
        color: '#FFFFFF',

        fontSize: 24,
        fontWeight: '800',

        marginBottom: 8,
    },

    subtitle: {
        color: '#BFCFFF',

        fontSize: 14,

        marginBottom: 22,
    },

    reasonButton: {
        backgroundColor: 'rgba(255,255,255,0.06)',

        borderRadius: 16,

        paddingVertical: 14,
        paddingHorizontal: 16,

        marginBottom: 12,

        borderWidth: 1,
        borderColor: 'transparent',
    },

    reasonButtonSelected: {
        borderColor: '#7B2FFF',

        backgroundColor: 'rgba(123,47,255,0.18)',
    },

    reasonText: {
        color: '#FFFFFF',

        fontSize: 15,
        fontWeight: '600',
    },

    reasonTextSelected: {
        color: '#FFFFFF',
    },

    footer: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginTop: 18,

        gap: 12,
    },

    cancelButton: {
        flex: 1,

        height: 52,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(255,255,255,0.08)',
    },

    cancelText: {
        color: '#FFFFFF',

        fontSize: 15,
        fontWeight: '700',
    },

    reportButton: {
        flex: 1,

        height: 52,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D4145A',
    },

    reportText: {
        color: '#FFFFFF',

        fontSize: 15,
        fontWeight: '800',
    },
});
