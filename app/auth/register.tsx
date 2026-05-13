import { Text, View, Alert, KeyboardAvoidingView, Platform, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../hooks/useAuth';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { registerStyles as styles } from '../../styles/screens/registerStyles';

export default function Register() {
    const router = useRouter();
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        if (password.length < 8) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }
        if (!acceptedTerms) {
            Alert.alert('Erro', 'Aceite os termos de uso para continuar.');
            return;
        }
        try {
            setLoading(true);
            const success = await register(name, email, password);
            if (success) {
                router.replace('/home');
            } else {
                Alert.alert('Erro', 'Não foi possível registrar. Tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar registrar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground
              source={require('../../assets/background.png')}
              style={[styles.container, {overflow: 'hidden'}]}
              resizeMode="cover"
            >
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
        >
            <View style={styles.content}>

                {/* Logo */}
                <Image source={require('../../assets/flavo.png')} style={styles.logo} resizeMode="contain" />
                <LinearGradient
                    colors={['#7B2FFF', '#FF3D6E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.brandUnderline}
                />

                {/* Título */}
                <Text style={styles.title}>Register</Text>

                {/* Inputs */}
                <View style={styles.inputContainer}>
                    <Input
                        value={name}
                        onChangeText={setName}
                        placeholder='name'
                        leftIcon={<Ionicons name="person-outline" size={18} color="#AAAACC" />}
                    />
                    <Text style={styles.dateLabel}>Date of birth</Text>
                        <View style={styles.dateRow}>
                            <View style={styles.dateFieldSm}>
                                <Input
                                    value={birthDay}
                                    onChangeText={(t) => setBirthDay(t.replace(/[^0-9]/g, '').slice(0, 2))}
                                    placeholder='00'
                                    keyboardType='numeric'
                                    maxLength={2}
                                    textAlign='center'
                                />
                            </View>
                            <View style={styles.dateFieldSm}>
                                <Input
                                    value={birthMonth}
                                    onChangeText={(t) => setBirthMonth(t.replace(/[^0-9]/g, '').slice(0, 2))}
                                    placeholder='00'
                                    keyboardType='numeric'
                                    maxLength={2}
                                    textAlign='center'
                                />
                            </View>
                            <View style={styles.dateFieldLg}>
                                <Input
                                    value={birthYear}
                                    onChangeText={(t) => setBirthYear(t.replace(/[^0-9]/g, '').slice(0, 4))}
                                    placeholder='0000'
                                    keyboardType='numeric'
                                    maxLength={4}
                                    textAlign='center'
                                />
                            </View>
                        </View>
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        placeholder='Enter your email'
                        leftIcon={<Ionicons name="mail-outline" size={18} color="#AAAACC" />}
                    />
                    <Input
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder='Enter your password'
                        leftIcon={<Ionicons name="lock-closed-outline" size={18} color="#AAAACC" />}
                    />
                    <Input
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholder='confirm the password'
                        leftIcon={<Ionicons name="lock-closed-outline" size={18} color="#AAAACC" />}
                    />
                </View>

                {/* Checkbox termos */}
                <TouchableOpacity
                    style={styles.termsRow}
                    onPress={() => setAcceptedTerms(!acceptedTerms)}
                    activeOpacity={0.7}
                >
                    <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                        {acceptedTerms && <Ionicons name="checkmark" size={12} color="#fff" />}
                    </View>
                    <Text style={styles.termsText}>do you accept the terms for use</Text>
                </TouchableOpacity>

                {/* Botão Register */}
                <Button
                    style={styles.registerButton}
                    title={loading ? 'Registrando...' : 'Register'}
                    onPress={handleRegister}
                    disabled={loading}
                    variant="gradient"
                />

                {/* Link login */}
                <Text style={styles.loginText}>already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/auth/login')}>
                    <Text style={styles.loginLink}>Log in</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
}