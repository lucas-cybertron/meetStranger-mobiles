import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  io,
  Socket,
} from 'socket.io-client';

import {
  API_CONFIG,
} from './config';

class WebSocketService {
  public socket: Socket | null = null;

  private isConnected = false;

  async connect(): Promise<void> {
    const token = await AsyncStorage.getItem('authToken');

    this.socket = io(API_CONFIG.SOCKET_URL, {
      auth: {
        token,
      },
      transports: ['websocket'],
    });

    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not initialized'));
        return;
      }

      this.socket.on('connect', () => {
        this.isConnected = true;

        console.log('WebSocket connected');

        if (token) {
          this.socket?.emit('authenticate', {
            token,
          });
        }

        resolve();
      });

      this.socket.on('authenticated', (data) => {
        console.log('WebSocket authenticated:', data.userId);
      });

      this.socket.on('auth_error', (error) => {
        reject(error);
      });

      this.socket.on('disconnect', () => {
        this.isConnected = false;
      });

      this.socket.on('connect_error', (error) => {
        this.isConnected = false;

        reject(error);
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();

      this.socket = null;

      this.isConnected = false;
    }
  }

  joinRoom(roomId: string): void {
    this.socket?.emit('join-room', {
      roomId,
    });
  }

  leaveRoom(roomId: string): void {
    this.socket?.emit('leave-room', {
      roomId,
    });
  }

  sendMessage(roomId: string, message: string): void {
    this.socket?.emit('send-message', {
      roomId,
      message,
    });
  }

  onMessage(callback: (message: any) => void): void {
    this.socket?.on('new-message', callback);
  }

  onUserJoined(callback: (message: any) => void): void {
    this.socket?.on('user_joined', callback);
  }

  onUserLeft(callback: (message: any) => void): void {
    this.socket?.on('user_left', callback);
  }

  onPartnerLeft(callback: (message: any) => void): void {
    this.socket?.on('partner_left', callback);
  }

  onMatchFound(callback: (message: any) => void): void {
    this.socket?.on('match-found', callback);
  }

  onQueueStatus(callback: (data: any) => void): void {
    this.socket?.on('queue-status', callback);
  }

  onMatchingCancelled(callback: (data: any) => void): void {
    this.socket?.on('matching-cancelled', callback);
  }

  findMatch(category: string): void {
    this.socket?.emit('find-match', {
      category,
    });
  }

  cancelMatch(): void {
    this.socket?.emit('cancel-matching');
  }

  removeAllListeners(): void {
    this.socket?.removeAllListeners();
  }

  get connected(): boolean {
    return this.isConnected;
  }
}

export const webSocket = new WebSocketService();