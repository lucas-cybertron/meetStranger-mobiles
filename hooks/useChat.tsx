import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  ChatMessage,
} from '../constants/types';

import {
  webSocket,
} from '../services/websocket';

export function useChat(category: string, initialRoomId?: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [isConnected, setIsConnected] = useState(false);

  const [isMatching, setIsMatching] = useState(false);

  const [currentRoomId, setCurrentRoomId] = useState<string | null>(
    initialRoomId || null
  );

  const [partnerName, setPartnerName] = useState<string>('Usuário');

  const handleNewMessage = useCallback((data: any) => {
    console.log('New message received:', data);

    const newMessage: ChatMessage = {
      id: data.id || Date.now().toString(),
      text: data.message,
      isUser: false,
      timestamp: data.timestamp
        ? new Date(data.timestamp)
        : new Date(),
      UserName: data.username || 'Desconhecido',
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleMatchFound = useCallback((data: any) => {
    console.log('Match found:', data);

    setCurrentRoomId(data.roomId);
    setIsMatching(false);
    setIsConnected(true);
    setMessages([]);
    setPartnerName(data.partner?.username || 'Usuário');

    webSocket.joinRoom(data.roomId);
  }, []);

  const handleRoomJoined = useCallback((data: any) => {
    console.log('Room joined:', data);

    setCurrentRoomId(data.roomId);
    setIsConnected(true);
  }, []);

  const handleUserLeft = useCallback(() => {
    console.log('Partner left');

    setIsConnected(false);
    setCurrentRoomId(null);
    setPartnerName('Procurando...');
    setMessages([]);
    setIsMatching(true);

    setTimeout(() => {
      webSocket.findMatch(category);
    }, 1000);
  }, [category]);

  const handleQueueStatus = useCallback((data: any) => {
    console.log('Queue status:', data);

    setIsMatching(true);
    setIsConnected(false);
  }, []);

  useEffect(() => {
    const initializeWebSocket = async () => {
      try {
        if (!webSocket.connected) {
          await webSocket.connect();
        }

        webSocket.onMessage(handleNewMessage);
        webSocket.onMatchFound(handleMatchFound);
        webSocket.onQueueStatus(handleQueueStatus);
        webSocket.onPartnerLeft(handleUserLeft);

        webSocket.socket?.on('room-joined', handleRoomJoined);
        webSocket.socket?.on('partner_left', handleUserLeft);
        webSocket.socket?.on('partner_disconnected', handleUserLeft);

        if (initialRoomId) {
          console.log('Joining existing room:', initialRoomId);

          webSocket.joinRoom(initialRoomId);

          setCurrentRoomId(initialRoomId);
        } else {
          console.log('Finding match for category:', category);

          setIsMatching(true);

          webSocket.findMatch(category);
        }
      } catch (error) {
        console.error('WebSocket connection failed:', error);

        setIsConnected(false);
      }
    };

    initializeWebSocket();

    return () => {
      webSocket.removeAllListeners();
    };
  }, [
    category,
    initialRoomId,
    handleNewMessage,
    handleMatchFound,
    handleQueueStatus,
    handleUserLeft,
    handleRoomJoined,
  ]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || !currentRoomId) {
      console.log('Cannot send message:', {
        hasText: !!text.trim(),
        currentRoomId,
      });

      return;
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
      UserName: 'Você',
    };

    setMessages(prev => [...prev, newMessage]);

    try {
      webSocket.sendMessage(currentRoomId, text.trim());
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const findNewPartner = async () => {
    if (currentRoomId) {
      webSocket.leaveRoom(currentRoomId);
    }

    setIsConnected(false);
    setIsMatching(true);
    setMessages([]);
    setCurrentRoomId(null);
    setPartnerName('Procurando...');

    try {
      webSocket.findMatch(category);
    } catch (error) {
      console.error('Error finding match:', error);

      setIsMatching(false);
    }
  };

  const leaveChat = () => {
    if (currentRoomId) {
      webSocket.leaveRoom(currentRoomId);
    }

    setIsConnected(false);
    setIsMatching(false);
    setCurrentRoomId(null);
    setMessages([]);
  };

  return {
    messages,
    isConnected,
    isMatching,
    partnerName,
    currentRoomId,
    sendMessage,
    findNewPartner,
    leaveChat,
  };
}