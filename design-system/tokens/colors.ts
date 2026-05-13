// Interface que define todas as cores obrigatórias do sistema
export interface ColorTokens {
  primary: string;        // Cor principal
  primaryLight: string;   // Versão clara da cor principal
  primaryDark: string;    // Versão escura da cor principal
  secondary: string;      // Cor secundária
  background: string;     // Fundo principal da aplicação
  surface: string;        // Fundo de cartões/componentes
  surfaceElevated: string;// Fundo de elementos elevados
  textPrimary: string;    // Texto principal
  textSecondary: string;  // Texto secundário
  textTertiary: string;   // Texto terciário
  success: string;        // Cor de sucesso
  error: string;          // Cor de erro
  warning: string;        // Cor de alerta
  border: string;         // Borda principal
  borderLight: string;    // Borda mais suave
  shadow: string;         // Cor da sombra
  overlay: string;        // Fundo de overlay/modal

  // Grupo específico para chat
  chat: {
    userBubble: string;   // Bolha do usuário
    otherBubble: string;  // Bolha do outro usuário
    userText: string;     // Texto do usuário
    otherText: string;    // Texto do outro usuário
  };
}

/* =========================
   Dark Theme (tema escuro)
   ========================= */
export const darkTheme: ColorTokens = {

  // Paleta azul para modo escuro
  primary: '#60A5FA',      // Azul principal
  primaryLight: '#1E3A8A', // Azul profundo
  primaryDark: '#3B82F6',  // Azul médio
  secondary: '#1E293B',    // Fundo secundário

  // Fundos escuros
  background: '#111827',   // Fundo geral
  surface: '#1F2937',      // Superfície
  surfaceElevated: '#374151', // Elevado

  // Hierarquia de texto escuro
  textPrimary: '#f8fafc',  // Texto principal
  textSecondary: '#c3d8ed',// Texto secundário
  textTertiary: '#6b44e2', // Texto discreto

  // Cores semânticas no dark
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',

  // Bordas escuras
  border: '#374151',
  borderLight: '#4B5563',

  // Sombras mais fortes
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.6)',

  // Cores do chat no dark
  chat: {
    userBubble: '#60A5FA', // Azul claro
    otherBubble: '#374151',// Cinza escuro
    userText: '#111827',   // Texto escuro
    otherText: '#F9FAFB',  // Texto claro
  }
};

// Exporta o tema padrão da aplicação
export const Colors = darkTheme;
