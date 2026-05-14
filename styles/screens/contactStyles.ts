// styles/screens/contactStyles.ts

import { StyleSheet } from 'react-native';

export const contactStyles = StyleSheet.create({

    container: {
        flex: 1,

        paddingTop: 60,
        paddingHorizontal: 24,
    },

    header: {
        marginBottom: 30,
    },

    backText: {
        color: '#FFFFFF',

        fontSize: 16,

        marginBottom: 18,
    },

    title: {
        color: '#FFFFFF',

        fontSize: 34,
        fontWeight: '900',

        marginBottom: 10,
    },

    subtitle: {
        color: '#D6DCFF',

        fontSize: 15,

        lineHeight: 22,
    },

    formCard: {
        backgroundColor: 'rgba(255,255,255,0.06)',

        borderRadius: 24,

        padding: 18,

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
    },

    messageInput: {
        minHeight: 55,

        textAlignVertical: 'top',
    },

    sendButton: {
        height: 58,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D4145A',

        marginTop: 30,
        marginBottom: 40,
    },

    sendButtonText: {
        color: '#FFFFFF',

        fontSize: 17,
        fontWeight: '900',
    },
});
