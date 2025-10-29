/**
 * Tela Sobre (About Screen)
 * Demonstra Drawer Navigation - última tela do menu lateral
 * Inclui informações sobre o projeto e navegação híbrida
 */

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const AboutScreen = ({ navigation }) => {
  const projectInfo = {
    name: 'EduNav',
    version: '1.0.0',
    description: 'Aplicativo educacional de demonstração para navegação React Native',
    university: 'Universidade - Curso de Desenvolvimento Mobile',
    subject: '3º Checkpoint - Mobile Development & IoT',
    student: 'Nome do Estudante',
    instructor: 'Professor Responsável',
    year: '2025',
  };

  const navigationTypes = [
    {
      type: 'Stack Navigation',
      icon: '📚',
      description: 'Navegação hierárquica entre telas relacionadas',
      examples: 'Cursos → Detalhes → Aula',
      advantages: ['Histórico automático', 'Navegação intuitiva', 'Passagem de parâmetros'],
      disadvantages: ['Uso de memória', 'Limitado a fluxos lineares'],
      usage: 'Ideal para fluxos de detalhamento e processos sequenciais',
    },
    {
      type: 'Tab Navigation',
      icon: '📱',
      description: 'Navegação entre seções principais do aplicativo',
      examples: 'Início, Cursos, Buscar, Perfil',
      advantages: ['Acesso rápido', 'Funcionalidades visíveis', 'Estado preservado'],
      disadvantages: ['Limitado a poucas abas', 'Espaço de tela ocupado'],
      usage: 'Perfeito para funcionalidades principais e de uso frequente',
    },
    {
      type: 'Drawer Navigation',
      icon: '☰',
      description: 'Menu lateral para funcionalidades secundárias',
      examples: 'Favoritos, Configurações, Sobre',
      advantages: ['Economia de espaço', 'Muitas opções', 'Interface limpa'],
      disadvantages: ['Menos descobrível', 'Gesto adicional necessário'],
      usage: 'Excelente para configurações e funcionalidades secundárias',
    },
  ];

  const technologies = [
    { name: 'React Native', version: '0.72.6', purpose: 'Framework de desenvolvimento mobile' },
    { name: 'React Navigation', version: '6.x', purpose: 'Biblioteca de navegação' },
    { name: 'JavaScript ES6+', version: 'ES2023', purpose: 'Linguagem de programação' },
    { name: 'Android Studio', version: 'Latest', purpose: 'Ambiente de desenvolvimento Android' },
  ];

  const handleContactDeveloper = () => {
    Alert.alert(
      'Contato',
      'Este é um projeto acadêmico de demonstração. Entre em contato através dos canais oficiais da universidade.',
      [{ text: 'OK' }]
    );
  };

  const handleViewSourceCode = () => {
    Alert.alert(
      'Código Fonte',
      'O código fonte deste projeto está disponível para fins educacionais. Consulte seu professor para acesso ao repositório.',
      [{ text: 'OK' }]
    );
  };

  const handleNavigationDemo = (navType) => {
    let message = '';
    let actions = [];

    switch (navType.type) {
      case 'Stack Navigation':
        message = 'Demonstração: Vá para Cursos → Selecione um curso → Entre em uma aula';
        actions = [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Ir para Cursos',
            onPress: () => navigation.navigate('MainTabs', { screen: 'Courses' }),
          },
        ];
        break;
      case 'Tab Navigation':
        message = 'Demonstração: Use a barra inferior para navegar entre as seções principais';
        actions = [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Ir para Buscar',
            onPress: () => navigation.navigate('MainTabs', { screen: 'Search' }),
          },
        ];
        break;
      case 'Drawer Navigation':
        message = 'Demonstração: Use o menu lateral (este menu) para acessar funcionalidades secundárias';
        actions = [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Ir para Favoritos',
            onPress: () => navigation.navigate('Favorites'),
          },
        ];
        break;
    }

    Alert.alert(`${navType.icon} ${navType.type}`, message, actions);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/100x100/3F51B5/FFFFFF?text=📱'
          }}
          style={styles.appIcon}
        />
        <Text style={styles.appName}>{projectInfo.name}</Text>
        <Text style={styles.appVersion}>Versão {projectInfo.version}</Text>
        <Text style={styles.appDescription}>{projectInfo.description}</Text>
      </View>

      {/* Informações do projeto */}
      <View style={styles.projectInfo}>
        <Text style={styles.sectionTitle}>📋 Informações do Projeto</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Disciplina:</Text>
            <Text style={styles.infoValue}>{projectInfo.subject}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Universidade:</Text>
            <Text style={styles.infoValue}>{projectInfo.university}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estudante:</Text>
            <Text style={styles.infoValue}>{projectInfo.student}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Professor:</Text>
            <Text style={styles.infoValue}>{projectInfo.instructor}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Ano:</Text>
            <Text style={styles.infoValue}>{projectInfo.year}</Text>
          </View>
        </View>
      </View>

      {/* Tipos de navegação */}
      <View style={styles.navigationSection}>
        <Text style={styles.sectionTitle}>🧭 Tipos de Navegação Demonstrados</Text>
        
        {navigationTypes.map((navType, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navigationCard}
            onPress={() => handleNavigationDemo(navType)}
          >
            <View style={styles.navHeader}>
              <Text style={styles.navIcon}>{navType.icon}</Text>
              <Text style={styles.navTitle}>{navType.type}</Text>
            </View>
            
            <Text style={styles.navDescription}>{navType.description}</Text>
            <Text style={styles.navExamples}>
              <Text style={styles.navExamplesLabel}>Exemplos: </Text>
              {navType.examples}
            </Text>
            
            <View style={styles.navDetails}>
              <View style={styles.navAdvantages}>
                <Text style={styles.navSubtitle}>✅ Vantagens:</Text>
                {navType.advantages.map((advantage, i) => (
                  <Text key={i} style={styles.navPoint}>• {advantage}</Text>
                ))}
              </View>
              
              <View style={styles.navDisadvantages}>
                <Text style={styles.navSubtitle}>❌ Desvantagens:</Text>
                {navType.disadvantages.map((disadvantage, i) => (
                  <Text key={i} style={styles.navPoint}>• {disadvantage}</Text>
                ))}
              </View>
            </View>
            
            <Text style={styles.navUsage}>
              <Text style={styles.navUsageLabel}>💡 Quando usar: </Text>
              {navType.usage}
            </Text>
            
            <View style={styles.demoButton}>
              <Text style={styles.demoButtonText}>Tocar para demonstrar →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tecnologias utilizadas */}
      <View style={styles.technologiesSection}>
        <Text style={styles.sectionTitle}>⚙️ Tecnologias Utilizadas</Text>
        
        {technologies.map((tech, index) => (
          <View key={index} style={styles.techCard}>
            <View style={styles.techHeader}>
              <Text style={styles.techName}>{tech.name}</Text>
              <Text style={styles.techVersion}>{tech.version}</Text>
            </View>
            <Text style={styles.techPurpose}>{tech.purpose}</Text>
          </View>
        ))}
      </View>

      {/* Componentes obrigatórios utilizados */}
      <View style={styles.componentsSection}>
        <Text style={styles.sectionTitle}>🧩 Componentes React Native Utilizados</Text>
        
        <View style={styles.componentsGrid}>
          {[
            'View', 'ScrollView', 'Text', 'Button', 'Image', 
            'StyleSheet', 'TouchableOpacity', 'TextInput', 'Alert'
          ].map((component, index) => (
            <View key={index} style={styles.componentChip}>
              <Text style={styles.componentText}>{component}</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.componentsNote}>
          Todos os componentes obrigatórios foram implementados de acordo com a especificação do projeto.
        </Text>
      </View>

      {/* Objetivo acadêmico */}
      <View style={styles.objectiveSection}>
        <Text style={styles.sectionTitle}>🎯 Objetivo Acadêmico</Text>
        
        <Text style={styles.objectiveText}>
          Este aplicativo foi desenvolvido como caso de uso prático para demonstrar a implementação 
          e integração dos três principais tipos de navegação em React Native:
        </Text>
        
        <View style={styles.objectiveList}>
          <Text style={styles.objectiveItem}>
            • <Text style={styles.objectiveBold}>Stack Navigation:</Text> Para fluxos hierárquicos de cursos e aulas
          </Text>
          <Text style={styles.objectiveItem}>
            • <Text style={styles.objectiveBold}>Tab Navigation:</Text> Para seções principais do aplicativo
          </Text>
          <Text style={styles.objectiveItem}>
            • <Text style={styles.objectiveBold}>Drawer Navigation:</Text> Para funcionalidades secundárias
          </Text>
        </View>
        
        <Text style={styles.objectiveConclusion}>
          A navegação híbrida demonstra como diferentes tipos podem ser combinados para criar 
          uma experiência de usuário completa e intuitiva em aplicações educacionais.
        </Text>
      </View>

      {/* Ações */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton} onPress={handleViewSourceCode}>
          <Text style={styles.actionIcon}>💻</Text>
          <Text style={styles.actionText}>Ver Código Fonte</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleContactDeveloper}>
          <Text style={styles.actionIcon}>📧</Text>
          <Text style={styles.actionText}>Contato</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.actionIcon}>☰</Text>
          <Text style={styles.actionText}>Menu Principal</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {projectInfo.year} - Projeto Acadêmico de Navegação React Native
        </Text>
        <Text style={styles.footerSubtext}>
          Desenvolvido para fins educacionais
        </Text>
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
    backgroundColor: '#3F51B5',
    padding: 30,
    alignItems: 'center',
  },
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 15,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 16,
    color: '#c5cae9',
    marginBottom: 10,
  },
  appDescription: {
    fontSize: 14,
    color: '#e8eaf6',
    textAlign: 'center',
    lineHeight: 20,
  },
  projectInfo: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoCard: {
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  navigationSection: {
    margin: 20,
  },
  navigationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  navIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  navDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  navExamples: {
    fontSize: 13,
    color: '#666',
    marginBottom: 15,
  },
  navExamplesLabel: {
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  navDetails: {
    marginBottom: 15,
  },
  navAdvantages: {
    marginBottom: 10,
  },
  navDisadvantages: {},
  navSubtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  navPoint: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginLeft: 10,
  },
  navUsage: {
    fontSize: 13,
    color: '#555',
    fontStyle: 'italic',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  navUsageLabel: {
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  demoButton: {
    backgroundColor: '#e8eaf6',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  demoButtonText: {
    fontSize: 13,
    color: '#3F51B5',
    fontWeight: 'bold',
  },
  technologiesSection: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  techCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  techHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  techName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  techVersion: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  techPurpose: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  componentsSection: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  componentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  componentChip: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  componentText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: 'bold',
  },
  componentsNote: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  objectiveSection: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  objectiveText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
  },
  objectiveList: {
    marginBottom: 15,
  },
  objectiveItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 8,
  },
  objectiveBold: {
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  objectiveConclusion: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    fontStyle: 'italic',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3F51B5',
  },
  actionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    minWidth: 90,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  footerSubtext: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
  },
});

export default AboutScreen;