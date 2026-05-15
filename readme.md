# FlavoMe

## Visão Geral

FlavoMe é um aplicativo social de chat em tempo real focado em conectar pessoas através de interesses em comum.

Diferente de plataformas tradicionais de conversa aleatória, o FlavoMe oferece uma experiência mais social e moderna, conectando usuários através de categorias como:

* Filmes
* Jogos
* Música
* Livros

O projeto possui foco em:

* UI/UX moderna
* Comunicação em tempo real
* Gradientes e glassmorphism
* Experiência mobile premium
* Matchmaking baseado em interesses

---

# Visão do Projeto

O FlavoMe foi criado para ser mais do que apenas um aplicativo de conversa aleatória.

O objetivo é proporcionar:

* Conversas significativas
* Conexões baseadas em tópicos
* Interações sociais rápidas
* Uma experiência visual moderna

A identidade visual combina:

* Estética neon
* Gradientes escuros cinematográficos
* Elementos animados
* Design mobile premium

---

# Principais Funcionalidades

## Autenticação

* Tela de login
* Tela de registro
* Recuperação de senha
* Fluxo persistente de usuário (futuramente)

---

## Tela Home

Seleção interativa de categorias com:

* Cards animados
* Ilustrações personalizadas
* Botões com gradiente
* Menu dropdown
* Interface glassmorphism

Categorias disponíveis:

* Filmes
* Jogos
* Música
* Livros

---

## Chat em Tempo Real

* Matchmaking baseado em tópicos
* Mensagens em tempo real
* Sistema de bolhas de chat
* Timestamps
* Troca de parceiro
* Status da conversa
* Scroll automático
* Layout responsivo

---

## Tela Searching

Experiência animada de busca com:

* Loading animado
* Gradientes dinâmicos
* Simulação de matchmaking
* Persistência da categoria escolhida

---

## Sistema de Moderação

Modal personalizado de denúncia com:

* Conteúdo inapropriado
* Mensagens ofensivas
* Spam
* Conteúdo sexual
* Discurso de ódio
* Outros

O sistema foi criado para melhorar:

* Segurança
* Qualidade da plataforma
* Experiência do usuário

---

## Configurações

Tela de configurações contendo:

* Alteração de username
* Alteração de senha
* Informações da versão do app
* Navegação para suporte

---

## Contato / Suporte

Formulário de contato contendo:

* Nome
* Email
* Mensagem

Criado para:

* Feedbacks
* Relato de bugs
* Sugestões
* Suporte ao usuário

---

## Tela About

Tela com informações sobre:

* Conceito do aplicativo
* Privacidade
* Funcionamento da plataforma
* Recursos disponíveis
* Informações do desenvolvedor

---

# Design System

O FlavoMe utiliza um Design System personalizado para manter consistência visual em toda aplicação.

## Inclui

* Tokens de cores
* Tokens de tipografia
* Tokens de espaçamento
* Componentes reutilizáveis
* Estrutura de temas

---

# Componentes de UI

## Componentes reutilizáveis

* Input
* Buttons
* Chat bubbles
* Skeleton components
* Sistema de modais
* Wrappers de layout

---

# Stack Tecnológica

## Frontend

* React Native
* Expo
* Expo Router
* TypeScript
* Animated API
* Expo Linear Gradient

---

## Backend (planejado/em desenvolvimento)

* Node.js
* Express
* WebSocket / Socket.IO
* JWT Authentication
* Integração com banco de dados

---

# Estrutura do Projeto

