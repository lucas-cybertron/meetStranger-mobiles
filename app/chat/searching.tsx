import React, {
  useEffect,
  useRef,
} from 'react';

import {
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import {
  LinearGradient,
} from 'expo-linear-gradient';

import {
  useRouter,
  useLocalSearchParams,
} from 'expo-router';

import {
  searchingStyles as styles,
} from '../../styles/screens/searchingStyles';

import {
  useChat,
} from '../../hooks/useChat';

import {
  webSocket,
} from '../../services/websocket';

export default function SearchingScreen() {

  const router = useRouter();

  // ====================================
  // CATEGORY
  // ====================================

  const {
    category,
  } = useLocalSearchParams<{
    category: string;
  }>();

  // ====================================
  // CHAT HOOK
  // ====================================

  const {
    isConnected,
    isMatching,
    partnerName,
    currentRoomId,
  } = useChat(
    String(category),
  );

  // ====================================
  // START MATCHMAKING
  // ====================================

  useEffect(() => {

    console.log(
      '🔍 Starting matchmaking:',
      category,
    );

    webSocket.findMatch(
      String(category),
    );

  }, []);

  // ====================================
  // ANIMATION
  // ====================================

  const rotateAnim = useRef(
    new Animated.Value(0),
  ).current;

  useEffect(() => {

    rotateAnim.setValue(0);

    Animated.loop(

      Animated.timing(
        rotateAnim,
        {
          toValue: 1,

          duration: 4000,

          easing: Easing.linear,

          useNativeDriver: false,
        },
      ),

      {
        resetBeforeIteration: true,
      },

    ).start();

  }, []);

  const rotate =
    rotateAnim.interpolate({

      inputRange: [0, 1],

      outputRange: [
        '0deg',
        '360deg',
      ],
    });

  // ====================================
  // NAVIGATION
  // ====================================

  useEffect(() => {

    if (!currentRoomId) return;

    console.log(
      'Navigating to room:',
      currentRoomId,
    );

    router.replace({
      pathname: '/chat/room',
      params: {
        roomId: currentRoomId,
        category: String(category),
      },
    });

  }, [currentRoomId]);

  // ====================================
  // UI
  // ====================================

  return (

    <LinearGradient
      colors={[
        '#580821',
        '#cb0e4a',
        '#2922b0',
        '#3e36eb',
        '#5035d8',
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

      {/* CHAMELEON */}
      <Animated.Image
        source={require('../../assets/circulo.png')}

        resizeMode="contain"

        style={[
          styles.loadingImage,
          {
            transform: [
              { rotate },
            ],
          },
        ]}
      />

      {/* TITLE */}
      <Text style={styles.title}>

        {
          isMatching
            ? 'Searching Partner...'
            : 'Partner Found!'
        }

      </Text>

      {/* PARTNER */}
      <Text>
        {partnerName}
      </Text>

      {/* CANCEL */}
      <TouchableOpacity
        style={styles.cancelButton}

        onPress={() => {

          webSocket.cancelMatch();

          router.replace('/home');
        }}
      >

        <Text
          style={
            styles.cancelButtonText
          }
        >
          ← Cancel
        </Text>

      </TouchableOpacity>

    </LinearGradient>
  );
}