/**
 * Tela de Configurações (Settings Screen)
 * Demonstra Drawer Navigation e componentes obrigatórios
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoplay: true,
    downloadOverWifi: true,
    language: 'pt-BR',
    qualityPreference: 'auto',
  });

  const languages = [
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'en-US', name: 'English (US)' },
    { code: 'es-ES', name: 'Español' },
    { code: 'fr-FR', name: 'Français' },
  ];

  const qualityOptions = [
    { value: 'auto', label: 'Automática' },
    { value: 'high', label: 'Alta (HD)' },
    { value: 'medium', label: 'Média' },
    { value: 'low', label: 'Baixa' },
  ];

  const handleToggleSetting = (settingKey) => {
    setSettings(prev => ({
      ...prev,
      [settingKey]: !prev[settingKey],
    }));

    const settingNames = {
      notifications: 'Notificações',
      darkMode: 'Modo Escuro',
      autoplay: 'Reprodução Automática',
      downloadOverWifi: 'Download apenas no Wi-Fi',
    };

    Alert.alert(
      'Configuração Alterada',
      `${settingNames[settingKey]} ${!settings[settingKey] ? 'ativada' : 'desativada'} com sucesso!`,
      [{ text: 'OK' }]
    );
  };

  const handleLanguageChange = () => {
    Alert.alert(
      'Idioma',
      'Selecione o idioma do aplicativo:',
      [
        ...languages.map(lang => ({
          text: lang.name,
          onPress: () => {
            setSettings(prev => ({ ...prev, language: lang.code }));
            Alert.alert('Sucesso', `Idioma alterado para ${lang.name}`);
          },
        })),
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  const handleQualityChange = () => {
    Alert.alert(
      'Qualidade de Vídeo',
      'Selecione a qualidade padrão para reprodução:',
      [
        ...qualityOptions.map(option => ({
          text: option.label,
          onPress: () => {
            setSettings(prev => ({ ...prev, qualityPreference: option.value }));
            Alert.alert('Sucesso', `Qualidade alterada para ${option.label}`);
          },
        })),
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert(
      'Limpar Cache',
      'Isso irá remover todos os dados temporários do aplicativo. Continuar?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: () => {
            // Simular limpeza de cache
            setTimeout(() => {
              Alert.alert('Concluído', 'Cache limpo com sucesso! O aplicativo pode ficar mais rápido.');
            }, 1000);
          },
        },
      ]
    );
  };

  const handleResetSettings = () => {
    Alert.alert(
      'Resetar Configurações',
      'Isso irá restaurar todas as configurações para os valores padrão. Esta ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Resetar',
          style: 'destructive',
          onPress: () => {
            setSettings({
              notifications: true,
              darkMode: false,
              autoplay: true,
              downloadOverWifi: true,
              language: 'pt-BR',
              qualityPreference: 'auto',
            });
            Alert.alert('Concluído', 'Configurações restauradas para os valores padrão.');
          },
        },
      ]
    );
  };

  const handleBackup = () => {
    Alert.alert(
      'Backup de Dados',
      'Fazer backup do seu progresso e configurações na nuvem?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Fazer Backup',
          onPress: () => {
            // Simular backup
            setTimeout(() => {
              Alert.alert('Sucesso', 'Backup realizado com sucesso! Seus dados estão seguros na nuvem.');
            }, 2000);
          },
        },
      ]
    );
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === settings.language)?.name || 'Português (Brasil)';
  };

  const getCurrentQualityName = () => {
    return qualityOptions.find(option => option.value === settings.qualityPreference)?.label || 'Automática';
  };

  const renderToggleSetting = (title, description, settingKey, icon) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => handleToggleSetting(settingKey)}
    >
      <View style={styles.settingIcon}>
        <Text style={styles.settingIconText}>{icon}</Text>
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <View style={styles.settingAction}>
        <View style={[styles.toggle, settings[settingKey] && styles.toggleActive]}>
          <Text style={styles.toggleText}>
            {settings[settingKey] ? 'ON' : 'OFF'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderActionSetting = (title, description, icon, onPress, valueText = null) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingIcon}>
        <Text style={styles.settingIconText}>{icon}</Text>
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
        {valueText && <Text style={styles.settingValue}>{valueText}</Text>}
      </View>
      <View style={styles.settingAction}>
        <Text style={styles.settingArrow}>→</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
        <Text style={styles.subtitle}>
          Personalize sua experiência de aprendizado
        </Text>
      </View>

      {/* Seção de Notificações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔔 Notificações</Text>
        {renderToggleSetting(
          'Notificações Push',
          'Receba lembretes sobre novos cursos e atualizações',
          'notifications',
          '📱'
        )}
      </View>

      {/* Seção de Aparência */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎨 Aparência</Text>
        {renderToggleSetting(
          'Modo Escuro',
          'Interface com cores escuras para reduzir cansaço visual',
          'darkMode',
          '🌙'
        )}
      </View>

      {/* Seção de Reprodução */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>▶️ Reprodução</Text>
        {renderToggleSetting(
          'Reprodução Automática',
          'Inicia automaticamente a próxima aula após concluir uma',
          'autoplay',
          '🎬'
        )}
        {renderActionSetting(
          'Qualidade de Vídeo',
          'Qualidade padrão para reprodução de vídeos',
          '📺',
          handleQualityChange,
          getCurrentQualityName()
        )}
      </View>

      {/* Seção de Downloads */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📥 Downloads</Text>
        {renderToggleSetting(
          'Download apenas no Wi-Fi',
          'Economize dados móveis fazendo download apenas via Wi-Fi',
          'downloadOverWifi',
          '📶'
        )}
      </View>

      {/* Seção de Idioma */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Idioma e Região</Text>
        {renderActionSetting(
          'Idioma do Aplicativo',
          'Altere o idioma da interface do aplicativo',
          '🗣️',
          handleLanguageChange,
          getCurrentLanguageName()
        )}
      </View>

      {/* Seção de Dados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💾 Dados e Armazenamento</Text>
        {renderActionSetting(
          'Limpar Cache',
          'Remove dados temporários para liberar espaço',
          '🧹',
          handleClearCache
        )}
        {renderActionSetting(
          'Fazer Backup',
          'Salve seu progresso e configurações na nuvem',
          '☁️',
          handleBackup
        )}
      </View>

      {/* Seção de Sistema */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ Sistema</Text>
        {renderActionSetting(
          'Resetar Configurações',
          'Restaura todas as configurações para valores padrão',
          '🔄',
          handleResetSettings
        )}
      </View>

      {/* Informações sobre Drawer Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>☰ Drawer Navigation - Configurações</Text>
        <Text style={styles.navigationInfoText}>
          A tela de Configurações exemplifica como o Drawer Navigation é ideal para:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Funcionalidades secundárias mas importantes
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Configurações que não precisam de acesso frequente
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Organização de opções sem poluir a interface principal
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Acesso via menu lateral quando necessário
        </Text>
        <Text style={styles.navigationInfoAdvantage}>
          ✅ Vantagem: Mantém a interface principal limpa e focada
        </Text>
        <Text style={styles.navigationInfoDisadvantage}>
          ❌ Desvantagem: Pode tornar configurações menos acessíveis
        </Text>
        
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.drawerButtonText}>☰ Voltar ao Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Informações da versão */}
      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>EduNav - Versão 1.0.0</Text>
        <Text style={styles.versionSubtext}>
          Aplicativo de demonstração para navegação React Native
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
    backgroundColor: '#607D8B',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#cfd8dc',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingIconText: {
    fontSize: 20,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  settingValue: {
    fontSize: 13,
    color: '#607D8B',
    fontWeight: 'bold',
    marginTop: 4,
  },
  settingAction: {
    marginLeft: 10,
  },
  toggle: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    minWidth: 50,
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: '#4CAF50',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  settingArrow: {
    fontSize: 18,
    color: '#999',
  },
  navigationInfo: {
    backgroundColor: '#ffffff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigationInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#607D8B',
    marginBottom: 10,
  },
  navigationInfoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  navigationInfoPoint: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 5,
  },
  navigationInfoAdvantage: {
    fontSize: 13,
    color: '#4CAF50',
    marginTop: 8,
    marginBottom: 4,
  },
  navigationInfoDisadvantage: {
    fontSize: 13,
    color: '#FF5722',
    marginBottom: 15,
  },
  drawerButton: {
    backgroundColor: '#607D8B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  drawerButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  versionInfo: {
    alignItems: 'center',
    padding: 20,
    margin: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  versionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  versionSubtext: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default SettingsScreen;