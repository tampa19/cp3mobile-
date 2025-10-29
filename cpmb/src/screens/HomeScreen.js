/**
 * Tela Inicial (Home Screen)
 * Demonstra o uso de componentes básicos obrigatórios:
 * - View, ScrollView, Text, Button, Image, StyleSheet, TouchableOpacity
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [welcomePressed, setWelcomePressed] = useState(false);

  const handleWelcomePress = () => {
    setWelcomePressed(true);
    Alert.alert(
      'Bem-vindo!',
      'Explore as diferentes funcionalidades de navegação neste app educacional.',
      [
        {
          text: 'OK',
          onPress: () => setWelcomePressed(false),
        },
      ]
    );
  };

  const navigateToCourses = () => {
    navigation.navigate('Courses');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/200x120/2196F3/FFFFFF?text=EduNav+Logo'
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>EduNav</Text>
        <Text style={styles.subtitle}>Plataforma Educacional com Navegação Híbrida</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Bem-vindo ao EduNav! Este aplicativo demonstra os três principais tipos de navegação 
          em React Native através de um caso de uso prático: uma plataforma educacional.
        </Text>

        <TouchableOpacity 
          style={[styles.welcomeButton, welcomePressed && styles.welcomeButtonPressed]}
          onPress={handleWelcomePress}
        >
          <Text style={styles.welcomeButtonText}>
            🎉 Toque para Começar
          </Text>
        </TouchableOpacity>

        <View style={styles.navigationDemo}>
          <Text style={styles.sectionTitle}>Tipos de Navegação Demonstrados:</Text>
          
          <View style={styles.navigationCard}>
            <Text style={styles.navigationTitle}>📱 Tab Navigation</Text>
            <Text style={styles.navigationDescription}>
              Navegação entre seções principais (Início, Cursos, Buscar, Perfil)
            </Text>
            <Text style={styles.navigationAdvantage}>
              ✅ Vantagem: Acesso rápido às principais funcionalidades
            </Text>
          </View>

          <View style={styles.navigationCard}>
            <Text style={styles.navigationTitle}>📚 Stack Navigation</Text>
            <Text style={styles.navigationDescription}>
              Navegação hierárquica entre telas relacionadas (Cursos → Detalhes → Aula)
            </Text>
            <Text style={styles.navigationAdvantage}>
              ✅ Vantagem: Fluxo intuitivo e histórico de navegação
            </Text>
          </View>

          <View style={styles.navigationCard}>
            <Text style={styles.navigationTitle}>☰ Drawer Navigation</Text>
            <Text style={styles.navigationDescription}>
              Menu lateral para funcionalidades secundárias (Favoritos, Configurações, Sobre)
            </Text>
            <Text style={styles.navigationAdvantage}>
              ✅ Vantagem: Economia de espaço na interface principal
            </Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <Button
            title="Explorar Cursos"
            onPress={navigateToCourses}
            color="#2196F3"
          />
          
          <View style={styles.buttonSpacer} />
          
          <Button
            title="Buscar Conteúdo"
            onPress={navigateToSearch}
            color="#4CAF50"
          />
          
          <View style={styles.buttonSpacer} />
          
          <Button
            title="Abrir Menu Lateral"
            onPress={openDrawer}
            color="#FF9800"
          />
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Estatísticas da Plataforma:</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>150+</Text>
              <Text style={styles.statLabel}>Cursos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5.2k</Text>
              <Text style={styles.statLabel}>Alunos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4.8★</Text>
              <Text style={styles.statLabel}>Avaliação</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2196F3',
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    textAlign: 'justify',
  },
  welcomeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  welcomeButtonPressed: {
    backgroundColor: '#45a049',
    transform: [{ scale: 0.98 }],
  },
  welcomeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationDemo: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  navigationCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8,
  },
  navigationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  navigationAdvantage: {
    fontSize: 13,
    color: '#4CAF50',
    fontStyle: 'italic',
  },
  actionButtons: {
    marginBottom: 30,
  },
  buttonSpacer: {
    height: 15,
  },
  statsSection: {
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;