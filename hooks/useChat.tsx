import { useCallback, useEffect, useState } from "react";
import { ChatMessage } from "../constants/types";
import { webSocket } from "../services/websocket";
 
export function useChat(category: string) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [isMatching, setIsMatching] = useState(false);
    const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
    const [partnerName, setPartnerName] = useState<string>('Procurando...');
 
    const handleNewMessage = useCallback((data: any) => {
        console.log('New message received:', data);
   
        const newMessage: ChatMessage = {
            id: data.id,
            text: data.message,
            isUser: false,
            timestamp: new Date(data.timestamp),
            UserName: data.username ||  'Desconhecido',
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
 
    const handleUserLeft = useCallback(() => {
        console.log('User left the chat');
        setIsConnected(false);
        setCurrentRoomId(null);
        setPartnerName('Procurando...');
        setIsMatching(true);
 
        setTimeout(() => {
            webSocket.findMatch(category);
        }, 1000);
   
    }, [category]);
 
    const handleQueueStatus = useCallback((data: any) => {
        console.log('Queue status:', data);
        setIsMatching(true);
    }, []);
 
    useEffect(() => {
        const initializeWebSocket = async () => {
            try{
                if (!webSocket.connect) {
                    await webSocket.connect();
                }
                webSocket.onMessage(handleNewMessage);
                webSocket.onMatchFound(handleMatchFound);
                webSocket.onUserLeft(handleUserLeft);
               
                webSocket.socket?.on('queue-status', handleQueueStatus);
           
                webSocket.socket?.on('partner-left', handleUserLeft);
 
                webSocket.socket?.on('partner-disconnected', handleUserLeft);
 
                console.log('Starting automatic match search for:', category);
                webSocket.findMatch(category);
 
                setIsMatching(true);
            } catch (error) {
                console.error('WebSocket connection error:', error);
            }
        };
 
        initializeWebSocket();
 
        return () => {
            webSocket.removeAllListeners();
        };
    }, [category, handleNewMessage, handleMatchFound, handleUserLeft, handleQueueStatus]);
 
    const sendMessage = async (text: string) => {
        if (!text.trim() || !currentRoomId) return;
 
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
 
    const findNewPartner = () => {
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
 
    useEffect(() => {
        return () => {
            if (currentRoomId) {
                webSocket.leaveRoom(currentRoomId);
            }
        };
    }, [currentRoomId]);
 
    return {
        messages,
        isConnected,
        isMatching,
        partnerName,
        sendMessage,
        findNewPartner,
    };
}
 
 