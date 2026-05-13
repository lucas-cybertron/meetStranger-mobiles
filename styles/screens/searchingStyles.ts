import { StyleSheet } from 'react-native';

export const searchingStyles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '800',
        marginTop: 20,
    },

    cancelButton: {
        marginTop: 32,

        backgroundColor: 'rgba(255,255,255,0.14)',

        paddingHorizontal: 22,
        paddingVertical: 12,

        borderRadius: 999,

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.12)',
    },

    cancelButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

});
