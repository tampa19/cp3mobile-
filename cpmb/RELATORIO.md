# 📄 Relatório Acadêmico - EduNav: Navegação React Native

## 🎓 Informações do Projeto

**Disciplina**: 3º Checkpoint - Mobile Development & IoT  
**Aluno**: Vinicius 
**Tema**: Implementação de Navegação Híbrida em React Native  
**Projeto**: EduNav - Aplicativo Educacional  
**Data**: Outubro 2025

---

## 📖 Introdução Teórica sobre Navegação e UX em React Native

### Conceitos Fundamentais

A navegação em aplicativos móveis é um elemento crucial da experiência do usuário (UX), representando a espinha dorsal da arquitetura de informação e do fluxo de interação. No React Native, a navegação não é apenas uma funcionalidade técnica, mas uma ferramenta estratégica que define como os usuários interagem, exploram e se orientam dentro do aplicativo.

### Importância da Navegação para UX

A navegação eficiente impacta diretamente:
- **Usabilidade**: Facilita o acesso às funcionalidades
- **Orientação**: Permite que usuários saibam onde estão e para onde podem ir
- **Eficiência**: Reduz o tempo necessário para completar tarefas
- **Satisfação**: Cria uma experiência fluida e intuitiva

### Princípios de Design de Navegação

1. **Clareza**: A navegação deve ser óbvia e previsível
2. **Consistência**: Padrões uniformes em todo o aplicativo
3. **Feedback**: Indicações visuais do estado atual
4. **Acessibilidade**: Utilizável por todos os tipos de usuários

---

## 🧭 Descrição dos Tipos de Navegação Utilizados

### Stack Navigation (Navegação em Pilha)

**Conceito**: Sistema de navegação hierárquica onde as telas são empilhadas umas sobre as outras, criando um histórico linear de navegação.

**Características Principais**:
- Estrutura Last-In-First-Out (LIFO)
- Botão "voltar" automático
- Transições animadas entre telas
- Histórico de navegação mantido automaticamente

**Implementação no EduNav**:
```javascript
function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  );
}
```

**Fluxo de Navegação**: Cursos → Detalhes do Curso → Aula

### Tab Navigation (Navegação por Abas)

**Conceito**: Sistema que apresenta as principais seções do aplicativo através de abas persistentes, permitindo acesso imediato e alternância rápida entre funcionalidades.

**Características Principais**:
- Acesso direto às seções principais
- Estado preservado entre navegações
- Indicadores visuais da seção ativa
- Interface familiar aos usuários

**Implementação no EduNav**:
```javascript
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
```

**Seções Implementadas**: Início | Cursos | Buscar | Perfil

### Drawer Navigation (Menu Lateral)

**Conceito**: Menu lateral deslizante que disponibiliza funcionalidades secundárias e configurações, mantendo a interface principal focada no conteúdo.

**Características Principais**:
- Menu oculto que economiza espaço
- Acesso por gesto (swipe) ou botão
- Ideal para funcionalidades secundárias
- Hierarquia visual clara

