/**
 * Tela de Detalhes do Curso (Course Detail Screen)
 * Demonstra Stack Navigation - segunda tela da stack
 * Inclui componentes obrigatórios: ScrollView, Button, TouchableOpacity
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const CourseDetailScreen = ({ route, navigation }) => {
  const { courseData } = route.params;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: 'Introdução ao React Native',
      duration: '15 min',
      type: 'video',
      completed: false,
      description: 'Visão geral da tecnologia e configuração do ambiente.',
    },
    {
      id: 2,
      title: 'Componentes Básicos',
      duration: '25 min',
      type: 'video',
      completed: false,
      description: 'View, Text, ScrollView e outros componentes fundamentais.',
    },
    {
      id: 3,
      title: 'Navegação - Conceitos',
      duration: '30 min',
      type: 'video',
      completed: false,
      description: 'Stack, Tab e Drawer Navigation na prática.',
    },
    {
      id: 4,
      title: 'Exercício Prático',
      duration: '45 min',
      type: 'exercise',
      completed: false,
      description: 'Construa seu primeiro app com navegação.',
    },
    {
      id: 5,
      title: 'Projeto Final',
      duration: '60 min',
      type: 'project',
      completed: false,
      description: 'Desenvolva um aplicativo completo aplicando os conceitos aprendidos.',
    },
  ];

  const handleEnroll = () => {
    setIsEnrolled(true);
    Alert.alert(
      'Matrícula Realizada!',
      'Parabéns! Você foi matriculado no curso. Agora pode acessar todas as aulas.',
      [{ text: 'Começar Estudos', onPress: () => {} }]
    );
  };

  const handleLessonPress = (lesson) => {
    if (!isEnrolled) {
      Alert.alert(
        'Matrícula Necessária',
        'Faça sua matrícula para acessar as aulas do curso.',
        [{ text: 'OK' }]
      );
      return;
    }

    // Demonstra Stack Navigation - navegar para aula
    navigation.navigate('Lesson', {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonData: lesson,
      courseTitle: courseData.title,
    });
  };

  const handleGoBack = () => {
    // Demonstra Stack Navigation - voltar
    navigation.goBack();
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return '🎥';
      case 'exercise': return '✏️';
      case 'project': return '🚀';
      default: return '📄';
    }
  };

  const formatDuration = (duration) => {
    return duration;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header do curso */}
      <View style={styles.courseHeader}>
        <Image source={{ uri: courseData.image }} style={styles.courseImage} />
        <View style={styles.courseOverlay}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>{courseData.title}</Text>
            <Text style={styles.courseInstructor}>por {courseData.instructor}</Text>
            <View style={styles.courseMetrics}>
              <View style={styles.metric}>
                <Text style={styles.metricIcon}>⭐</Text>
                <Text style={styles.metricText}>{courseData.rating}</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricIcon}>👥</Text>
                <Text style={styles.metricText}>{courseData.students}</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricIcon}>⏱️</Text>
                <Text style={styles.metricText}>{courseData.duration}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Informações do curso */}
      <View style={styles.courseDetails}>
        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.courseDescription}>{courseData.description}</Text>
        
        <View style={styles.courseAttributes}>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Nível:</Text>
            <Text style={styles.attributeValue}>{courseData.level}</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Categoria:</Text>
            <Text style={styles.attributeValue}>{courseData.category}</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Preço:</Text>
            <Text style={styles.attributePrice}>{courseData.price}</Text>
          </View>
        </View>

        {/* Botão de matrícula */}
        {!isEnrolled ? (
          <View style={styles.enrollSection}>
            <Button
              title="Fazer Matrícula"
              onPress={handleEnroll}
              color="#4CAF50"
            />
          </View>
        ) : (
          <View style={styles.enrolledSection}>
            <Text style={styles.enrolledText}>✅ Você está matriculado!</Text>
          </View>
        )}
      </View>

      {/* Lista de aulas */}
      <View style={styles.lessonsSection}>
        <Text style={styles.sectionTitle}>Conteúdo do Curso</Text>
        <Text style={styles.lessonsSubtitle}>
          {lessons.length} aulas • {courseData.duration} total
        </Text>

        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={lesson.id}
            style={[
              styles.lessonCard,
              !isEnrolled && styles.lessonCardLocked,
              selectedLesson === lesson.id && styles.lessonCardSelected,
            ]}
            onPress={() => handleLessonPress(lesson)}
          >
            <View style={styles.lessonHeader}>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonIcon}>{getLessonIcon(lesson.type)}</Text>
                <View style={styles.lessonContent}>
                  <Text style={styles.lessonNumber}>Aula {index + 1}</Text>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription}>{lesson.description}</Text>
                </View>
              </View>
              <View style={styles.lessonMeta}>
                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                {!isEnrolled && <Text style={styles.lockIcon}>🔒</Text>}
                {isEnrolled && <Text style={styles.playIcon}>▶️</Text>}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Informações sobre Stack Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>📱 Stack Navigation em Ação</Text>
        <Text style={styles.navigationInfoText}>
          Esta tela demonstra o segundo nível da Stack Navigation. Observe que:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • O botão "Voltar" no header permite retornar à lista de cursos
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Ao tocar em uma aula, uma nova tela será empilhada na stack
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • O histórico de navegação é mantido automaticamente
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Parâmetros são passados entre as telas da stack
        </Text>
        
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>← Voltar para Cursos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  courseHeader: {
    position: 'relative',
    height: 250,
  },
  courseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  courseOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  courseInstructor: {
    fontSize: 16,
    color: '#e3f2fd',
    marginBottom: 15,
  },
  courseMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  metricText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  courseDetails: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  courseDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  courseAttributes: {
    marginBottom: 20,
  },
  attribute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  attributeLabel: {
    fontSize: 14,
    color: '#666',
  },
  attributeValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  attributePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  enrollSection: {
    marginTop: 10,
  },
  enrolledSection: {
    backgroundColor: '#e8f5e8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  enrolledText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  lessonsSection: {
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
  lessonsSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  lessonCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  lessonCardLocked: {
    backgroundColor: '#f5f5f5',
    opacity: 0.7,
    borderLeftColor: '#bdbdbd',
  },
  lessonCardSelected: {
    backgroundColor: '#e3f2fd',
    borderLeftColor: '#1976d2',
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  lessonIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  lessonContent: {
    flex: 1,
  },
  lessonNumber: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  lessonMeta: {
    alignItems: 'center',
  },
  lessonDuration: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  lockIcon: {
    fontSize: 16,
  },
  playIcon: {
    fontSize: 16,
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
  backButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CourseDetailScreen;