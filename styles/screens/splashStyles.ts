import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({

    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 24,
    },

    logoContainer: {
        alignItems: 'center',

        padding: 30,

        borderRadius: 999,

        backgroundColor: 'rgba(255,255,255,0.03)',

        marginBottom: 40,
    },

    logo: {
        width: 140,
        height: 140,

        marginBottom: 20,
    },

    letter: {
        width: 220,
        height: 70,
    },

    title: {
        color: '#FFFFFF',

        fontSize: 28,
        fontWeight: '800',

        textAlign: 'center',
    },

    subtitle: {
        color: '#D6DCFF',

        fontSize: 15,

        marginTop: 10,

        textAlign: 'center',

        lineHeight: 22,
    },

    loadingContainer: {
        marginTop: 50,

        alignItems: 'center',
    },

    loadingText: {
        color: '#FFFFFF',

        marginTop: 14,

        fontSize: 14,
    },
});
