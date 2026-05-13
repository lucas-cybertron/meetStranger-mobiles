import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // 👈 adiciona
import { Colors } from '../tokens/colors';
import { TextStyles } from '../tokens/typography';
import { Spacing, BorderRadius, Layout, Opacity } from '../tokens/spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'gradient'; // 👈 adiciona

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}: ButtonProps) {

  const handlePress = () => {
    if (!disabled && !loading) onPress();
  };

  const content = (
    <Text
      style={[
        styles.text,
        styles[`${variant}Text`],
        styles[`${size}Text`],
        disabled && styles.disabledText,
        textStyle,
      ]}
    >
      {loading ? 'Carregando...' : title}
    </Text>
  );

  // 👇 Renderiza LinearGradient por dentro quando variant === 'gradient'
  if (variant === 'gradient') {
    return (
      <TouchableOpacity
        style={[
          styles.base,
          styles[size],
          disabled && styles.disabled,
          fullWidth && styles.fullWidth,
          style,
        ]}
        onPress={handlePress}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#7B2FFF', '#FF3D6E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
        style,
      ]}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.button,
    minHeight: Layout.minTouchTarget,
    overflow: 'hidden', // 👈 necessário para o gradiente respeitar o borderRadius
  },

  // Variantes
  primary: { backgroundColor: Colors.primary },
  secondary: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ghost: { backgroundColor: 'transparent' },
  danger: { backgroundColor: Colors.error },

  // Gradiente ocupa o botão inteiro
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Tamanhos
  sm: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.md, minHeight: 44 },
  md: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.lg, minHeight: 52 },
  lg: { paddingHorizontal: Spacing.xl, paddingVertical: Spacing.xl, minHeight: 56 },

  // Estados
  disabled: { backgroundColor: Colors.border, opacity: Opacity.disabled },
  fullWidth: { width: '100%' },

  // Texto
  text: { ...TextStyles.button, textAlign: 'center', includeFontPadding: false, textAlignVertical: 'center' },
  primaryText: { color: Colors.background, fontWeight: '600' },
  secondaryText: { color: Colors.textPrimary, fontWeight: '600' },
  ghostText: { color: Colors.primary, fontWeight: '600' },
  dangerText: { color: Colors.background, fontWeight: '600' },
  gradientText: { color: '#FFFFFF', fontWeight: '600' }, // 👈 adiciona
  disabledText: { color: Colors.textTertiary },
  smText: { fontSize: 13, fontWeight: '600', lineHeight: 16 },
  mdText: { fontSize: 15, fontWeight: '600', lineHeight: 18 },
  lgText: { fontSize: 17, fontWeight: '600', lineHeight: 20 },
});