/**
 * Tela de Favoritos (Favorites Screen)
 * Demonstra Drawer Navigation - acesso via menu lateral
 * Inclui componentes obrigatórios: ScrollView, TouchableOpacity
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

const FavoritesScreen = ({ navigation }) => {
  const [favoriteCourses, setFavoriteCourses] = useState([
    {
      id: 1,
      title: 'React Native Fundamentals',
      instructor: 'Prof. Maria Silva',
      category: 'Programação',
      rating: 4.8,
      image: 'https://via.placeholder.com/300x180/2196F3/FFFFFF?text=React+Native',
      addedDate: '2025-10-20',
      progress: 100,
    },
    {
      id: 2,
      title: 'UI/UX Design para Mobile',
      instructor: 'Prof. Ana Costa',
      category: 'Design',
      rating: 4.7,
      image: 'https://via.placeholder.com/300x180/9C27B0/FFFFFF?text=UI%2FUX',
      addedDate: '2025-10-18',
      progress: 45,
    },
    {
      id: 3,
      title: 'JavaScript Avançado',
      instructor: 'Prof. João Santos',
      category: 'Programação',
      rating: 4.9,
      image: 'https://via.placeholder.com/300x180/FF9800/FFFFFF?text=JavaScript',
      addedDate: '2025-10-15',
      progress: 75,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Programação', 'Design', 'Backend'];

  const filteredCourses = selectedCategory === 'Todos' 
    ? favoriteCourses 
    : favoriteCourses.filter(course => course.category === selectedCategory);

  const handleRemoveFavorite = (courseId) => {
    Alert.alert(
      'Remover dos Favoritos',
      'Tem certeza que deseja remover este curso dos seus favoritos?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setFavoriteCourses(prev => prev.filter(course => course.id !== courseId));
            Alert.alert('Removido', 'Curso removido dos favoritos com sucesso!');
          },
        },
      ]
    );
  };

  const handleCoursePress = (course) => {
    Alert.alert(
      'Acessar Curso',
      `Deseja acessar "${course.title}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Acessar',
          onPress: () => {
            // Navegar para a aba de cursos usando nested navigation
            navigation.navigate('MainTabs', {
              screen: 'Courses',
              params: {
                screen: 'CourseDetail',
                params: {
                  courseId: course.id,
                  courseTitle: course.title,
                  courseData: course,
                },
              },
            });
          },
        },
      ]
    );
  };

  const handleClearAll = () => {
    Alert.alert(
      'Limpar Favoritos',
      'Tem certeza que deseja remover todos os cursos favoritos? Esta ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Limpar Tudo',
          style: 'destructive',
          onPress: () => {
            setFavoriteCourses([]);
            Alert.alert('Concluído', 'Todos os favoritos foram removidos.');
          },
        },
      ]
    );
  };

  const renderProgressIndicator = (progress) => {
    let color = '#f44336'; // Vermelho para não iniciado
    let text = 'Não iniciado';
    
    if (progress > 0 && progress < 100) {
      color = '#FF9800'; // Laranja para em progresso
      text = `${progress}% concluído`;
    } else if (progress === 100) {
      color = '#4CAF50'; // Verde para concluído
      text = 'Concluído';
    }

    return (
      <View style={[styles.progressIndicator, { backgroundColor: color }]}>
        <Text style={styles.progressText}>{text}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cursos Favoritos</Text>
        <Text style={styles.subtitle}>
          Seus cursos salvos para estudo posterior
        </Text>
      </View>

      {/* Filtros por categoria */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Filtrar por categoria:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filtersRow}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.filterButton,
                  selectedCategory === category && styles.filterButtonActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedCategory === category && styles.filterButtonTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Lista de cursos favoritos */}
      <View style={styles.coursesContainer}>
        <View style={styles.coursesHeader}>
          <Text style={styles.coursesTitle}>
            {filteredCourses.length} curso(s) favorito(s)
          </Text>
          {favoriteCourses.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
              <Text style={styles.clearButtonText}>🗑️ Limpar</Text>
            </TouchableOpacity>
          )}
        </View>

        {filteredCourses.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>💔</Text>
            <Text style={styles.emptyTitle}>Nenhum favorito encontrado</Text>
            <Text style={styles.emptyDescription}>
              {selectedCategory === 'Todos' 
                ? 'Você ainda não favoritou nenhum curso. Explore nossos cursos e adicione seus favoritos!'
                : `Nenhum curso favorito na categoria "${selectedCategory}". Tente outra categoria.`
              }
            </Text>
            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate('MainTabs', { screen: 'Courses' })}
            >
              <Text style={styles.exploreButtonText}>🔍 Explorar Cursos</Text>
            </TouchableOpacity>
          </View>
        ) : (
          filteredCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCoursePress(course)}
            >
              <Image source={{ uri: course.image }} style={styles.courseImage} />
              
              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={() => handleRemoveFavorite(course.id)}
                  >
                    <Text style={styles.favoriteIcon}>❤️</Text>
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.courseInstructor}>por {course.instructor}</Text>
                
                <View style={styles.courseMeta}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{course.category}</Text>
                  </View>
                  
                  <View style={styles.rating}>
                    <Text style={styles.ratingIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{course.rating}</Text>
                  </View>
                </View>
                
                {renderProgressIndicator(course.progress)}
                
                <View style={styles.courseFooter}>
                  <Text style={styles.addedDate}>
                    Adicionado em {course.addedDate}
                  </Text>
                  <Text style={styles.accessHint}>Toque para acessar →</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>

      {/* Dicas sobre favoritos */}
      {favoriteCourses.length > 0 && (
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Dicas sobre Favoritos</Text>
          <Text style={styles.tip}>• Organize seus cursos para estudo futuro</Text>
          <Text style={styles.tip}>• Filtre por categoria para encontrar rapidamente</Text>
          <Text style={styles.tip}>• Acompanhe seu progresso em cada curso</Text>
          <Text style={styles.tip}>• Remove cursos que não interessam mais</Text>
        </View>
      )}

      {/* Informações sobre Drawer Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>☰ Drawer Navigation</Text>
        <Text style={styles.navigationInfoText}>
          Esta tela demonstra o Drawer Navigation (menu lateral). Características importantes:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Acesso via menu lateral deslizante ou botão hambúrguer
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Ideal para funcionalidades secundárias como Favoritos
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Economiza espaço na interface principal
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Permite navegação para outras partes do app
        </Text>
        <Text style={styles.navigationInfoAdvantage}>
          ✅ Vantagem: Acesso a muitas opções sem poluir a interface
        </Text>
        <Text style={styles.navigationInfoDisadvantage}>
          ❌ Desvantagem: Funcionalidades menos descobríveis pelos usuários
        </Text>
        
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.drawerButtonText}>☰ Abrir Menu Lateral</Text>
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
  header: {
    backgroundColor: '#e91e63',
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
    color: '#fce4ec',
    textAlign: 'center',
  },
  filtersContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filtersTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  filtersRow: {
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButtonActive: {
    backgroundColor: '#e91e63',
    borderColor: '#e91e63',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#666',
  },
  filterButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  coursesContainer: {
    padding: 20,
  },
  coursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  coursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clearButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  exploreButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
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
    height: 150,
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
  favoriteButton: {
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  courseInstructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  courseMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  progressIndicator: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addedDate: {
    fontSize: 12,
    color: '#999',
  },
  accessHint: {
    fontSize: 12,
    color: '#e91e63',
    fontWeight: 'bold',
  },
  tipsContainer: {
    backgroundColor: '#fff3e0',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    color: '#ef6c00',
    lineHeight: 20,
    marginBottom: 4,
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
    color: '#e91e63',
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
    backgroundColor: '#e91e63',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  drawerButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default FavoritesScreen;