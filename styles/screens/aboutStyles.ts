import { StyleSheet } from 'react-native';
import { TextStyles } from '../../design-system/tokens/typography';
import { Spacing } from '../../design-system/tokens/spacing';

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080E3A',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: Spacing.lg,
  },

  textButton: {
    color: '#6FB2FF',
    fontWeight: '800',
    fontSize: 16,
  },

  title: {
    ...TextStyles.title,
    color: '#FFFFFF',
    marginBottom: Spacing['3xl'],
    fontSize: 34,
    textAlign: 'center',
    fontWeight: '900',
  },

  section: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  subtitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 14,
  },

  description: {
    ...TextStyles.body,
    color: '#E8E8FF',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 10,
  },

  list: {
    color: '#D8D8FF',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 8,
  },

  footer: {
    color: '#FFFFFF',
    opacity: 0.7,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
  },
});