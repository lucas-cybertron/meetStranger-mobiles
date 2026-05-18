import React, {
  useEffect,
  useRef,
} from 'react';

import {
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Alert,
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
  webSocket,
} from '../../services/websocket';

export default function SearchingScreen() {

  const router = useRouter();

  // ====================================
  // CATEGORY PARAM
  // ====================================

  const {
    category,
  } = useLocalSearchParams<{
    category: string;
  }>();

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
  // MATCHMAKING
  // ====================================

  useEffect(() => {

    const connectSocket = async () => {

      try {

        console.log(
          'Connecting websocket...',
        );

        // CONNECT
        await webSocket.connect();

        console.log(
          'WebSocket connected!',
        );

        // START MATCH SEARCH
        webSocket.findMatch(
          String(category),
        );

        console.log(
          'Searching category:',
          category,
        );

        // MATCH FOUND
        webSocket.onMatchFound(
          (data: any) => {

            console.log(
              'MATCH FOUND:',
              data,
            );

            router.replace({

              pathname:
                '/chat/room',

              params: {
                roomId:
                  data.roomId,
              },
            });
          },
        );

      } catch (error) {

        console.log(
          'MATCH ERROR:',
          error,
        );

        Alert.alert(
          'Connection Error',
          'Could not connect to server.',
        );

        router.back();
      }
    };

    connectSocket();

    // ====================================
    // CLEANUP
    // ====================================

    return () => {

      console.log(
        'Leaving matchmaking...',
      );

      webSocket.cancelMatch();

      webSocket.removeAllListeners();

      webSocket.disconnect();
    };

  }, []);

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
        Searching Partner...
      </Text>

      {/* CANCEL BUTTON */}
      <TouchableOpacity
        style={styles.cancelButton}

        onPress={() => {

          webSocket.cancelMatch();

          router.back();
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