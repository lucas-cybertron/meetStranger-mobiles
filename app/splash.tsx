import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';

import {
  LinearGradient,
} from 'expo-linear-gradient';

import {
  useRouter,
} from 'expo-router';

import {
  splashStyles as styles,
} from '../styles/screens/splashStyles';

import {
  apiService,
} from '../services/api';

export default function Splash() {

  const router = useRouter();

  const [
    backendConnected,
    setBackendConnected,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    navigated,
    setNavigated,
  ] = useState(false);

  // ====================================
  // BACKEND CONNECTION
  // ====================================

  useEffect(() => {

    const connectBackend = async () => {

      try {

        console.log(
          'Connecting to backend...',
        );

        // TESTA CONEXÃO COM API
        await apiService.get('/health');

        console.log(
          'Backend connected!',
        );

        setBackendConnected(true);

      } catch (error) {

        console.log(
          'Backend connection error:',
          error,
        );

      } finally {

        setLoading(false);
      }
    };

    connectBackend();

  }, []);

  // ====================================
  // NAVIGATION WHEN CONNECTED
  // ====================================

  useEffect(() => {

    if (
      backendConnected &&
      !navigated
    ) {

      console.log(
        'Navigating to login...',
      );

      setNavigated(true);

      router.replace('/auth/login');
    }

  }, [
    backendConnected,
    navigated,
    router,
  ]);

  // ====================================
  // FALLBACK TIMEOUT
  // ====================================

  useEffect(() => {

    const timer = setTimeout(() => {

      if (!navigated) {

        console.log(
          'Fallback navigation triggered',
        );

        setNavigated(true);

        router.replace('/auth/login');
      }

    }, 6000);

    return () => clearTimeout(timer);

  }, [
    navigated,
    router,
  ]);

  return (

    <LinearGradient
      colors={[
        '#050816',
        '#0B1026',
        '#1A1040',
        '#2B1466',
      ]}

      start={{
        x: 1,
        y: 1,
      }}

      end={{
        x: 0,
        y: 0,
      }}

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
            loading
              ? 'Connecting server...'
              : backendConnected
                ? 'Connected!'
                : 'Server unavailable'
          }

        </Text>

      </View>

    </LinearGradient>
  );
}