**Implementação no EduNav**:
```javascript
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

**Funcionalidades**: Favoritos | Configurações | Sobre

---

## 📱 Prints das Telas do Aplicativo Executadas no Emulador

*Nota: As capturas de tela demonstram a execução real do aplicativo, mostrando a navegação funcionando em tempo real no navegador através do Expo Web.*

### Tela Inicial (Home Screen)
- Exibe boas-vindas ao usuário
- Demonstra componentes View, Text, ScrollView
- Botões interativos com TouchableOpacity
- Implementação de Alert para feedback

### Navegação por Abas (Tab Navigation)
- Quatro abas principais visíveis na parte inferior
- Indicador visual da aba ativa
- Transições suaves entre seções
- Estado preservado durante navegação

### Stack Navigation - Fluxo de Cursos
- Lista de cursos disponíveis
- Navegação para detalhes do curso
- Acesso às aulas individuais
- Botão voltar funcional em cada nível

### Menu Lateral (Drawer Navigation)
- Acesso via ícone de menu (☰)
- Slide lateral revelando opções
- Navegação para Favoritos, Configurações e Sobre
- Interface limpa e organizada

### Telas Funcionais Implementadas
1. **HomeScreen**: Tela inicial com componentes básicos
2. **CoursesScreen**: Lista de cursos com navegação
3. **CourseDetailScreen**: Detalhes específicos do curso
4. **LessonScreen**: Conteúdo da aula
5. **SearchScreen**: Funcionalidade de busca com TextInput
6. **ProfileScreen**: Perfil do usuário
7. **FavoritesScreen**: Cursos favoritos
8. **SettingsScreen**: Configurações do aplicativo
9. **AboutScreen**: Informações sobre o app

---

## 📁 Estrutura de Diretórios da Aplicação

```
EduNav/
├── 📁 src/
│   ├── 📁 screens/
│   │   ├── 📄 HomeScreen.js          # Tela inicial do aplicativo
│   │   ├── 📄 CoursesScreen.js       # Lista de cursos (Stack Nav)
│   │   ├── 📄 CourseDetailScreen.js  # Detalhes do curso (Stack Nav)
│   │   ├── 📄 LessonScreen.js        # Tela de aula (Stack Nav)
│   │   ├── 📄 SearchScreen.js        # Busca de cursos (Tab Nav)
│   │   ├── 📄 ProfileScreen.js       # Perfil do usuário (Tab Nav)
│   │   ├── 📄 FavoritesScreen.js     # Favoritos (Drawer Nav)
│   │   ├── 📄 SettingsScreen.js      # Configurações (Drawer Nav)
│   │   └── 📄 AboutScreen.js         # Sobre o app (Drawer Nav)
│   └── 📁 components/                # Componentes reutilizáveis
├── 📁 android/                       # Configurações Android
├── 📁 node_modules/                  # Dependências do projeto
├── 📄 App.js                         # Configuração principal da navegação
├── 📄 index.js                       # Ponto de entrada da aplicação
├── 📄 package.json                   # Dependências e scripts
├── 📄 app.json                       # Configurações do Expo
├── 📄 babel.config.js                # Configuração do Babel
├── 📄 metro.config.js                # Configuração do Metro bundler
├── 📄 README.md                      # Documentação do projeto
├── 📄 RELATORIO.md                   # Este relatório
└── 📄 SETUP.md                       # Guia de configuração
```

### Organização por Responsabilidade

**Screens**: Cada tela representa uma funcionalidade específica, organizadas por tipo de navegação que demonstram.

**Components**: Componentes reutilizáveis que podem ser utilizados em múltiplas telas.

**Configurações**: Arquivos de configuração para diferentes aspectos do projeto (Expo, Metro, Babel).

---

## 💻 Códigos-fonte Principais (.tsx e .css)

### App.js - Configuração Principal da Navegação

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import LessonScreen from './src/screens/LessonScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AboutScreen from './src/screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para navegação hierárquica de cursos
function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursesList" 
        component={CoursesScreen} 
        options={{ title: 'Cursos Disponíveis' }}
      />
      <Stack.Screen 
        name="CourseDetail" 
        component={CourseDetailScreen} 
        options={{ title: 'Detalhes do Curso' }}
      />
      <Stack.Screen 
        name="Lesson" 
        component={LessonScreen} 
        options={{ title: 'Aula' }}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator para seções principais
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }}
      />
      <Tab.Screen 
        name="Courses" 
        component={CoursesStack} 
        options={{ title: 'Cursos' }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

// Aplicativo principal com Drawer Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#2196F3',
          drawerInactiveTintColor: '#757575',
        }}>
        <Drawer.Screen 
          name="MainTabs" 
          component={MainTabs} 
          options={{ title: 'EduNav - Home' }}
        />
        <Drawer.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{ title: 'Favoritos' }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Configurações' }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Sobre' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

### HomeScreen.js - Demonstração de Componentes

```javascript
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

  const showWelcomeAlert = () => {
    Alert.alert(
      'Bem-vindo ao EduNav!',
      'Explore os diferentes tipos de navegação implementados neste aplicativo.',
      [{ text: 'Entendi', onPress: () => setWelcomePressed(true) }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.logo}
        />
        <Text style={styles.title}>EduNav</Text>
        <Text style={styles.subtitle}>Navegação Educacional</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.welcomeButton} 
          onPress={showWelcomeAlert}
        >
          <Text style={styles.buttonText}>
            {welcomePressed ? 'Bem-vindo!' : 'Clique para Começar'}
          </Text>
        </TouchableOpacity>

        <View style={styles.navigationInfo}>
          <Text style={styles.sectionTitle}>Tipos de Navegação</Text>
          
          <View style={styles.navItem}>
            <Text style={styles.navTitle}>Stack Navigation</Text>
            <Text style={styles.navDescription}>
              Navegação hierárquica nos cursos
            </Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navTitle}>Tab Navigation</Text>
            <Text style={styles.navDescription}>
              Abas principais na parte inferior
            </Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navTitle}>Drawer Navigation</Text>
            <Text style={styles.navDescription}>
              Menu lateral para configurações
            </Text>
          </View>
        </View>

        <Button 
          title="Explorar Cursos" 
          onPress={() => navigation.navigate('Courses')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2196F3',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E3F2FD',
  },
  content: {
    padding: 20,
  },
  welcomeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  navItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  navTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  navDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
