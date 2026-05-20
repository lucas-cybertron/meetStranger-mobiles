import {
  StyleSheet,
  Dimensions,
  Platform,
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

// ====================================
// RESPONSIVE HELPERS
// ====================================

const isSmallDevice =
  width < 380;

const isTablet =
  width >= 768;

const responsiveWidth = (
  mobile: number,
  tablet?: number,
) => {

  if (
    isTablet &&
    tablet
  ) {
    return tablet;
  }

  return mobile;
};

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
        isSmallDevice
          ? height * 0.06
          : height * 0.09,

      paddingHorizontal:
        isTablet
          ? Spacing['4xl']
          : Spacing.xl,

      paddingBottom:
        Spacing['4xl'],

      backgroundColor:
        'rgba(25,15,60,0.72)',

      borderTopRightRadius:
        BorderRadius['2xl'],

      overflow: 'hidden',

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
      width:
        responsiveWidth(
          width * 0.42,
          260,
        ),

      height:
        responsiveWidth(
          width * 0.42,
          260,
        ),

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
      width:
        isSmallDevice
          ? 70
          : 90,

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

      fontSize:
        isSmallDevice
          ? 28
          : isTablet
            ? 42
            : 34,

      lineHeight:
        isSmallDevice
          ? 34
          : isTablet
            ? 48
            : 40,

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
      width:
        isTablet
          ? '70%'
          : '100%',

      gap: Spacing.md,

      marginBottom:
        Spacing.sm,
    },

    // ====================================
    // DATE
    // ====================================

    dateLabel: {
      color: '#C4B5FD',

      fontSize:
        isSmallDevice
          ? 12
          : 13,

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

      alignItems: 'flex-start',

      width: '100%',

      marginTop:
        Spacing.sm,

      marginBottom:
        Spacing.lg,

      gap: Spacing.sm,
    },

    checkbox: {
      width:
        isSmallDevice
          ? 18
          : 20,

      height:
        isSmallDevice
          ? 18
          : 20,

      marginTop: 2,

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
      flex: 1,

      color: '#C4B5FD',

      fontSize:
        isSmallDevice
          ? 11
          : 12,

      lineHeight:
        isSmallDevice
          ? 16
          : 18,

      opacity:
        Opacity.subtle,
    },

    // ====================================
    // ERROR
    // ====================================

    errorText: {
      color: '#FF4D8D',

      fontSize:
        isSmallDevice
          ? 13
          : 14,

      fontWeight: '700',

      textAlign: 'center',

      marginTop:
        Spacing.xs,

      marginBottom:
        Spacing.md,

      paddingHorizontal:
        Spacing.sm,

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
      width:
        isTablet
          ? '70%'
          : '100%',

      height:
        isSmallDevice
          ? 52
          : 56,

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

      fontSize:
        isSmallDevice
          ? 12
          : 13,

      textAlign: 'center',

      marginBottom:
        Spacing.xs,

      opacity:
        Opacity.subtle,
    },

    loginLink: {
      ...TextStyles.h3,

      fontSize:
        isSmallDevice
          ? 18
          : 22,

      lineHeight:
        isSmallDevice
          ? 24
          : 30,

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