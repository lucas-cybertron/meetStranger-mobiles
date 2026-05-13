import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
import { Colors } from '../../design-system';
import { Shadows, Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from '../../design-system/tokens/typography';

const { width } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
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
    paddingBottom: Spacing.lg,
    overflow: 'hidden',
  },

  logo: {
    width: width * 0.60,      
    height: width * 0.60,
    marginBottom: Spacing.sm,
    alignSelf: 'center',
    ...Shadows.lg,
    shadowColor: '#7B2FFF',   
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  brandUnderline: {
    width: '50%',
    height: 3,
    backgroundColor: '#FF3D6E',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },
  brandUnderline2: {
    width: '70%',
    height: 3,
    backgroundColor: '#FF3D6E',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },

  title: {
    ...TextStyles.h1,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: Spacing.lg,
    letterSpacing: -0.2,
    lineHeight: 39,
    textAlign: 'center',
  },

  inputContainer: {
    width: '100%',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
    
  },

  loginButton: {
    width: '100%',
    marginTop: Spacing.md,
    marginBottom: Spacing.xs,
    borderRadius: 999,
    height: 52,
    overflow: 'hidden',
    // gradiente via LinearGradient no componente Button
  },

  forgotPassword: {
    color: '#AAAACC',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    textDecorationLine: 'underline',
  },

  dividerText: {
    color: '#AAAACC',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  registerLink: {
     ...TextStyles.h3,
    fontWeight: 'bold',
    color: Colors.textTertiary,
    marginBottom: Spacing.lg,
    letterSpacing: -0.2,
    lineHeight: 39,
    textAlign: 'center',

  },

  socialContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
    justifyContent: 'center',
  },

  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.lg,
  },
});