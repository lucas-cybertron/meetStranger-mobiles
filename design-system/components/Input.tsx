import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../constants/colors';
import { Spacing, BorderRadius } from '../tokens/spacing';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode; 
}

export function Input({
  label,
  error,
  helperText,
  style,
  leftIcon,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, isFocused && styles.labelFocused]}>
          {label}
        </Text>
      )}

      <View style={[
          styles.inputWrapper,
          isFocused ? styles.inputWrapperFocused : undefined,
          error ? styles.inputWrapperError : undefined,
        ]}>
        {/* Ícone à esquerda */}
        {leftIcon && (
          <View style={styles.iconLeft}>
            {leftIcon}
          </View>
        )}

        <TextInput
          style={[
            styles.input,
            leftIcon ? styles.inputWithIcon : undefined,
            style,
            {
              outlineWidth: 0,
              outlineColor: 'transparent',
              outlineStyle: 'none',
            } as any,
          ]}
          placeholderTextColor={'#6B7299'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.sm,
  },

  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#AAAACC',
    marginBottom: Spacing.md,
  },

  labelFocused: {
    color: '#7B2FFF',
  },

  // wrapper substitui o estilo direto no TextInput
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%', 

    borderRadius: 999,
    minHeight: 52,

    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.1)',

    backgroundColor: 'rgba(255,255,255,0.08)',

    paddingHorizontal: Spacing.lg,

    overflow: 'hidden', 
  },

  inputWrapperFocused: {
    borderColor: '#7B2FFF',
    borderWidth: 2,
    backgroundColor: 'rgba(123,47,255,0.1)',
  },

  inputWrapperError: {
    borderColor: '#FF3D6E',
  },

  iconLeft: {
    marginRight: Spacing.sm,
    opacity: 0.7,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: Spacing.md,

    includeFontPadding: false,
    textAlignVertical: 'center',

    borderWidth: 0,

    minWidth: 0, 
},

  inputWithIcon: {
    paddingLeft: 0, // ícone já tem marginRight
  },

  errorText: {
    fontSize: 13,
    color: '#FF3D6E',
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.xs,
  },

  helperText: {
    fontSize: 13,
    color: '#6B7299',
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.xs,
  },
});