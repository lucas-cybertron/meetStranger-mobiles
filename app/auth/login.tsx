import {
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import {
  LinearGradient,
} from 'expo-linear-gradient';

import React, {
  useState,
} from 'react';

import {
  useRouter,
} from 'expo-router';

import {
  Input,
} from '../../components/input';

import {
  Button,
} from '../../components/button';

import {
  useAuth,
} from '../../hooks/useAuth';

import {
  loginStyles as styles,
} from '../../styles/screens/loginStyles';

export default function Login() {

  const router = useRouter();

  const {
    login,
  } = useAuth();

  const [
    email,
    setEmail,
  ] = useState('');

  const [
    password,
    setPassword,
  ] = useState('');

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState('');

  const handleLogin = async () => {

    // LIMPA ERRO ANTERIOR
    setErrorMessage('');

    // VALIDAÇÃO
    if (!email || !password) {

      setErrorMessage(
        'Please fill all fields.',
      );

      return;
    }

    try {

      setLoading(true);

      const success =
        await login(
          email,
          password,
        );

      if (success) {

        console.log(
          'Login success!',
        );

        router.replace('/home');

      } else {

        setErrorMessage(
          'Invalid email or password.',
        );
      }

    } catch (error: any) {

      console.log(
        'LOGIN ERROR:',
        error,
      );

      setErrorMessage(
        error?.message ||
        'Login failed.',
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <ImageBackground
      source={require('../../assets/background.png')}

      style={[
        styles.container,
        {
          overflow: 'hidden',
        },
      ]}

      resizeMode="cover"
    >

      <KeyboardAvoidingView
        style={{ flex: 1 }}

        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : 'height'
        }

        keyboardVerticalOffset={
          Platform.OS === 'android'
            ? -85
            : 0
        }
      >

        <View style={styles.content}>

          {/* LOGO */}
          <Image
            source={require('../../assets/flavo.png')}

            style={styles.logo}

            resizeMode="contain"
          />

          <LinearGradient
            colors={[
              '#7B2FFF',
              '#FF3D6E',
            ]}

            start={{
              x: 0,
              y: 0,
            }}

            end={{
              x: 1,
              y: 0,
            }}

            style={styles.brandUnderline}
          />

          {/* TITLE */}
          <Text style={styles.title}>
            Login
          </Text>

          {/* INPUTS */}
          <View style={styles.inputContainer}>

            <Input
              value={email}

              onChangeText={setEmail}

              keyboardType="email-address"

              autoCapitalize="none"

              placeholder="Enter your email"

              leftIcon={
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#AAAACC"
                />
              }
            />

            <Input
              value={password}

              onChangeText={setPassword}

              secureTextEntry

              placeholder="Enter your password"

              leftIcon={
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#AAAACC"
                />
              }
            />

          </View>

          {/* ERROR MESSAGE */}
          {
            errorMessage ? (

              <Text style={styles.errorText}>
                {errorMessage}
              </Text>

            ) : null
          }

          {/* LOGIN BUTTON */}
          <Button
            title={
              loading
                ? 'Logging in...'
                : 'Log in'
            }

            onPress={handleLogin}

            disabled={loading}

            variant="gradient"

            style={styles.loginButton}
          />

          {/* FORGOT PASSWORD */}
          <TouchableOpacity>

            <Text style={styles.forgotPassword}>
              Forgot password?
            </Text>

          </TouchableOpacity>

          <LinearGradient
            colors={[
              '#7B2FFF',
              '#FF3D6E',
            ]}

            start={{
              x: 0,
              y: 0,
            }}

            end={{
              x: 1,
              y: 0,
            }}

            style={styles.brandUnderline2}
          />

          {/* REGISTER */}
          <Text style={styles.dividerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push('/auth/register')
            }
          >

            <Text style={styles.registerLink}>
              Register
            </Text>

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </ImageBackground>
  );
}