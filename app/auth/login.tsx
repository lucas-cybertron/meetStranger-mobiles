import {
  Platform, Text, View, KeyboardAvoidingView,
  Alert, Image, ImageBackground, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { loginStyles as styles } from '../../styles/screens/loginStyles';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    try {
      router.replace('/home');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={[styles.container, {overflow: 'hidden'}]}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
      >
        <View style={styles.content}>

          {/* Logo */}
          <Image
            source={require('../../assets/flavo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <LinearGradient
			colors={['#7B2FFF', '#FF3D6E']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			style={styles.brandUnderline}
			/>

          {/* Título */}
          <Text style={styles.title}>Login</Text>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <Input
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize='none'
				placeholder='Enter your email'
				leftIcon={<Ionicons name="person-outline" size={18} color="#AAAACC" />}
				/>
           <Input
			value={password}
			onChangeText={setPassword}
			secureTextEntry
			placeholder='Enter your password'
			leftIcon={<Ionicons name="lock-closed-outline" size={18} color="#AAAACC" />}
			/>

          </View>

          {/* Botão login */}
          <Button
            title={loading ? 'logando...' : 'log in'}
            onPress={handleLogin}
            disabled={loading}
            variant="gradient"
            style={styles.loginButton}
          />

          {/* Esqueci a senha */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <LinearGradient
            colors={['#7B2FFF', '#FF3D6E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.brandUnderline2}
            />

          {/* Criar conta */}
          <Text style={styles.dividerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}