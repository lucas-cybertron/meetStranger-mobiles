import React, { useState, useRef, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useRouter,
  useLocalSearchParams,
} from 'expo-router';

import { useChat } from '../../hooks/useChat';

import { ChatMessage } from '../../components/chatMessage';

import { Input } from '../../components/input';

import { ReportModal } from '../../components/reportModal';

import {
  chatRoomStyles as styles,
} from '../../styles/screens/chatRoomStyles';

const categories = [
  {
    id: 'movies',
    name: 'Filmes',
    icon: '🎬',
  },
  {
    id: 'games',
    name: 'Jogos',
    icon: '🎮',
  },
  {
    id: 'series',
    name: 'Séries',
    icon: '📺',
  },
];

export default function ChatRoom() {
  const router = useRouter();

  const {
    category,
    roomId,
  } = useLocalSearchParams<{
    category: string;
    roomId: string;
  }>();

  const categoryInfo = categories.find(
    (cat) => cat.id === category,
  );

  const [inputText, setInputText] = useState('');

  const [reportVisible, setReportVisible] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  const {
    messages,
    isConnected,
    partnerName,
    sendMessage,
  } = useChat(category || 'movies');

  useEffect(() => {
    console.log('ROOM LOADED:', {
      roomId,
      category,
    });
  }, [roomId, category]);

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

  const handleExit = () => {
    router.replace('/home');
  };

  const handleChangePartner = () => {
    router.replace({
      pathname: '/chat/searching',
      params: {
        category,
      },
    });
  };

  return (
    <LinearGradient
      colors={[
        '#580821',
        '#cb0e4a',
        '#2922b0',
        '#3e36eb',
        '#5035d8',
      ]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
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
            ? 85
            : 0
        }
      >
        <View style={styles.content}>

          <View style={styles.header}>

            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleExit}
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
              onPress={() => setReportVisible(true)}
            >
              <Text style={styles.headerButtonText}>
                ⚠ Report
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleChangePartner}
            >
              <Text style={styles.headerButtonText}>
                🔄 Change
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.chatInfo}>
            <Text style={styles.chatTitle}>
              {categoryInfo?.icon} {categoryInfo?.name}
            </Text>

            <Text style={styles.chatStatus}>
              {
                isConnected
                  ? `Connected with ${partnerName}`
                  : 'Connecting...'
              }
            </Text>
          </View>

          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ChatMessage message={item} />
            )}
            contentContainerStyle={styles.messagesContainer}
            showsVerticalScrollIndicator={false}
          />

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
                !isConnected || inputText.trim() === ''
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

        <ReportModal
          visible={reportVisible}
          onClose={() => setReportVisible(false)}
          onSubmit={(reason) => {
            console.log('User reported:', reason);

            setReportVisible(false);

            handleChangePartner();
          }}
        />

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}