# 🔧 Guia de Configuração do Ambiente - EduNav

## 📋 Visão Geral

Este projeto **EduNav** utiliza **Expo** para desenvolvimento React Native, permitindo execução tanto em dispositivos móveis quanto no navegador web. O Expo simplifica significativamente o processo de configuração e desenvolvimento.

## 🎯 Configuração Atual do Projeto

### Tecnologias Utilizadas
- **React Native**: 0.72.6
- **Expo SDK**: 49.0.0  
- **React Navigation**: v6
- **Plataformas**: Web (navegador) + Android/iOS

### Pré-requisitos Mínimos

#### 1. Instalação do Node.js
1. Acesse https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Verifique a instalação: `node --version` e `npm --version`

#### 2. Expo CLI (Opcional)
```bash
# Instalar Expo CLI globalmente (opcional)
npm install -g @expo/cli
```

## � Execução Rápida (Recomendada)

### Opção 1: Execução Web (Mais Simples)
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar no navegador web
npx expo start --web
```
🌐 **Acesse**: http://localhost:19006

### Opção 2: Usando Expo Go no Celular
```bash
# 1. Instalar Expo Go no seu celular (App Store/Play Store)
# 2. No projeto, executar:
npx expo start

# 3. Escanear o QR code com o Expo Go
```

## 🖥️ Configuração Completa para Android (Opcional)

*Esta seção é necessária apenas se quiser compilar para APK nativo*

### ⚙️ Configuração Android Studio (Para Compilação Nativa)

#### 1. Download e Instalação
1. Baixe o Android Studio em: https://developer.android.com/studio
2. Execute o instalador
3. Siga o setup wizard para instalar:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

#### 2. Configuração do SDK
1. Abra o Android Studio
2. Vá em **File → Settings** (ou **Android Studio → Preferences** no macOS)
3. Navegue para **Appearance & Behavior → System Settings → Android SDK**
4. Na aba **SDK Platforms**, instale:
   - Android 13 (API Level 33)
   - Android 12 (API Level 31)
   - Android 11 (API Level 30)
5. Na aba **SDK Tools**, instale:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Intel x86 Emulator Accelerator (se aplicável)

#### 3. Configuração de Variáveis de Ambiente

#### Windows:
```bash
# Adicione ao PATH do sistema:
C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools
C:\Users\%USERNAME%\AppData\Local\Android\Sdk\tools

# Configure ANDROID_HOME:
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
```

#### macOS/Linux:
```bash
# Adicione ao ~/.bashrc ou ~/.zshrc:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 📱 Executando o Projeto EduNav

### Método 1: Expo Web (Recomendado para Demonstração)
```bash
# 1. Instalar dependências
npm install

# 2. Executar no navegador
npx expo start --web
```
✅ **Vantagens**: 
- Configuração mínima
- Execução imediata
- Navegação totalmente funcional
- Ideal para demonstrações

### Método 2: Expo Go (Celular Real)
```bash
# 1. Instalar Expo Go no celular
# 2. Executar comando:
npx expo start

# 3. Escanear QR code
```

### Método 3: Emulador Android (Avançado)
```bash
# Apenas se Android Studio estiver configurado:
npx expo run:android
```

## � Scripts Disponíveis

### Scripts Principais
```bash
# Instalar dependências
npm install

# Executar no web (recomendado)
npx expo start --web

# Executar modo desenvolvimento completo
npx expo start

# Executar Android (requer configuração)
npx expo run:android
```

### Scripts de Build (Avançado)
```bash
# Build para web
npx expo build:web

# Build para Android (requer EAS)
npx expo build:android
```

## ❗ Solução de Problemas Comuns

### 🌐 Problemas Web (Expo)

#### Erro: "Expo CLI not found"
**Solução**: 
```bash
# Usar npx em vez de instalação global
npx expo start --web
```

#### Porta já em uso
**Solução**:
```bash
# Usar porta diferente
npx expo start --web --port 19007
```

#### Erro de dependências
**Solução**:
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### 📱 Problemas Mobile (Expo Go)

#### QR Code não funciona
**Solução**:
1. Verificar se celular e PC estão na mesma rede
2. Usar conexão via túnel: `npx expo start --tunnel`

#### Erro de conectividade
**Solução**:
```bash
# Reiniciar servidor Expo
npx expo start --clear
```

### 🔧 Problemas Android Nativo (Avançado)

#### Erro: "Unable to locate adb"
**Solução**: Verifique se o Android SDK está no PATH

#### Erro: "No devices/emulators found"
**Solução**: 
1. Inicie o emulador Android
2. Verifique com: `adb devices`

#### Erro de build Android
**Solução**:
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

## 📋 Checklist de Configuração

### ✅ Configuração Básica (Obrigatória)
- [ ] Node.js instalado e funcionando (`node --version`)
- [ ] Dependências instaladas (`npm install`)
- [ ] Expo funcionando (`npx expo start --web`)
- [ ] Navegador abrindo em http://localhost:19006
- [ ] Navegação funcionando (Stack, Tab, Drawer)

### ✅ Configuração Mobile (Opcional)
- [ ] Expo Go instalado no celular
- [ ] Mesmo Wi-Fi entre PC e celular
- [ ] QR Code escaneando corretamente
- [ ] App rodando no celular

### ✅ Configuração Android Nativa (Avançada)
- [ ] Android Studio instalado
- [ ] Android SDK configurado
- [ ] Variáveis de ambiente configuradas
- [ ] Emulador Android funcionando
- [ ] `adb devices` mostra dispositivos
- [ ] Build nativo funcionando

## 🎯 Próximos Passos

### Para Demonstração Rápida:
1. **Execute**: `npx expo start --web`
2. **Acesse**: http://localhost:19006
3. **Explore**: Stack, Tab e Drawer Navigation
4. **Documente**: Capture screenshots para relatório

### Para Desenvolvimento Avançado:
1. **Configure Android Studio** (se necessário)
2. **Teste em dispositivo real** via Expo Go
3. **Build para produção** usando EAS Build
4. **Deploy** para stores

## 📞 Suporte e Recursos

### 📚 Documentação Oficial
- **Expo**: https://docs.expo.dev/
- **React Native**: https://reactnative.dev/
- **React Navigation**: https://reactnavigation.org/

### 🔧 Comandos de Debug
```bash
# Verificar status do Expo
npx expo doctor

# Limpar cache
npx expo start --clear

# Modo verbose
npx expo start --web --verbose

# Verificar dependências
npm list --depth=0
```

### 🚨 Em Caso de Problemas
1. **Verificar logs**: Console do navegador (F12)
2. **Limpar cache**: `npx expo start --clear`
3. **Reinstalar**: `rm -rf node_modules && npm install`
4. **Verificar portas**: Tente portas diferentes

## 💡 Dicas de Produtividade

### 🌐 Desenvolvimento Web
- Use **Hot Reload** para mudanças instantâneas
- **DevTools** do navegador para debug
- **Responsive mode** para testar diferentes telas

### 📱 Desenvolvimento Mobile
- **Shake gesture** no Expo Go para menu de desenvolvimento
- **Fast Refresh** para atualizações rápidas
- **Network debugging** via Flipper (avançado)

---

**✨ Lembre-se**: Com Expo, o desenvolvimento é muito mais simples! 
**🎯 Foco**: Execute `npx expo start --web` e comece a explorar a navegação imediatamente.