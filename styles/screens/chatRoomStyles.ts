import { StyleSheet } from 'react-native';
import { Spacing } from '../../design-system/tokens/spacing';

export const chatRoomStyles = StyleSheet.create({

  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },

  reportButton: {
    backgroundColor: 'rgba(255,80,80,0.22)',
  },

  headerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // CHAT INFO
  chatInfo: {
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
  },

  chatTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  chatStatus: {
    color: '#B8B8D2',
    fontSize: 13,
    marginTop: 2,
  },

  // MESSAGES
  messagesContainer: {
    flexGrow: 1,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.lg,
  },

  // INPUT AREA
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },

  // SEND BUTTON
  sendButton: {
    width: 58,
    height: 52,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4145A',
    shadowColor: '#D4145A',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  sendButtonDisabled: {
    opacity: 0.5,
  },

  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
  },
});

