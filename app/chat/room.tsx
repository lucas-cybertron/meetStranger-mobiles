import React, { useState, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import { useRouter, useLocalSearchParams } from "expo-router";

import { useChat } from "../../hooks/useChat";

import { ChatMessage } from "../../components/chatMessage";
import { Input } from "../../components/input";

import { chatRoomStyles as styles } from "../../styles/screens/chatRoomStyles";

const categories = [
    { id: 'movies', name: 'Filmes', icon: '🎬' },
    { id: 'games', name: 'Jogos', icon: '🎮' },
    { id: 'series', name: 'Séries', icon: '📺' },
];

export default function ChatRoom() {

    const router = useRouter();

    const { category } = useLocalSearchParams<{ category: string }>();

    const categoryInfo = categories.find(
        (cat) => cat.id === category
    );

    const [inputText, setInputText] = useState('');

    const flatListRef = useRef<FlatList>(null);

    const {
        messages,
        isConnected,
        isMatching,
        partnerName,
        sendMessage,
        findNewPartner,
    } = useChat(category || 'movies');

    useEffect(() => {

        if (messages.length > 0) {

            setTimeout(() => {

                flatListRef.current?.scrollToEnd({
                    animated: true,
                });

            }, 50);
        }

    }, [messages]);

    const handleSendMessage = () => {

        if (inputText.trim() === '') return;

        sendMessage(inputText);

        setInputText('');
    };
const fakeMessages = [ { id: '1', text: 'olá como você está ??', isUser: false, timestamp: new Date(), UserName: 'Parceiro', }, { id: '2', text: 'Bem e você???', isUser: true, timestamp: new Date(), UserName: 'Você', }, { id: '3', text: 'Estou testando os balões do FlavoMe 😮‍💨', isUser: false, timestamp: new Date(), UserName: 'Parceiro', }, ];


    return (
        <LinearGradient colors={[ '#580821', '#cb0e4a', '#2922b0', '#3e36eb', '#5035d8', ]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={{ flex: 1 }} >

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={
                Platform.OS === 'android' ? 85 : 0
            }
        >

            <View style={styles.content}>

                {/* HEADER */}
                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.headerButtonText}>
                            ← Exit
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            styles.reportButton,
                        ]}
                    >
                        <Text style={styles.headerButtonText}>
                            ⚠ Report
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={findNewPartner}
                    >
                        <Text style={styles.headerButtonText}>
                            🔄 Change
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* INFO */}
                <View style={styles.chatInfo}>

                    <Text style={styles.chatTitle}>
                        {categoryInfo?.icon} {categoryInfo?.name}
                    </Text>

                    <Text style={styles.chatStatus}>
                        {
                            isConnected
                                ? `Connected with ${partnerName}`
                                : ''
                        }
                    </Text>
                
                </View>

                {/* MESSAGES */}
                <FlatList
                    ref={flatListRef}
                    data={fakeMessages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ChatMessage message={item} />
                    )}
                    contentContainerStyle={styles.messagesContainer}
                    showsVerticalScrollIndicator={false}
                />

                {/* INPUT AREA */}
                <View style={styles.inputContainer}>

                    <View style={{ flex: 1 }}>

                        <Input
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder="Write a message..."
                            multiline
                            maxLength={500}
                        />

                    </View>

                    <TouchableOpacity
                        style={[
                            styles.sendButton,
                            !isConnected ||
                            inputText.trim() === ''
                                ? styles.sendButtonDisabled
                                : undefined,
                        ]}
                        onPress={handleSendMessage}
                        disabled={
                            !isConnected ||
                            inputText.trim() === ''
                        }
                    >

                        <Text style={styles.sendButtonText}>
                            ➤
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </KeyboardAvoidingView>
        </LinearGradient>
    );
}

