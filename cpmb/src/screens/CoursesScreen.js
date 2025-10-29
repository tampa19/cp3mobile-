/**
 * Tela de Cursos (Courses Screen)
 * Demonstra Stack Navigation - primeira tela da stack
 * Inclui componentes obrigatórios: ScrollView, TouchableOpacity, Image
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const CoursesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const courses = [
    {
      id: 1,
      title: 'React Native Fundamentals',
      instructor: 'Prof. Maria Silva',
      category: 'Programação',
      duration: '8 horas',
      level: 'Iniciante',
      rating: 4.8,
      students: 1250,
      price: 'R$ 89,90',
      image: 'https://via.placeholder.com/300x180/2196F3/FFFFFF?text=React+Native',
      description: 'Aprenda os fundamentos do React Native para desenvolvimento mobile.',
    },
    {
      id: 2,
      title: 'JavaScript Avançado',
      instructor: 'Prof. João Santos',
      category: 'Programação',
      duration: '12 horas',
      level: 'Avançado',
      rating: 4.9,
      students: 890,
      price: 'R$ 129,90',
      image: 'https://via.placeholder.com/300x180/FF9800/FFFFFF?text=JavaScript',
      description: 'Domine conceitos avançados de JavaScript e ES6+.',
    },
    {
      id: 3,
      title: 'UI/UX Design para Mobile',
      instructor: 'Prof. Ana Costa',
      category: 'Design',
      duration: '10 horas',
      level: 'Intermediário',
      rating: 4.7,
      students: 560,
      price: 'R$ 99,90',
      image: 'https://via.placeholder.com/300x180/9C27B0/FFFFFF?text=UI%2FUX',
      description: 'Crie interfaces incríveis para aplicativos móveis.',
    },
    {
      id: 4,
      title: 'Node.js e APIs REST',
      instructor: 'Prof. Carlos Lima',
      category: 'Backend',
      duration: '15 horas',
      level: 'Intermediário',
      rating: 4.6,
      students: 720,
      price: 'R$ 149,90',
      image: 'https://via.placeholder.com/300x180/4CAF50/FFFFFF?text=Node.js',
      description: 'Desenvolva APIs robustas com Node.js e Express.',
    },
    {
      id: 5,
      title: 'Database Design',
      instructor: 'Prof. Lucia Ferreira',
      category: 'Backend',
      duration: '6 horas',
      level: 'Iniciante',
      rating: 4.5,
      students: 430,
      price: 'R$ 79,90',
      image: 'https://via.placeholder.com/300x180/607D8B/FFFFFF?text=Database',
      description: 'Fundamentos de modelagem e design de banco de dados.',
    },
  ];

  const categories = ['Todos', 'Programação', 'Design', 'Backend'];

  const filteredCourses = selectedCategory === 'Todos' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleCoursePress = (course) => {
    // Demonstra Stack Navigation - navegar para detalhes
    navigation.navigate('CourseDetail', {
      courseId: course.id,
      courseTitle: course.title,
      courseData: course,
    });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    Alert.alert(
      'Filtro Aplicado',
      `Exibindo cursos da categoria: ${category}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cursos Disponíveis</Text>
        <Text style={styles.subtitle}>
          Escolha um curso e explore a navegação Stack
        </Text>
      </View>

      {/* Filtro por categoria */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categorias:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesRow}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
                onPress={() => handleCategoryPress(category)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category && styles.categoryButtonTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Lista de cursos */}
      <View style={styles.coursesContainer}>
        <Text style={styles.coursesTitle}>
          {filteredCourses.length} curso(s) encontrado(s)
        </Text>
        
        {filteredCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => handleCoursePress(course)}
          >
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            
            <View style={styles.courseContent}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>{course.level}</Text>
                </View>
              </View>
              
              <Text style={styles.courseInstructor}>por {course.instructor}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              
              <View style={styles.courseStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statIcon}>⏱️</Text>
                  <Text style={styles.statText}>{course.duration}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statIcon}>⭐</Text>
                  <Text style={styles.statText}>{course.rating}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statIcon}>👥</Text>
                  <Text style={styles.statText}>{course.students}</Text>
                </View>
              </View>
              
              <View style={styles.courseFooter}>
                <Text style={styles.coursePrice}>{course.price}</Text>
                <View style={styles.navigationHint}>
                  <Text style={styles.navigationHintText}>
                    Toque para ver detalhes →
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>📱 Stack Navigation</Text>
        <Text style={styles.navigationInfoText}>
          Ao tocar em um curso, você navegará para a tela de detalhes usando Stack Navigation. 
          Este tipo de navegação é ideal para fluxos hierárquicos onde o usuário pode voltar 
          facilmente usando o botão "Voltar".
        </Text>
        <Text style={styles.navigationInfoAdvantage}>
          ✅ Vantagem: Mantém o histórico de navegação e permite navegação intuitiva
        </Text>
        <Text style={styles.navigationInfoDisadvantage}>
          ❌ Desvantagem: Pode ocupar mais memória com muitas telas empilhadas
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
    backgroundColor: '#2196F3',
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
    fontSize: 14,
    color: '#e3f2fd',
    textAlign: 'center',
  },
  categoriesContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoriesRow: {
    flexDirection: 'row',
  },
  categoryButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryButtonActive: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#666',
  },
  categoryButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  coursesContainer: {
    padding: 20,
  },
  coursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  courseContent: {
    padding: 15,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  levelBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  statText: {
    fontSize: 14,
    color: '#666',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  navigationHint: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  navigationHintText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: 'bold',
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
  navigationInfoAdvantage: {
    fontSize: 13,
    color: '#4CAF50',
    marginBottom: 5,
  },
  navigationInfoDisadvantage: {
    fontSize: 13,
    color: '#FF5722',
  },
});

export default CoursesScreen;