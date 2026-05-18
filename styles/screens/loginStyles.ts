import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Spacing,
  BorderRadius,
  Shadows,
  Opacity,
} from '../../design-system/tokens/spacing';

import {
  TextStyles,
} from '../../design-system/tokens/typography';

const {
  width,
  height,
} = Dimensions.get('window');

export const loginStyles =
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
        height * 0.12,

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
      width: width * 0.58,

      height: width * 0.58,

      marginBottom:
        Spacing.sm,

      alignSelf: 'center',

      ...Shadows.xl,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.55,

      shadowRadius: 30,
    },

    // ====================================
    // UNDERLINES
    // ====================================

    brandUnderline: {
      width: '52%',

      height: 4,

      borderRadius:
        BorderRadius.full,

      alignSelf: 'center',

      marginBottom:
        Spacing.xl,
    },

    brandUnderline2: {
      width: '72%',

      height: 3,

      borderRadius:
        BorderRadius.full,

      alignSelf: 'center',

      marginBottom:
        Spacing.lg,

      opacity: 0.8,
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
    // LOGIN BUTTON
    // ====================================

    loginButton: {
      width: '100%',

      height: 56,

      borderRadius:
        BorderRadius.full,

      overflow: 'hidden',

      marginTop:
        Spacing.md,

      marginBottom:
        Spacing.sm,

      ...Shadows.lg,

      shadowColor:
        '#7B2FFF',

      shadowOpacity: 0.45,
    },

    // ====================================
    // FORGOT PASSWORD
    // ====================================

    forgotPassword: {
      color: '#C4B5FD',

      fontSize: 13,

      textAlign: 'center',

      marginBottom:
        Spacing.lg,

      opacity:
        Opacity.subtle,
    },

    // ====================================
    // DIVIDER
    // ====================================

    dividerText: {
      color: '#AAAACC',

      fontSize: 13,

      textAlign: 'center',

      marginBottom:
        Spacing.sm,

      opacity:
        Opacity.subtle,
    },

    // ====================================
    // REGISTER LINK
    // ====================================

    registerLink: {
      ...TextStyles.h3,

      color: '#FFFFFF',

      fontWeight: '800',

      textAlign: 'center',

      letterSpacing: -0.3,

      marginBottom:
        Spacing.lg,

      textShadowColor:
        'rgba(255,61,110,0.35)',

      textShadowOffset: {
        width: 0,
        height: 0,
      },

      textShadowRadius: 10,
    },

    // ====================================
    // SOCIAL
    // ====================================

    socialContainer: {
      flexDirection: 'row',

      justifyContent: 'center',

      gap: Spacing.md,

      marginTop:
        Spacing.md,
    },

    socialButton: {
      width: 52,

      height: 52,

      borderRadius:
        BorderRadius.full,

      justifyContent: 'center',

      alignItems: 'center',

      backgroundColor:
        'rgba(255,255,255,0.08)',

      borderWidth: 1,

      borderColor:
        'rgba(255,255,255,0.10)',

      ...Shadows.md,
    },
  });