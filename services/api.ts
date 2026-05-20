import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_CONFIG } from './config';

class ApiService {

  private baseUrl: string;

  constructor() {

    this.baseUrl =
      API_CONFIG.BASE_URL;
  }

  // ====================================
  // TOKEN
  // ====================================

  private async getAuthToken():
    Promise<string | null> {

    return await AsyncStorage.getItem(
      'authToken',
    );
  }

  // ====================================
  // BASE REQUEST
  // ====================================

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {

    const token =
      await this.getAuthToken();

    const config: RequestInit = {

      headers: {

        'Content-Type':
          'application/json',

        ...(token && {
          Authorization:
            `Bearer ${token}`,
        }),
      },

      ...options,
    };

    const response = await fetch(
      `${this.baseUrl}${endpoint}`,
      config,
    );

    if (!response.ok) {

      const error =
        await response
          .json()
          .catch(() => ({
            message:
              'Network error',
          }));

      throw new Error(
        error.message ||
        'Request failed',
      );
    }

    return await response.json();
  }

  // ====================================
  // GET
  // ====================================

  async get<T>(
    endpoint: string,
  ): Promise<T> {

    return this.request<T>(
      endpoint,
      {
        method: 'GET',
      },
    );
  }

  // ====================================
  // AUTH
  // ====================================

  async login(
    email: string,
    password: string,
  ) {

    const response =
      await this.request<{
        success: boolean;

        data: {
          token: string;
          user: any;
        };
      }>(
        '/auth/login',
        {
          method: 'POST',

          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

    if (response.data?.token) {

      await AsyncStorage.setItem(
        'authToken',
        response.data.token,
      );
    }

    return response.data;
  }

  async register(
    username: string,
    email: string,
    password: string,
  ) {

    const response =
      await this.request<{
        success: boolean;

        data: {
          token: string;
          user: any;
        };
      }>(
        '/auth/register',
        {
          method: 'POST',

          body: JSON.stringify({
            username,
            email,
            password,
          }),
        },
      );

    if (response.data?.token) {

      await AsyncStorage.setItem(
        'authToken',
        response.data.token,
      );
    }

    return response.data;
  }

  async logout() {

    await this.request(
      '/auth/logout',
      {
        method: 'POST',
      },
    );

    await AsyncStorage.removeItem(
      'authToken',
    );
  }

  // ====================================
  // PROFILE
  // ====================================

  async getProfile() {

    const response =
      await this.request<{
        success: boolean;
        data: any;
      }>(
        '/auth/profile',
      );

    return response.data;
  }

  // ====================================
  // CHAT ROOMS
  // ====================================

  async getRooms() {

    const response =
      await this.request<{
        success: boolean;

        data: {
          rooms: any[];
        };
      }>(
        '/chat/rooms',
      );

    return response.data;
  }

  async getRoomMessages(
    roomId: string,
  ) {

    const response =
      await this.request<{
        success: boolean;

        data: {
          messages: any[];
        };
      }>(
        `/chat/rooms/${roomId}/messages`,
      );

    return response.data;
  }

  async sendMessage(
    roomId: string,
    content: string,
  ) {

    const response =
      await this.request(
        `/chat/rooms/${roomId}/messages`,
        {
          method: 'POST',

          body: JSON.stringify({
            content,
          }),
        },
      );

    return response;
  }

  // ====================================
  // MATCHING
  // ====================================

  async findMatch(
    categoryId: string,
  ) {

    const response =
      await this.request<{
        success: boolean;

        data: {
          roomId: string;
        };
      }>(
        '/matching/find',
        {
          method: 'POST',

          body: JSON.stringify({
            categoryId,
          }),
        },
      );

    return response.data;
  }

  async reportUser(roomId: string, reason: string, reportedUserId?: string) {
    const response = await this.request<{ success: boolean; message: string }>(
      `/chat/rooms/${roomId}/report`,
      {
        method: 'POST',
        body: JSON.stringify({ reason, reportedUserId }),
      },
    );
    return response;
  }
}

export const apiService =
  new ApiService();