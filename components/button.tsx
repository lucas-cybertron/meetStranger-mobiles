import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors'

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    disabled?: boolean;
    style?: ViewStyle;
}

export function Button ({ title, onPress, variant = 'primary', disabled = false, style} : ButtonProps) {

    if (variant === 'gradient') {
        return (
            <TouchableOpacity
                style={[styles.base, disabled && styles.disabled, style]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={0.7}
            >
                <LinearGradient
                    colors={['#7B2FFF', '#FF3D6E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={[styles.text, styles.gradientText]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[
                styles.base,
                styles[variant],
                disabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, styles[`${variant}Text`]]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 999,
        minHeight: 48,
        width: '100%',
        overflow: 'hidden',
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryText: {
        color: '#ffffff',
    },
    secondaryText: {
        color: colors.text,
    },
    outlineText: {
        color: colors.primary,
    },
    gradientText: {
        color: '#ffffff',
    },
});