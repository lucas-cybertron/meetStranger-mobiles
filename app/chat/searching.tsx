import React, { useEffect, useRef } from 'react';

import {
    Text,
    Animated,
    Easing,
    TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';

import { searchingStyles as styles } from '../../styles/screens/searchingStyles';

export default function SearchingScreen() {

    const router = useRouter();

    const rotateAnim = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => { rotateAnim.setValue(0); Animated.loop( Animated.timing(rotateAnim, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: false, }), { resetBeforeIteration: true, } ).start(); }, []);

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (

        <LinearGradient
            colors={[
                '#580821',
                '#cb0e4a',
                '#2922b0',
                '#3e36eb',
                '#5035d8',
            ]}
           start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
            style={styles.container}
        >


            {/* CAMALEÃO */}
            <Animated.Image
                source={require('../../assets/circulo.png')}
                resizeMode="contain"
                style={[
                    styles.loadingImage,
                    {
                        transform: [{ rotate }],
                    },
                ]}
            />

            {/* TEXTO */}
            <Text style={styles.title}>
                Searching Partner...
            </Text>
                    {/* BOTÃO SAIR */}
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => router.back()}
                    >
        
                        <Text style={styles.cancelButtonText}>
                            ← Cancel
                        </Text>
        
                    </TouchableOpacity>

        </LinearGradient>
    );
}
