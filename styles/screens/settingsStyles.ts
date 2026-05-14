// styles/screens/settingsStyles.ts

import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({

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
    },

    section: {
        marginBottom: 30,

        backgroundColor: 'rgba(255,255,255,0.06)',

        borderRadius: 24,

        padding: 18,

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
    },

    sectionTitle: {
        color: '#D6DCFF',

        fontSize: 18,
        fontWeight: '800',

        marginBottom: 18,
    },

    contactButton: {
        height: 52,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#7B2FFF',
    },

    contactButtonText: {
        color: '#FFFFFF',

        fontSize: 15,
        fontWeight: '800',
    },

    versionCard: {
        padding: 16,

        borderRadius: 18,

        backgroundColor: 'rgba(255,255,255,0.05)',
    },

    versionText: {
        color: '#FFFFFF',

        fontSize: 15,
    },

    saveButton: {
        height: 58,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D4145A',

        marginBottom: 40,
    },

    saveButtonText: {
        color: '#FFFFFF',

        fontSize: 17,
        fontWeight: '900',
    },
});