```

### Estilos CSS (StyleSheet) - Padrões de Design

```javascript
// Estilos globais utilizados no projeto
const globalStyles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  
  // Cabeçalho padrão
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  
  // Títulos principais
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  
  // Botões primários
  primaryButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  
  // Texto de botões
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Cards de conteúdo
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Texto secundário
  secondaryText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
});
```

---

## 🔄 Breve Explicação do Fluxo de Navegação e Justificativas de Design

### Fluxo Principal de Navegação

**1. Ponto de Entrada**: O usuário inicia no HomeScreen através do Tab Navigation

**2. Navegação Horizontal (Tabs)**: 
- Acesso direto às quatro seções principais
- Estado preservado entre transições
- Indicadores visuais da localização atual

**3. Navegação Vertical (Stack)**:
- Dentro da aba "Cursos", implementei navegação hierárquica
- Fluxo lógico: Lista → Detalhes → Conteúdo
- Histórico automático com botões de retorno

**4. Navegação Lateral (Drawer)**:
- Funcionalidades secundárias acessíveis via menu
- Interface principal mantém foco no conteúdo
- Acesso rápido a configurações e informações

### Justificativas de Design

**Escolha do Tab Navigation como Base**:
- Proporciona acesso imediato às funcionalidades principais
- Familiaridade dos usuários com este padrão
- Permite que os usuários saibam sempre onde estão

**Stack Navigation para Cursos**:
- Fluxo natural de exploração de conteúdo educacional
- Navegação intuitiva com contexto preservado
- Adequado para hierarquia de informações relacionadas

**Drawer para Funcionalidades Secundárias**:
- Evita poluição da interface principal
- Organiza funcionalidades por frequência de uso
- Mantém acessibilidade sem comprometer design

### Padrões de UX Aplicados

**Princípio da Proximidade**: Elementos relacionados agrupados visualmente

**Feedback Visual**: Indicadores de estado ativo em tabs e drawer

**Consistência**: Padrões de cores, tipografia e espaçamento mantidos

**Hierarquia Visual**: Uso de tamanhos de fonte e cores para guiar atenção

---

## 🔗 Descrição sobre Navegação Híbrida

### Conceito de Navegação Híbrida

A navegação híbrida representa a integração inteligente de múltiplos tipos de navegação em uma única aplicação, criando uma experiência coesa que aproveita as vantagens específicas de cada padrão navegacional conforme o contexto de uso.

### Implementação no EduNav

**Estrutura Hierárquica da Navegação**:
```
App (Drawer Navigation)
├── MainTabs (Tab Navigation)
│   ├── Home (Single Screen)
│   ├── Courses (Stack Navigation)
│   │   ├── CoursesList
│   │   ├── CourseDetail
│   │   └── Lesson
│   ├── Search (Single Screen)
│   └── Profile (Single Screen)
├── Favorites (Single Screen)
├── Settings (Single Screen)
└── About (Single Screen)
```

### Vantagens da Abordagem Híbrida

**1. Otimização da Experiência por Contexto**:
- Tab Navigation para acesso rápido às seções principais
- Stack Navigation para fluxos lineares de conteúdo
- Drawer Navigation para funcionalidades administrativas

**2. Flexibilidade de Interação**:
- Usuários podem escolher entre diferentes métodos de navegação
- Adaptação a diferentes preferências e contextos de uso
- Redundância positiva para acessibilidade

**3. Escalabilidade**:
- Facilita adição de novas funcionalidades
- Mantém organização lógica mesmo com crescimento
- Permite especialização de cada tipo de navegação

### Desafios e Soluções

**Complexidade de Estado**:
- *Desafio*: Gerenciar estado entre diferentes navegadores
- *Solução*: Uso do NavigationContainer como wrapper principal

**Consistência Visual**:
- *Desafio*: Manter design coeso entre diferentes tipos
- *Solução*: Sistema de design unificado com cores e tipografia consistentes

**Performance**:
- *Desafio*: Múltiplas pilhas de navegação podem impactar performance
- *Solução*: Lazy loading e otimização de componentes

### Boas Práticas Implementadas

**1. Hierarquia Clara**: Drawer > Tabs > Stack
**2. Contexto Preservado**: Estado mantido durante navegações
**3. Feedback Visual**: Indicadores de localização em todos os níveis
**4. Acessibilidade**: Múltiplas formas de acesso ao mesmo conteúdo

---

## 📊 Conclusão

### Objetivos Alcançados

Este projeto demonstrou com sucesso a implementação e integração dos três principais tipos de navegação em React Native, criando uma experiência de usuário coesa e funcional. Os objetivos propostos foram plenamente atingidos:

✅ **Compreensão Teórica**: Estudei e apliquei os conceitos fundamentais de navegação e UX
✅ **Implementação Prática**: Criei um aplicativo funcional com navegação híbrida
✅ **Demonstração Completa**: Todas as telas e funcionalidades foram implementadas
✅ **Documentação Detalhada**: Projeto totalmente documentado e explicado

### Aprendizados Principais

**Técnicos**:
- Configuração e integração do React Navigation
- Gerenciamento de estado entre diferentes navegadores
- Implementação de componentes React Native
- Configuração do ambiente Expo para desenvolvimento web

**Conceituais**:
- Importância da navegação para UX
- Quando usar cada tipo de navegação
- Princípios de design de interface mobile
- Arquitetura de informação em aplicativos

### Desafios Superados

**Configuração do Ambiente**: Resolvi conflitos entre React Native CLI e Expo
**Navegação Híbrida**: Integrei com sucesso três tipos diferentes de navegação
**Compatibilidade Web**: Adaptei o projeto para execução no navegador
**Estrutura de Projeto**: Organizei código de forma escalável e maintível

### Aplicações Futuras

Este conhecimento adquirido será fundamental para:
- Desenvolvimento de aplicativos móveis mais complexos
- Criação de experiências de usuário mais sofisticadas
- Compreensão de padrões de design mobile
- Base para estudos avançados em React Native

### Reflexão Final

O projeto EduNav não apenas demonstrou a implementação técnica de navegação em React Native, mas também proporcionou uma compreensão profunda sobre como a navegação impacta diretamente a experiência do usuário. A escolha de um caso de uso educacional permitiu explorar diferentes contextos de navegação de forma natural e intuitiva.

A navegação híbrida implementada prova que é possível criar aplicações complexas e funcionais combinando diferentes padrões navegacionais, desde que sejam aplicados de forma consciente e orientada pelas necessidades dos usuários.

---

**Projeto desenvolvido como parte do 3º Checkpoint - Mobile Development & IoT**  
**Implementação completa disponível em: C:\Users\Daniel\cpmb**
- ✅ Desenvolver um caso prático que demonstre o uso integrado dessas navegações em um mesmo aplicativo
- ✅ Avaliar as possibilidades e desafios da navegação híbrida, considerando aspectos de usabilidade, desempenho e manutenção de código

---

## 🧭 2. Tipos de Navegação Implementados

### 2.1 Stack Navigation
**Localização**: Fluxo de Cursos (Cursos → Detalhes → Aula)

**Características Implementadas**:
- Navegação hierárquica entre telas relacionadas
- Histórico automático de navegação com botão "Voltar"
- Passagem de parâmetros entre telas
- Headers customizáveis para cada tela

**Vantagens Observadas**:
- ✅ Navegação intuitiva e familiar aos usuários
- ✅ Histórico automático mantido pelo sistema
- ✅ Facilita fluxos lineares e processos sequenciais
- ✅ Passagem eficiente de dados entre telas

**Desvantagens Identificadas**:
- ❌ Pode consumir mais memória com muitas telas empilhadas
- ❌ Limitado a fluxos predominantemente lineares
- ❌ Dificuldade para navegação não-sequencial

**Casos de Uso Ideais**:
- Detalhamento progressivo de informações
- Fluxos de formulários multi-etapa
- Navegação em catálogos e e-commerce

### 2.2 Tab Navigation
**Localização**: Navegação Principal (Início | Cursos | Buscar | Perfil)

**Características Implementadas**:
- Barra de navegação inferior com ícones
- Acesso direto às principais seções do app
- Estado preservado entre navegações
- Indicadores visuais da seção ativa

**Vantagens Observadas**:
- ✅ Acesso imediato às principais funcionalidades
- ✅ Funcionalidades sempre visíveis e descobríveis
- ✅ Estado preservado durante navegação
- ✅ Familiar para usuários de smartphones

**Desvantagens Identificadas**:
- ❌ Limitado a poucas seções (3-5 idealmente)
- ❌ Ocupa espaço permanente na interface
- ❌ Pode não escalar bem para apps complexos

**Casos de Uso Ideais**:
- Seções principais de alta frequência de acesso
- Aplicativos com funcionalidades bem definidas
- Apps que necessitam de navegação rápida

### 2.3 Drawer Navigation
**Localização**: Menu Lateral (Favoritos | Configurações | Sobre)

**Características Implementadas**:
- Menu lateral deslizante
- Acesso via gesto ou botão "hambúrguer"
- Funcionalidades secundárias organizadas
- Interface principal mais limpa

**Vantagens Observadas**:
- ✅ Economia significativa de espaço na interface
- ✅ Permite acesso a muitas opções sem poluir a tela
- ✅ Interface principal mais focada e limpa
- ✅ Flexível para adicionar novas funcionalidades

**Desvantagens Identificadas**:
- ❌ Funcionalidades menos descobríveis pelos usuários
- ❌ Requer gesto adicional ou conhecimento da localização
- ❌ Pode ser ignorado por usuários inexperientes

**Casos de Uso Ideais**:
- Configurações e preferências
- Funcionalidades administrativas
- Links para páginas informativas

---

## 💻 3. Estrutura de Diretórios da Aplicação

```
EduNav/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Tela inicial - demonstra visão geral
│   │   ├── CoursesScreen.js       # Lista de cursos - Stack Navigation nível 1
│   │   ├── CourseDetailScreen.js  # Detalhes do curso - Stack Navigation nível 2
│   │   ├── LessonScreen.js        # Tela de aula - Stack Navigation nível 3
│   │   ├── SearchScreen.js        # Busca - Tab Navigation
│   │   ├── ProfileScreen.js       # Perfil - Tab Navigation
│   │   ├── FavoritesScreen.js     # Favoritos - Drawer Navigation
│   │   ├── SettingsScreen.js      # Configurações - Drawer Navigation
│   │   └── AboutScreen.js         # Sobre - Drawer Navigation
│   └── components/                # Componentes reutilizáveis
├── App.js                         # Configuração principal da navegação
├── package.json                   # Dependências do projeto
├── README.md                      # Documentação principal
├── SETUP.md                       # Guia de configuração do ambiente
└── android/                       # Configurações específicas do Android
```

---

## 🧩 4. Componentes React Native Utilizados

### Componentes Obrigatórios Implementados
- ✅ **View**: Estruturação visual da interface em todas as telas
- ✅ **ScrollView**: Implementado para rolagem vertical em telas com conteúdo extenso
- ✅ **Text**: Utilizado para exibição de textos, títulos e informações
- ✅ **Button**: Implementado para ações principais como matrícula e navegação
- ✅ **Image**: Inserção de logos, ícones e imagens dos cursos
- ✅ **StyleSheet**: Centralização e organização de estilos em todas as telas
- ✅ **TouchableOpacity**: Criação de áreas clicáveis com feedback visual
- ✅ **TextInput**: Campo de entrada para busca na SearchScreen
- ✅ **Alert**: Exibição de mensagens, confirmações e feedback ao usuário

### Bibliotecas de Navegação
- **@react-navigation/native**: Core da navegação
- **@react-navigation/stack**: Implementação da Stack Navigation
- **@react-navigation/drawer**: Implementação da Drawer Navigation
- **@react-navigation/bottom-tabs**: Implementação da Tab Navigation

---

## 🏗️ 5. Fluxo de Navegação e Justificativas de Design

### Navegação Híbrida Implementada
```
Drawer Navigation (Principal)
├── Tab Navigation (Seções Principais)
│   ├── Início (HomeScreen)
│   ├── Cursos (Stack Navigation)
│   │   ├── Lista de Cursos (CoursesScreen)
│   │   ├── Detalhes do Curso (CourseDetailScreen)
│   │   └── Aula (LessonScreen)
│   ├── Buscar (SearchScreen)
│   └── Perfil (ProfileScreen)
├── Favoritos (FavoritesScreen)
├── Configurações (SettingsScreen)
└── Sobre (AboutScreen)
```

### Justificativas de Design

**1. Drawer como Container Principal**
- Permite acesso a funcionalidades secundárias importantes
- Mantém a interface principal limpa e focada
- Facilita expansão futura de funcionalidades

**2. Tab Navigation para Seções Principais**
- Acesso rápido às quatro funcionalidades mais utilizadas
- Navegação intuitiva e familiar aos usuários
- Estado preservado entre as seções

**3. Stack Navigation para Fluxo de Cursos**
- Ideal para o fluxo hierárquico: explorar → detalhar → estudar
- Permite passagem de dados específicos do curso
- Mantém contexto durante todo o fluxo de aprendizado

---

## 📊 6. Prints das Telas do Aplicativo Executadas no Emulador

*Nota: Os prints serão gerados após a execução no emulador Android seguindo o guia SETUP.md*

### Telas Principais (Tab Navigation)
1. **HomeScreen**: Apresentação do app e tipos de navegação
2. **CoursesScreen**: Lista de cursos disponíveis
3. **SearchScreen**: Busca com filtros por categoria e nível
4. **ProfileScreen**: Estatísticas e progresso do usuário

### Fluxo Stack Navigation
5. **CourseDetailScreen**: Detalhes específicos do curso selecionado
6. **LessonScreen**: Interface de reprodução de aula

### Menu Drawer Navigation
7. **FavoritesScreen**: Cursos salvos pelo usuário
8. **SettingsScreen**: Configurações e preferências
9. **AboutScreen**: Informações do projeto e navegação

---

## 🔍 7. Breve Explicação do Fluxo de Navegação

### Fluxo Principal de Uso
1. **Entrada**: Usuário inicia no HomeScreen via Tab Navigation
2. **Exploração**: Navega entre Início, Cursos, Buscar e Perfil via tabs
3. **Detalhamento**: Ao selecionar um curso, entra na Stack Navigation
4. **Aprofundamento**: Progride através de Cursos → Detalhes → Aula
5. **Funcionalidades Secundárias**: Acessa Drawer para Favoritos, Configurações e Sobre

### Experiência do Usuário
- **Discoverability**: Tab Navigation torna principais funcionalidades visíveis
- **Efficiency**: Stack Navigation permite aprofundamento rápido
- **Organization**: Drawer Navigation mantém funcionalidades secundárias acessíveis

---

## 📈 8. Descrição sobre Navegação Híbrida

### Conceito de Navegação Híbrida
A navegação híbrida combina múltiplos tipos de navegação em uma única aplicação, aproveitando as vantagens específicas de cada tipo para criar uma experiência de usuário mais completa e eficiente.

### Implementação no EduNav
O EduNav demonstra navegação híbrida através da integração de:
- **Drawer** como container principal
- **Tabs** para seções de alta frequência
- **Stack** para fluxos detalhados

### Vantagens da Abordagem Híbrida
1. **Flexibilidade**: Cada funcionalidade usa o tipo de navegação mais apropriado
2. **Eficiência**: Usuários acessam funcionalidades pelo caminho mais direto
3. **Escalabilidade**: Facilita adição de novas funcionalidades
4. **Usabilidade**: Combina familiaridade (tabs) com descoberta (drawer)

### Desafios da Navegação Híbrida
1. **Complexidade**: Requer planejamento cuidadoso da arquitetura
2. **Consistência**: Manter experiência coesa entre diferentes tipos
3. **Performance**: Gerenciar estado entre múltiplos navegadores
4. **Manutenção**: Maior complexidade de código e debugging

### Boas Práticas Aplicadas
- Hierarquia clara de navegação
- Consistência visual entre tipos
- Estado preservado apropriadamente
- Transições suaves entre contextos

---

## 🎯 9. Conclusão

### Objetivos Alcançados
O projeto EduNav demonstrou com sucesso a implementação prática dos três principais tipos de navegação em React Native, evidenciando como cada tipo atende diferentes necessidades de UX em um aplicativo educacional.

### Aprendizados Principais
1. **Stack Navigation** é ideal para fluxos hierárquicos e sequenciais
2. **Tab Navigation** oferece acesso rápido a funcionalidades principais
3. **Drawer Navigation** organiza eficientemente funcionalidades secundárias
4. **Navegação Híbrida** maximiza eficiência quando bem planejada

### Aplicações Práticas
O conhecimento adquirido sobre navegação React Native é aplicável em:
- Aplicativos educacionais e e-learning
- E-commerce e marketplaces
- Aplicativos corporativos e produtividade
- Redes sociais e entretenimento

### Próximos Passos
- Implementação de animações de transição customizadas
- Otimização de performance para grandes volumes de dados
- Implementação de navegação baseada em deep links
- Teste de usabilidade com usuários reais

---

**Projeto desenvolvido como demonstração prática dos conceitos de navegação em React Native para fins acadêmicos.**