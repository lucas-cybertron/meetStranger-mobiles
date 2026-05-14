import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
        backgroundColor: '#080E3A',
    },

    // MENU
    menuButton: {
        position: 'absolute',
        top: 52,
        left: 24,
        zIndex: 1000,
    },

    menuIcon: {
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: '300',
    },

    // DROPDOWN
    dropdownMenu: {
        position: 'absolute',

        top: 95,
        left: 24,

        width: 180,

        overflow: 'hidden',

        backgroundColor: 'rgba(255,255,255,0.10)',

        borderRadius: 20,

        paddingHorizontal: 16,

        zIndex: 999,

        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },

    dropdownItem: {
        paddingVertical: 16,

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.06)',
    },

    dropdownText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },

    // LOGO
    logoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    logo: {
        width: 110,
        height: 110,
    },

    letter: {
        width: 180,
        height: 60,
        marginTop: 8,
    },

    // TITLE
    title: {
        fontSize: 42,
        fontWeight: '900',
        color: '#5DA9FF',
        marginTop: 4,
    },

    titlePink: {
        color: '#FF2D75',
    },

    subtitle: {
        color: '#6FB2FF',
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',

        marginTop: 34,
        marginBottom: 28,
    },

    // GRID
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        rowGap: 24,
    },

    categoryWrapper: {
        width: '47%',
        borderRadius: 24,
        overflow: 'visible',
    },

    categorySelected: { transform: [ { scale: 1.03, }, ], borderWidth: 2, borderColor: '#FFFFFF', shadowColor: '#FFFFFF', shadowOpacity: 0.5, shadowRadius: 14, elevation: 12, },

    categoryCard: {
        height: 120,

        borderRadius: 24,

        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryIcon: {
        fontSize: 42,
        marginBottom: 10,
    },

    categoryText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

    // BUTTON
    chatButton: {
        height: 58,

        borderRadius: 999,

        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 50,
    },

    chatButtonText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '900',

        textTransform: 'lowercase',
    },
    categoryContent: {
  alignItems: 'center',
  justifyContent: 'center',
},
    categoryImage: { width: 90, height: 90, marginBottom: 5, },

});
