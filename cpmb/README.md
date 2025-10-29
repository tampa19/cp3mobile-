# 📱 EduNav - Meu Projeto de Navegação React Native

## 🎯 Sobre Meu Projeto

Desenvolvi o EduNav como projeto acadêmico para demonstrar meu aprendizado dos três principais tipos de navegação em React Native. Escolhi criar um aplicativo educacional porque queria mostrar na prática como integrar:

- **Stack Navigation**: Para navegação hierárquica entre telas relacionadas
- **Tab Navigation**: Para acesso rápido às seções principais  
- **Drawer Navigation**: Para funcionalidades secundárias em menu lateral

### 📋 Minha Escolha do Caso de Uso

Optei por simular uma plataforma de cursos online porque permite demonstrar todos os tipos de navegação de forma natural e intuitiva. O usuário pode navegar entre cursos (Stack), acessar seções principais (Tab) e configurações no menu lateral (Drawer).

## 🚀 Como Preparei o Ambiente

### 1. Node.js
Instalei o Node.js (versão 16 ou superior):
- Baixei em https://nodejs.org/ para Windows
- Configurei as variáveis de ambiente

### 2. React Native CLI
```bash
npm install -g react-native-cli
```

### 3. Android Studio
Para desenvolvimento Android configurei:
- Android Studio completo
- Android SDK
- Variáveis de ambiente (ANDROID_HOME)
- Emulador Android para testes

### 4. Java Development Kit (JDK)
- Instalei o JDK 11
- Configurei a variável JAVA_HOME

## 🛠️ Como Executar Meu Projeto

### 1. Instalar Dependências
```bash
# No diretório do projeto
npm install
```

### 2. Executar com Expo (Recomendado)
```bash
# Inicie o servidor Expo
npx expo start --web

# Ou para Android/iOS
npx expo start
```

### 3. Executar no Android (React Native CLI)
```bash
# Inicie o Metro bundler
npx react-native start

# Execute no Android
npx react-native run-android
```

## 📱 Como Organizei o Projeto

```
EduNav/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Criei a tela inicial
│   │   ├── CoursesScreen.js       # Lista de cursos (Stack Nav)
│   │   ├── CourseDetailScreen.js  # Detalhes do curso (Stack Nav)
│   │   ├── LessonScreen.js        # Tela de aula (Stack Nav)
│   │   ├── SearchScreen.js        # Busca (Tab Nav)
│   │   ├── ProfileScreen.js       # Perfil (Tab Nav)
│   │   ├── FavoritesScreen.js     # Favoritos (Drawer Nav)
│   │   ├── SettingsScreen.js      # Configurações (Drawer Nav)
│   │   └── AboutScreen.js         # Sobre (Drawer Nav)
│   └── components/
├── App.js                         # Onde configurei toda a navegação
├── package.json                   # Minhas dependências
└── README.md                      # Este arquivo
```

## 🧭 Minha Implementação dos Tipos de Navegação

### Stack Navigation - O que Aprendi
**Implementei o fluxo**: Cursos → Detalhes do Curso → Aula

Descobri que Stack Navigation é perfeito para:
- Navegação hierárquica com histórico automático
- Passagem de parâmetros entre telas
- Fluxos lineares onde o usuário avança e volta

**Vantagens que observei**:
- Navegação intuitiva para o usuário
- Histórico automático (botão voltar)
- Ideal para fluxos sequenciais

**Limitações que encontrei**:
- Pode consumir mais memória em pilhas grandes
- Menos flexível para navegação não-linear

### Tab Navigation - Minha Experiência
**Criei as seções**: Início | Cursos | Buscar | Perfil

Aprendi que Tab Navigation é excelente para:
- Acesso imediato às principais funcionalidades
- Estado preservado entre navegações
- Interface familiar aos usuários

**Benefícios que notei**:
- Usuário sempre sabe onde está
- Funcionalidades principais sempre visíveis
- Troca rápida entre seções

**Desafios que enfrentei**:
- Limitado a poucas seções (máximo 5 recomendado)
- Ocupa espaço permanente na tela

### Drawer Navigation - Como Implementei
**Organizei**: Favoritos | Configurações | Sobre

Percebi que Drawer Navigation é ideal para:
- Funcionalidades secundárias
- Manter interface principal limpa
- Muitas opções sem poluir a tela

**Vantagens que descobri**:
- Economia de espaço na interface
- Permite muitas opções de menu
- Interface principal focada no conteúdo

**Dificuldades que superei**:
- Menos descobrível para usuários novos
- Requer gesto ou clique adicional

## 🎨 Componentes que Usei

Implementei todos os componentes obrigatórios conforme aprendi:

- ✅ `View` - Para estruturar toda a interface visual
- ✅ `ScrollView` - Para telas com muito conteúdo que precisa rolar
- ✅ `Text` - Para todos os textos e informações
- ✅ `Button` - Para criar botões interativos
- ✅ `Image` - Para inserir imagens e logos
- ✅ `StyleSheet` - Para centralizar e organizar estilos
- ✅ `TouchableOpacity` - Para áreas clicáveis com feedback
- ✅ `TextInput` - Para entrada de dados (implementei na busca)
- ✅ `Alert` - Para mensagens e confirmações

## 🔧 Problemas que Resolvi

### Quando o Metro Bundler não iniciava
```bash
npx react-native start --reset-cache
```

### Erros de build no Android
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### Problemas com dependências
```bash
rm -rf node_modules
npm install
```

## 📚 O que Aprendi

### Recursos que Estudei
- [Documentação React Native](https://reactnative.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [Guias Android Development](https://developer.android.com/)

### Conceitos que Dominei
- Integração dos três tipos de navegação
- Passagem de parâmetros entre telas
- Gerenciamento de estado local e global
- Componentização e reutilização de código
- Estilização responsiva com StyleSheet
- Configuração de navegação híbrida

## 🎓 Informações do Meu Trabalho

**Disciplina**: 3º Checkpoint - Mobile Development & IoT  
**Meu Objetivo**: Demonstrar domínio prático dos tipos de navegação React Native  
**Caso de Uso Escolhido**: Aplicativo educacional com navegação híbrida  
**Período**: 2025  
**Aluno**: Daniel

## 📄 Licença

Desenvolvi este projeto para fins acadêmicos como parte dos meus estudos em desenvolvimento mobile.

---

## 🚨 Como Rodar Meu Projeto

1. **Clone ou baixe meu projeto**
2. **Abra o terminal no diretório**
3. **Execute**: `npm install`
4. **Para web**: `npx expo start --web`
5. **Para mobile**: `npx expo start` (escaneie QR code com Expo Go)

Navegue pelo app para ver todos os tipos de navegação que implementei funcionando juntos!

---

**Desenvolvido por mim com ❤️ para aprender React Native na prática**