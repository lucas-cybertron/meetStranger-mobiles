import React from "react";
import { TextInputProps } from "react-native";
import { Input as DSInput } from '../design-system/components/Input';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode; // 👈 adicione aqui
}

export function Input({ label, error, style, leftIcon, ...props }: InputProps) {
  return (
    <DSInput
      label={label}
      error={error}
      style={style}
      leftIcon={leftIcon} // 👈 e repasse aqui
      {...props}
    />
  );
}