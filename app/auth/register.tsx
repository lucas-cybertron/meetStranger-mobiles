import {
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import {
  LinearGradient,
} from 'expo-linear-gradient';

import {
  useAuth,
} from '../../hooks/useAuth';

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
  registerStyles as styles,
} from '../../styles/screens/registerStyles';

export default function Register() {

  const router = useRouter();

  const {
    register,
  } = useAuth();

  const [
    username,
    setUsername,
  ] = useState('');

  const [
    email,
    setEmail,
  ] = useState('');

  const [
    password,
    setPassword,
  ] = useState('');

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('');

  const [
    acceptedTerms,
    setAcceptedTerms,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState('');

  const [
    birthDay,
    setBirthDay,
  ] = useState('');

  const [
    birthMonth,
    setBirthMonth,
  ] = useState('');

  const [
    birthYear,
    setBirthYear,
  ] = useState('');

  const handleRegister = async () => {

  setErrorMessage('');

  // ====================================
  // USERNAME VALIDATION
  // ====================================

  const usernameRegex =
    /^[a-zA-Z0-9_.]+$/;

  if (!usernameRegex.test(username)) {

    setErrorMessage(
      'Username can only contain letters, numbers, _ and .',
    );

    return;
  }

  if (username.length < 3) {

    setErrorMessage(
      'Username must have at least 3 characters.',
    );

    return;
  }

  // ====================================
  // REQUIRED FIELDS
  // ====================================

  if (
    !username ||
    !email ||
    !password ||
    !confirmPassword
  ) {

    setErrorMessage(
      'Please fill all fields.',
    );

    return;
  }

  // ====================================
  // EMAIL VALIDATION
  // ====================================

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    setErrorMessage(
      'Invalid email.',
    );

    return;
  }

  // ====================================
  // PASSWORD VALIDATION
  // ====================================

  if (password.length < 8) {

    setErrorMessage(
      'Password must have at least 8 characters.',
    );

    return;
  }

  if (password !== confirmPassword) {

    setErrorMessage(
      'Passwords do not match.',
    );

    return;
  }

  // ====================================
  // TERMS VALIDATION
  // ====================================

  if (!acceptedTerms) {

    setErrorMessage(
      'Accept the terms to continue.',
    );

    return;
  }

  try {

    setLoading(true);

    const success =
      await register(
        username.trim(),
        email.trim().toLowerCase(),
        password,
      );

    console.log(
      'REGISTER SUCCESS:',
      success,
    );

    if (success) {

      router.replace(
        '/home',
      );

    } else {

      setErrorMessage(
        'Could not register.',
      );
    }

  } catch (error: any) {

    console.log(
      'REGISTER ERROR:',
      error,
    );

    setErrorMessage(
      error?.message ||
      'Registration failed.',
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
        style={styles.container}

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
            Register
          </Text>

          {/* INPUTS */}
          <View style={styles.inputContainer}>

            <Input
              value={username}

              onChangeText={setUsername}

              placeholder="Username"

              leftIcon={
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#AAAACC"
                />
              }
            />

            {/* DATE */}
            <Text style={styles.dateLabel}>
              Date of birth
            </Text>

            <View style={styles.dateRow}>

              <View style={styles.dateFieldSm}>

                <Input
                  value={birthDay}

                  onChangeText={(t) =>
                    setBirthDay(
                      t
                        .replace(
                          /[^0-9]/g,
                          '',
                        )
                        .slice(0, 2),
                    )
                  }

                  placeholder="00"

                  keyboardType="numeric"

                  maxLength={2}

                  textAlign="center"
                />

              </View>

              <View style={styles.dateFieldSm}>

                <Input
                  value={birthMonth}

                  onChangeText={(t) =>
                    setBirthMonth(
                      t
                        .replace(
                          /[^0-9]/g,
                          '',
                        )
                        .slice(0, 2),
                    )
                  }

                  placeholder="00"

                  keyboardType="numeric"

                  maxLength={2}

                  textAlign="center"
                />

              </View>

              <View style={styles.dateFieldLg}>

                <Input
                  value={birthYear}

                  onChangeText={(t) =>
                    setBirthYear(
                      t
                        .replace(
                          /[^0-9]/g,
                          '',
                        )
                        .slice(0, 4),
                    )
                  }

                  placeholder="0000"

                  keyboardType="numeric"

                  maxLength={4}

                  textAlign="center"
                />

              </View>

            </View>

            <Input
              value={email}

              onChangeText={setEmail}

              keyboardType="email-address"

              autoCapitalize="none"

              placeholder="Enter your email"

              leftIcon={
                <Ionicons
                  name="mail-outline"
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

            <Input
              value={confirmPassword}

              onChangeText={setConfirmPassword}

              secureTextEntry

              placeholder="Confirm password"

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

              <Text>
                {errorMessage}
              </Text>

            ) : null
          }
          {/* TERMS */}
          <TouchableOpacity
            style={styles.termsRow}
            onPress={() =>
              setAcceptedTerms(
                !acceptedTerms,
              )
            }
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.checkbox,
                acceptedTerms &&
                  styles.checkboxChecked,
              ]}
            >
              {
                acceptedTerms && (
                  <Ionicons
                    name="checkmark"
                    size={12}
                    color="#fff"
                  />

                )
              }
            </View>
            <Text style={styles.termsText}>
              Do you accept the terms?
            </Text>
          </TouchableOpacity>
          {/* REGISTER BUTTON */}
          <Button
            style={styles.registerButton}
            title={
              loading
                ? 'Registering...'
                : 'Register'
            }
            onPress={handleRegister}
            disabled={loading}
            variant="gradient"
          />
          {/* LOGIN */}
          <Text style={styles.loginText}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() =>
              router.push('/auth/login')
            }
          >
            <Text style={styles.loginLink}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}