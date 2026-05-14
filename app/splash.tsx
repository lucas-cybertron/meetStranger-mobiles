import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    ActivityIndicator,
    Image,
} from 'react-native';

import { LinearGradient }
from 'expo-linear-gradient';

import { useRouter }
from 'expo-router';

import {
    splashStyles as styles,
} from '../styles/screens/splashStyles';

export default function Splash() {

    const router = useRouter();

    const [backendConnected, setBackendConnected] =
        useState(false);

    useEffect(() => {

        const connectBackend = async () => {

            try {

                console.log(
                    'Connecting to backend...'
                );

                // ====================================
                // TESTE TEMPORÁRIO
                // ====================================

                setTimeout(() => {

                    setBackendConnected(true);

                    console.log(
                        'Backend connected!'
                    );

                }, 2000);

                // ====================================
                // QUANDO FOR REAL:
                // ====================================

                /*
                await api.get('/health');

                setBackendConnected(true);
                */

            } catch (error) {

                console.log(
                    'Backend connection error:',
                    error
                );
            }
        };

        connectBackend();

    }, []);

    useEffect(() => {

        // ====================================
        // TESTE VISUAL
        // ====================================

        const timer = setTimeout(() => {

            router.replace('/auth/login');

        }, 6000);

        return () => clearTimeout(timer);

        // ====================================
        // PRODUÇÃO
        // ====================================

        /*
        if (backendConnected) {

            router.replace('/auth/login');
        }
        */

    }, [backendConnected]);

    return (

        <LinearGradient
            colors={[
                '#050816',
                '#0B1026',
                '#1A1040',
                '#2B1466',
            ]}

            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}

            style={styles.container}
        >

            {/* LOGO AREA */}
            <View style={styles.logoContainer}>

                <Image
                    source={require('../assets/flavicon.png')}
                    resizeMode="contain"
                    style={styles.logo}
                />

                <Image
                    source={require('../assets/flavletter.png')}
                    resizeMode="contain"
                    style={styles.letter}
                />

            </View>

            {/* TITLE */}
            <Text style={styles.title}>
                Welcome to FlavoMe
            </Text>

            {/* SUBTITLE */}
            <Text style={styles.subtitle}>
                Connect with people{'\n'}
                who share your interests.
            </Text>

            {/* LOADING */}
            <View style={styles.loadingContainer}>

                <ActivityIndicator
                    size="large"
                    color="#FFFFFF"
                />

                <Text style={styles.loadingText}>

                    {
                        backendConnected
                            ? 'Connected!'
                            : 'Connecting server...'
                    }

                </Text>

            </View>

        </LinearGradient>
    );
}