```txt
app
│   ├── about
│   │   └── index.tsx
│   ├── auth
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── chat
│   │   ├── room.tsx
│   │   └── searching.tsx
│   ├── contact
│   │   └── index.tsx
│   ├── home
│   │   └── index.tsx
│   ├── index.tsx
│   ├── _layout.tsx
│   ├── settings
│   │   └── index.tsx
│   └── splash.tsx
├── app.json
├── assets
│   ├── background.png
│   ├── books.png
│   ├── circulo.png
│   ├── flavicon.png
│   ├── flavletter.png
│   ├── flavo.png
│   ├── games.png
│   ├── movies.png
│   └── music.png
├── components
│   ├── button.tsx
│   ├── chatMessage.tsx
│   ├── input.tsx
│   └── reportModal.tsx
├── constants
│   ├── colors.ts
│   └── types.ts
├── design-system
│   ├── animations
│   │   ├── fade.ts
│   │   ├── interactions.ts
│   │   └── slide.ts
│   ├── CLEAN_DESIGN_GUIDE.md
│   ├── components
│   │   ├── Button-clean.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ChatBubble-clean.tsx
│   │   ├── ChatBubble.tsx
│   │   └── Input.tsx
│   ├── DesignSystemShowcase.tsx
│   ├── index.ts
│   ├── README.md
│   └── tokens
│       ├── colors.ts
│       ├── gradients.ts
│       ├── spacing-clean.ts
│       ├── spacing.ts
│       ├── typography-clean.ts
│       └── typography.ts
├── hooks
│   ├── useAuth.tsx
│   └── useChat.tsx
├── package.json
├── package-lock.json
├── services
│   ├── api.ts
│   ├── config.ts
│   └── websocket.ts
├── styles
│   ├── modals
│   │   └── reportModalStyles.ts
│   └── screens
│       ├── aboutStyles.ts
│       ├── chatRoomStyles.ts
│       ├── contactStyles.ts
│       ├── homeStyles.ts
│       ├── loginStyles.ts
│       ├── registerStyles.ts
│       ├── searchingStyles.ts
│       ├── settingsStyles.ts
│       ├── splashStyles.ts
│       └── welcomeStyles.ts
└── tsconfig.json
```

---

# Funcionalidades Frontend Atuais

## Concluído

* Splash screen
* Home screen
* Menu dropdown
* Cards de categorias
* Tela searching
* Tela de chat
* Modal de denúncia
* Tela de configurações
* Tela de contato
* Tela about
* Input reutilizável
* Estrutura de Design System
* Sistema de gradientes
* Glassmorphism

---

# Funcionalidades Planejadas

## Frontend

* Typing indicator
* Skeleton loading
* Transições animadas
* Glow moving backgrounds
* Haptic feedback
* Melhorias nas animações
* Troca de temas
* Sistema de avatar
* Sistema de notificações

---

## Backend

* Matchmaking em tempo real
* WebSocket rooms
* Persistência de usuários
* API de autenticação
* Moderação de mensagens
* Sistema de denúncias
* Persistência de configurações

---

# Identidade Visual

O FlavoMe utiliza:

* Gradientes escuros
* Destaques neon
* Paleta roxa, azul e rosa
* Interface cinematográfica
* Estética moderna de aplicativos sociais

As inspirações visuais incluem:

* Discord
* Aplicativos sociais modernos
* Landing pages de startups
* Plataformas realtime

---

# Instalação

## Clonar repositório

```bash
git clone <repository-url>
```

---

## Instalar dependências

```bash
npm install
```

---

## Rodar projeto

```bash
npx expo start
```

---

# Dependências Expo

## Bibliotecas principais

```bash
npx expo install expo-router
npx expo install expo-linear-gradient
```

---

# Observações de Desenvolvimento

O projeto possui foco em:

* Experiência mobile
* Arquitetura limpa
* Componentização reutilizável
* Refinamento visual
* Comunicação em tempo real

O projeto encontra-se em desenvolvimento ativo.

---

# Desenvolvedor

## Lucas A. Paiva

Desenvolvimento focado em:

* React Native
* Sistemas modernos de UI
* Experiências realtime
* Design systems
* Arquitetura mobile-first

---

# Licença

Este projeto está sendo desenvolvido para fins educacionais e portfólio.

---

# Considerações Finais

FlavoMe é uma experiência social focada em conectar pessoas através de interesses em comum utilizando uma interface moderna, imersiva e em tempo real.

O projeto continua evoluindo com novas funcionalidades, integrações backend, animações e sistemas realtime.

The project continues evolving with new features, backend integrations, animations, and realtime systems.
