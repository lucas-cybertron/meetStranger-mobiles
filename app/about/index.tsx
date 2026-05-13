import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { aboutStyles as styles } from '../../styles/screens/aboutStyles';

export default function About() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.textButton}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sobre o FlavoMe</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>🎭 O que é o FlavoMe?</Text>
        <Text style={styles.description}>
          O FlavoMe é um aplicativo de chat anônimo que conecta pessoas com base em interesses em comum, como filmes, música, livros e games.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>🔒 Privacidade</Text>
        <Text style={styles.list}>• Não coletamos dados pessoais</Text>
        <Text style={styles.list}>• Você pode sair a qualquer hora</Text>
        <Text style={styles.list}>• Não armazenamos suas mensagens</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>🌎 Como funciona</Text>
        <Text style={styles.list}>1. Escolha um tópico para iniciar a conversa</Text>
        <Text style={styles.list}>2. Conecte-se com alguém do mesmo interesse</Text>
        <Text style={styles.list}>3. Converse livremente sobre o tema escolhido</Text>
        <Text style={styles.list}>4. Troque de pessoa quando quiser</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>⚡ Recursos</Text>
        <Text style={styles.list}>• Chat em tempo real</Text>
        <Text style={styles.list}>• Múltiplas categorias</Text>
        <Text style={styles.list}>• Interface simples e intuitiva</Text>
        <Text style={styles.list}>• Conexão rápida</Text>
        <Text style={styles.list}>• Totalmente gratuito</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>👨‍💻 Sobre o desenvolvedor</Text>
        <Text style={styles.description}>Lucas A. Paiva</Text>
        <Text style={styles.description}>
          Desenvolvedor do projeto FlavoMe.
        </Text>
      </View>

      <Text style={styles.footer}>
        Projeto inspirado no Omegle • Versão 1.0.0
      </Text>

      <Text style={styles.footer}>
        2026 ❤️ feito com carinho para passar no curso
      </Text>
    </ScrollView>
  );
}