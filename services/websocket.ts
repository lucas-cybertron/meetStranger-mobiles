import asyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG } from './config';
import { io, Socket } from 'socket.io-client';
class webSocketService {
    public socket: Socket | null = null;
    private isConnected = false;

    async connect(): Promise<void> {
        const token = await asyncStorage.getItem('authToken')

        this.socket = io(API_CONFIG.SOCKET_URL, {
            auth: { token },
            transports: ['websocket']
        });
        return new Promise((resolve, reject) => {
            this.socket!.on('connect', () => {
                this.isConnected = true;
                console.log('webSocket connected') //remover quando estiver testado e funcionado

                if (token) {
                    this.socket!.emit('authenticate', { token });
                }
                resolve();
            });
            this.socket!.on('authenticated', (data) => {
                console.log(data.userId)
            });
            this.socket!.on('auth_error', (error) => {
                reject(error);
            });
            this.socket!.on('auth_error', (error) => {
                reject(error);
            });
            this.socket!.on('disconnected', () => {
                this.isConnected = false;
            });
        });
    }
    disconnect(): void {
        if(this.socket) {
            this.socket.disconnect();
            this.socket = null;
            this.isConnected = false;
        }
    }

    joinRoom(roomId: string): void {this.socket?.emit('join_room', { roomId })}

    leaveRoom(roomId: string): void {this.socket?.emit('leave_room', { roomId })}

    sendMessage(roomId: string, message: string): void {this.socket?.emit('send_message', { roomId, message })}

    onMessage(callback: (message: any) => void): void {this.socket?.on('new_message', callback)}

    onUserJoined(callback: (message: any) => void): void {this.socket?.on('user_joined', callback)}

    onUserLeft(callback: (message: any) => void): void {this.socket?.on('user_left', callback)}

    onMatchFound(callback: (message: any) => void): void {this.socket?.on('match_found', callback)}

    findMatch(categoryId: string): void {this.socket?.emit('find_match', { categoryId })}

    cancelMatch(): void {this.socket?.emit('cancel_match')}

    removeAllListeners(): void {
        this.socket?.removeAllListeners();
    }
    get conected(): boolean {
        return this.isConnected;
    }
}  
export const webSocket = new webSocketService();
