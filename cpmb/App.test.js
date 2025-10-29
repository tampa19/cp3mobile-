import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Sucesso!', 'Seu app React Native está funcionando!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 EduNav - Funcionando!</Text>
      <Text style={styles.subtitle}>Aplicativo React Native</Text>
      
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Testar Funcionalidade</Text>
      </TouchableOpacity>
      
      <View style={styles.section}>
        <Text style={styles.feature}>✅ React Native funcionando</Text>
        <Text style={styles.feature}>✅ Componentes nativos</Text>
        <Text style={styles.feature}>✅ TouchableOpacity</Text>
        <Text style={styles.feature}>✅ Alert</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#E8F5E8',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 10,
  },
  feature: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
    fontWeight: '500',
  },
});