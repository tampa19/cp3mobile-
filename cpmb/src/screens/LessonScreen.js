/**
 * Tela de Aula (Lesson Screen)
 * Demonstra Stack Navigation - terceira tela da stack
 * Inclui componentes obrigatórios: ScrollView, Button, TouchableOpacity, Alert
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LessonScreen = ({ route, navigation }) => {
  const { lessonData, courseTitle } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [notes, setNotes] = useState('');

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      Alert.alert('Pausado', 'Aula pausada. Continue quando estiver pronto!');
    } else {
      setIsPlaying(true);
      // Simular progresso da aula
      simulateProgress();
      Alert.alert(
        'Reproduzindo',
        'Aula iniciada! Acompanhe o conteúdo e faça anotações.',
        [{ text: 'OK' }]
      );
    }
  };

  const simulateProgress = () => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          setIsCompleted(true);
          Alert.alert(
            'Aula Concluída!',
            'Parabéns! Você concluiu esta aula. Continue para a próxima!',
            [
              {
                text: 'Próxima Aula',
                onPress: handleNextLesson,
              },
              {
                text: 'Voltar ao Curso',
                onPress: () => navigation.goBack(),
              },
            ]
          );
          return 100;
        }
        return prev + 2;
      });
    }, 200);
  };

  const handleNextLesson = () => {
    Alert.alert(
      'Próxima Aula',
      'Esta é uma demonstração. Em um app real, você navegaria para a próxima aula.',
      [
        {
          text: 'Voltar ao Curso',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const handleTakeNotes = () => {
    Alert.prompt(
      'Anotações da Aula',
      'Digite suas anotações sobre esta aula:',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Salvar',
          onPress: (text) => {
            setNotes(text || '');
            Alert.alert('Sucesso', 'Anotações salvas com sucesso!');
          },
        },
      ],
      'plain-text',
      notes
    );
  };

  const handleBookmark = () => {
    Alert.alert(
      'Marcador Adicionado',
      'Esta aula foi adicionada aos seus favoritos!',
      [{ text: 'OK' }]
    );
  };

  const getLessonTypeDescription = (type) => {
    switch (type) {
      case 'video':
        return 'Esta é uma aula em vídeo com conteúdo teórico e demonstrações práticas.';
      case 'exercise':
        return 'Esta é uma aula prática com exercícios para você resolver.';
      case 'project':
        return 'Esta é uma aula de projeto onde você aplicará os conceitos aprendidos.';
      default:
        return 'Conteúdo educacional de alta qualidade.';
    }
  };

  const renderProgressBar = () => {
    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(progress)}%</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header da aula */}
      <View style={styles.lessonHeader}>
        <Text style={styles.courseTitle}>{courseTitle}</Text>
        <Text style={styles.lessonTitle}>{lessonData.title}</Text>
        <Text style={styles.lessonDescription}>{lessonData.description}</Text>
        
        <View style={styles.lessonMeta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>⏱️</Text>
            <Text style={styles.metaText}>{lessonData.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>
              {lessonData.type === 'video' ? '🎥' : 
               lessonData.type === 'exercise' ? '✏️' : '🚀'}
            </Text>
            <Text style={styles.metaText}>
              {lessonData.type === 'video' ? 'Vídeo-aula' : 
               lessonData.type === 'exercise' ? 'Exercício' : 'Projeto'}
            </Text>
          </View>
        </View>
      </View>

      {/* Player de vídeo simulado */}
      <View style={styles.videoPlayer}>
        <View style={styles.videoScreen}>
          {!isPlaying ? (
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
              <Text style={styles.playButtonText}>▶️</Text>
              <Text style={styles.playButtonLabel}>Iniciar Aula</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.videoPlaying}>
              <TouchableOpacity style={styles.pauseButton} onPress={handlePlayPause}>
                <Text style={styles.pauseButtonText}>⏸️</Text>
              </TouchableOpacity>
              <Text style={styles.videoStatus}>Reproduzindo...</Text>
            </View>
          )}
        </View>
        
        {renderProgressBar()}
        
        <View style={styles.videoControls}>
          <Button
            title={isPlaying ? "Pausar" : "Reproduzir"}
            onPress={handlePlayPause}
            color="#2196F3"
          />
        </View>
      </View>

      {/* Conteúdo da aula */}
      <View style={styles.lessonContent}>
        <Text style={styles.contentTitle}>Sobre esta Aula</Text>
        <Text style={styles.contentDescription}>
          {getLessonTypeDescription(lessonData.type)}
        </Text>
        
        <Text style={styles.contentText}>
          Nesta aula você aprenderá conceitos fundamentais que são essenciais para 
          o desenvolvimento de aplicações móveis modernas. O conteúdo foi cuidadosamente 
          preparado para proporcionar uma experiência de aprendizado prática e eficiente.
        </Text>

        <View style={styles.learningObjectives}>
          <Text style={styles.objectivesTitle}>Objetivos de Aprendizado:</Text>
          <Text style={styles.objective}>• Compreender os conceitos fundamentais</Text>
          <Text style={styles.objective}>• Aplicar conhecimentos na prática</Text>
          <Text style={styles.objective}>• Desenvolver habilidades técnicas</Text>
          <Text style={styles.objective}>• Resolver problemas reais</Text>
        </View>
      </View>

      {/* Ações da aula */}
      <View style={styles.lessonActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleTakeNotes}>
          <Text style={styles.actionIcon}>📝</Text>
          <Text style={styles.actionText}>Fazer Anotações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleBookmark}>
          <Text style={styles.actionIcon}>⭐</Text>
          <Text style={styles.actionText}>Favoritar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => Alert.alert('Compartilhar', 'Compartilhar esta aula com amigos!')}
        >
          <Text style={styles.actionIcon}>📤</Text>
          <Text style={styles.actionText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>

      {/* Status da aula */}
      {isCompleted && (
        <View style={styles.completionStatus}>
          <Text style={styles.completionIcon}>✅</Text>
          <Text style={styles.completionText}>Aula Concluída!</Text>
          <Text style={styles.completionSubtext}>
            Parabéns! Continue para a próxima aula.
          </Text>
        </View>
      )}

      {/* Informações sobre Stack Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>📱 Stack Navigation - Nível 3</Text>
        <Text style={styles.navigationInfoText}>
          Esta é a terceira tela da Stack Navigation. Observe que:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • O header mostra o título da aula passado como parâmetro
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Você pode voltar para qualquer tela anterior da stack
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • O estado da aula (progresso, anotações) é mantido
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • A navegação entre níveis é fluida e intuitiva
        </Text>
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.navButtonText}>← Voltar ao Curso</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('CoursesList')}
          >
            <Text style={styles.navButtonText}>📚 Lista de Cursos</Text>
          </TouchableOpacity>
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
  lessonHeader: {
    backgroundColor: '#2196F3',
    padding: 20,
  },
  courseTitle: {
    fontSize: 14,
    color: '#e3f2fd',
    marginBottom: 5,
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  lessonDescription: {
    fontSize: 16,
    color: '#e3f2fd',
    lineHeight: 22,
    marginBottom: 15,
  },
  lessonMeta: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  videoPlayer: {
    backgroundColor: '#000000',
    margin: 20,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  videoScreen: {
    height: 200,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 48,
    color: '#ffffff',
    marginBottom: 10,
  },
  playButtonLabel: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  videoPlaying: {
    alignItems: 'center',
  },
  pauseButton: {
    marginBottom: 10,
  },
  pauseButtonText: {
    fontSize: 32,
    color: '#ffffff',
  },
  videoStatus: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#333333',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#666666',
    borderRadius: 3,
    marginRight: 15,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    minWidth: 40,
    textAlign: 'right',
  },
  videoControls: {
    padding: 15,
    backgroundColor: '#333333',
  },
  lessonContent: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contentDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  contentText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  learningObjectives: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  objectivesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  objective: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 5,
  },
  lessonActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  },
  completionStatus: {
    backgroundColor: '#e8f5e8',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  completionIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  completionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  completionSubtext: {
    fontSize: 14,
    color: '#388E3C',
    textAlign: 'center',
  },
  navigationInfo: {
    backgroundColor: '#ffffff',
    margin: 20,
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
    color: '#2196F3',
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
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  navButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 0.48,
  },
  navButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default LessonScreen;