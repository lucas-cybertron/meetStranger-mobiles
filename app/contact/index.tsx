// app/contact/index.tsx

import React, { useState } from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { LinearGradient }
from 'expo-linear-gradient';

import { useRouter }
from 'expo-router';

import { Input }
from '../../components/input';

import {
    contactStyles as styles,
} from '../../styles/screens/contactStyles';

export default function ContactScreen() {

    const router = useRouter();

    const [name, setName] =
        useState('');

    const [email, setEmail] =
        useState('');

    const [message, setMessage] =
        useState('');

    const handleSend = () => {

        console.log({
            name,
            email,
            message,
        });

        Alert.alert(
            'Success',
            'Message sent successfully!'
        );

        setName('');
        setEmail('');
        setMessage('');
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
                        Contact Support
                    </Text>

                    <Text style={styles.subtitle}>
                        Send feedback, bug reports
                        or suggestions.
                    </Text>

                </View>

                {/* FORM */}
                <View style={styles.formCard}>

                    <Input
                        label="Name"
                        placeholder="Your name"
                        value={name}
                        onChangeText={setName}
                    />

                    <Input
                        label="Email"
                        placeholder="Your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Input
                        label="Message"
                        placeholder="Write your message..."
                        value={message}
                        onChangeText={setMessage}
                        multiline
                        style={styles.messageInput}
                    />

                </View>

                {/* BUTTON */}
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleSend}
                >

                    <Text style={styles.sendButtonText}>
                        Send Message
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </LinearGradient>
    );
}
