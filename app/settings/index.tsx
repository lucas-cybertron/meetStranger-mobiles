// app/settings/index.tsx

import React, { useState } from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { LinearGradient }
from 'expo-linear-gradient';

import { useRouter }
from 'expo-router';

import { Input }
from '../../components/input';

import {
    settingsStyles as styles,
} from '../../styles/screens/settingsStyles';

export default function SettingsScreen() {

    const router = useRouter();

    const [username, setUsername] =
        useState('');

    const [password, setPassword] =
        useState('');

    const handleSave = () => {

        console.log({
            username,
            password,
        });
    };

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

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* HEADER */}
                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => router.back()}
                    >

                        <Text style={styles.backText}>
                            ← Back
                        </Text>

                    </TouchableOpacity>

                    <Text style={styles.title}>
                        Settings
                    </Text>

                </View>

                {/* ACCOUNT */}
                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Account
                    </Text>

                    <Input
                        label="Username"
                        placeholder="Change username"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Input
                        label="Password"
                        placeholder="Change password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                </View>

                {/* CONTACT */}
                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Contact Support
                    </Text>

                    <TouchableOpacity
                        style={styles.contactButton}
                        onPress={() =>
                            router.push('/contact')
                        }
                    >

                        <Text style={styles.contactButtonText}>
                            Open Contact Form
                        </Text>

                    </TouchableOpacity>

                </View>

                {/* SYSTEM */}
                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        System
                    </Text>

                    <View style={styles.versionCard}>

                        <Text style={styles.versionText}>
                            FlavoMe v1.0.0
                        </Text>

                    </View>

                </View>

                {/* SAVE BUTTON */}
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSave}
                >

                    <Text style={styles.saveButtonText}>
                        Save Changes
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </LinearGradient>
    );
}
