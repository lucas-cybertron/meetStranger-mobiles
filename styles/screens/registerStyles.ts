import { StyleSheet, Dimensions } from "react-native";
import { Shadows, Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from "../../design-system/tokens/typography";

const { width } = Dimensions.get('window');

export const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',  
        height: '100%',
    },
    content: {
        flex: 1,
        paddingHorizontal: Spacing.xl,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Spacing['2xl'],
    },

    // Logo + nome da marca
    logo: {
        width: width * 0.50,
        height: width * 0.50,
        marginBottom: Spacing.sm,
        ...Shadows.lg,
        shadowColor: '#7B2FFF',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.xs,
    },
    brandUnderline: {
        width: 80,
        height: 3,
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: Spacing.lg,
    },

    // Título
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: Spacing.xl,
        textAlign: 'center',
    },

    // Inputs
    inputContainer: {
        width: '100%',
        gap: Spacing.sm,
        marginBottom: Spacing.sm,
    },
    dateLabel: {
    color: '#AAAACC',
    fontSize: 13,
    width: '100%',
    marginBottom: Spacing.xs,
    paddingHorizontal: Spacing.xs,
    },
    dateRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Spacing.sm,
    overflow: 'hidden',
    },
   dateFieldSm: {
        flex: 1,
        minWidth: 0,
        marginRight: Spacing.sm,
    },

    dateFieldLg: {
        flex: 1.3,
        minWidth: 0,
    },

    // Checkbox termos
    termsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: Spacing.xs,
        marginBottom: Spacing.md,
        gap: Spacing.sm,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1.5,
        borderColor: '#AAAACC',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#7B2FFF',
        borderColor: '#7B2FFF',
    },
    termsText: {
        color: '#AAAACC',
        fontSize: 12,
    },

    // Botão register
    registerButton: {
        width: '100%',
        marginBottom: Spacing.lg,
        borderRadius: 999,
        height: 52,
    },

    // Link login
    loginText: {
        color: '#AAAACC',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: Spacing.xs,
    },
    loginLink: {
        color: '#7B2FFF',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});