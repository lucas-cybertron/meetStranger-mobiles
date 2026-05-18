import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Shadows,
  Spacing,
  BorderRadius,
  Opacity,
} from '../../design-system/tokens/spacing';

import {
  TextStyles,
} from '../../design-system/tokens/typography';

const {
  width,
  height,
} = Dimensions.get('window');

export const registerStyles =
  StyleSheet.create({

    // ====================================
    // SCREEN
    // ====================================

    container: {
      flex: 1,

      width: '100%',

      height: '100%',
    },

    // ====================================
    // CONTENT
    // ====================================

    content: {
      flexGrow: 1,

      minHeight: height,

      justifyContent: 'flex-start',

      alignItems: 'center',

      paddingTop:
        height * 0.10,

      paddingHorizontal:
        Spacing.xl,

      paddingBottom:
        Spacing['4xl'],

      // ====================================
      // FLAVOME STYLE
      // ====================================

      backgroundColor:
        'rgba(25,15,60,0.72)',

      borderTopRightRadius:
        BorderRadius['2xl'],

      overflow: 'hidden',

      // ====================================
      // NEON GLOW
      // ====================================

      ...Shadows.xl,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.35,

      shadowRadius: 24,
    },

    // ====================================
    // LOGO
    // ====================================

    logo: {
      width: width * 0.50,

      height: width * 0.50,

      marginBottom:
        Spacing.sm,

      ...Shadows.xl,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.55,

      shadowRadius: 30,
    },

    brandRow: {
      flexDirection: 'row',

      alignItems: 'center',

      marginBottom:
        Spacing.xs,
    },

    brandUnderline: {
      width: 90,

      height: 4,

      borderRadius:
        BorderRadius.full,

      alignSelf: 'center',

      marginBottom:
        Spacing.xl,

      opacity: 0.9,
    },

    // ====================================
    // TITLE
    // ====================================

    title: {
      ...TextStyles.h1,

      color: '#FFFFFF',

      fontWeight: '900',

      textAlign: 'center',

      letterSpacing: -1,

      marginBottom:
        Spacing.xl,

      textShadowColor:
        'rgba(123,47,255,0.45)',

      textShadowOffset: {
        width: 0,
        height: 0,
      },

      textShadowRadius: 16,
    },

    // ====================================
    // INPUTS
    // ====================================

    inputContainer: {
      width: '100%',

      gap: Spacing.md,

      marginBottom:
        Spacing.sm,
    },

    // ====================================
    // DATE
    // ====================================

    dateLabel: {
      color: '#C4B5FD',

      fontSize: 13,

      width: '100%',

      marginBottom:
        Spacing.xs,

      paddingHorizontal:
        Spacing.xs,

      opacity:
        Opacity.subtle,
    },

    dateRow: {
      flexDirection: 'row',

      width: '100%',

      marginBottom:
        Spacing.sm,

      overflow: 'hidden',

      gap: Spacing.sm,
    },

    dateFieldSm: {
      flex: 1,

      minWidth: 0,
    },

    dateFieldLg: {
      flex: 1.3,

      minWidth: 0,
    },

    // ====================================
    // TERMS
    // ====================================

    termsRow: {
      flexDirection: 'row',

      alignItems: 'center',

      width: '100%',

      marginTop:
        Spacing.sm,

      marginBottom:
        Spacing.lg,

      gap: Spacing.sm,
    },

    checkbox: {
      width: 20,

      height: 20,

      borderWidth: 1.5,

      borderColor:
        '#AAAACC',

      borderRadius: 5,

      alignItems: 'center',

      justifyContent: 'center',

      backgroundColor:
        'rgba(255,255,255,0.04)',
    },

    checkboxChecked: {
      backgroundColor:
        '#7B2FFF',

      borderColor:
        '#7B2FFF',

      ...Shadows.md,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.45,
    },

    termsText: {
      color: '#C4B5FD',

      fontSize: 12,

      flex: 1,

      opacity:
        Opacity.subtle,
    },

    // ====================================
    // ERROR
    // ====================================

    errorText: {
      color: '#FF4D8D',

      fontSize: 14,

      fontWeight: '700',

      textAlign: 'center',

      marginTop:
        Spacing.xs,

      marginBottom:
        Spacing.md,

      textShadowColor:
        'rgba(255,77,141,0.35)',

      textShadowOffset: {
        width: 0,
        height: 0,
      },

      textShadowRadius: 8,
    },

    // ====================================
    // REGISTER BUTTON
    // ====================================

    registerButton: {
      width: '100%',

      height: 56,

      borderRadius:
        BorderRadius.full,

      overflow: 'hidden',

      marginBottom:
        Spacing.lg,

      ...Shadows.xl,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.45,
    },

    // ====================================
    // LOGIN
    // ====================================

    loginText: {
      color: '#AAAACC',

      fontSize: 13,

      textAlign: 'center',

      marginBottom:
        Spacing.xs,

      opacity:
        Opacity.subtle,
    },

    loginLink: {
      ...TextStyles.h3,

      color: '#FFFFFF',

      fontWeight: '800',

      textAlign: 'center',

      letterSpacing: -0.3,

      textShadowColor:
        'rgba(255,61,110,0.35)',

      textShadowOffset: {
        width: 0,
        height: 0,
      },

      textShadowRadius: 10,
    },
  });