export const API_CONFIG = {
    BASE_URL: 'https://backend-meetstranger-mobiles.onrender.com/api',
    SOCKET_URL: 'https://backend-meetstranger-mobiles.onrender.com',
    TIMEOUT: 60000, // 60 segundos
}

export interface ApiResponse<t = any> {
    success: boolean;
    data?: t;
    message?: string;
    error?: string;
}

export interface User {
    id: string;
    userName: string;
    email: string;
    createdAt: string;
}

export interface ChatRoom {
    id: string;
    category: string;
    participants: User[];
    createdAt: string;
}

export interface Message {
    id: string;
    roomId: string;
    userId: string;
    userName: string;
    text: string;
    timestamp: string;
}
