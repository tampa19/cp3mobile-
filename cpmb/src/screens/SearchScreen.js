/**
 * Tela de Busca (Search Screen)
 * Demonstra Tab Navigation e uso de componentes obrigatórios:
 * - TextInput, Picker, Alert
 */

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedLevel, setSelectedLevel] = useState('todos');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { label: 'Todos', value: 'todos' },
    { label: 'Programação', value: 'programacao' },
    { label: 'Design', value: 'design' },
    { label: 'Backend', value: 'backend' },
    { label: 'Mobile', value: 'mobile' },
  ];

  const levels = [
    { label: 'Todos os níveis', value: 'todos' },
    { label: 'Iniciante', value: 'iniciante' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

  const allCourses = [
    {
      id: 1,
      title: 'React Native Fundamentals',
      category: 'programacao',
      level: 'iniciante',
      instructor: 'Prof. Maria Silva',
      rating: 4.8,
      price: 'R$ 89,90',
    },
    {
      id: 2,
      title: 'JavaScript Avançado',
      category: 'programacao',
      level: 'avancado',
      instructor: 'Prof. João Santos',
      rating: 4.9,
      price: 'R$ 129,90',
    },
    {
      id: 3,
      title: 'UI/UX Design para Mobile',
      category: 'design',
      level: 'intermediario',
      instructor: 'Prof. Ana Costa',
      rating: 4.7,
      price: 'R$ 99,90',
    },
    {
      id: 4,
      title: 'Node.js e APIs REST',
      category: 'backend',
      level: 'intermediario',
      instructor: 'Prof. Carlos Lima',
      rating: 4.6,
      price: 'R$ 149,90',
    },
    {
      id: 5,
      title: 'Flutter para Iniciantes',
      category: 'mobile',
      level: 'iniciante',
      instructor: 'Prof. Lucia Ferreira',
      rating: 4.5,
      price: 'R$ 79,90',
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      Alert.alert(
        'Campo obrigatório',
        'Por favor, digite algo para buscar.',
        [{ text: 'OK' }]
      );
      return;
    }

    setIsSearching(true);

    // Simular busca
    setTimeout(() => {
      let results = allCourses.filter(course => {
        const matchesQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'todos' || course.category === selectedCategory;
        const matchesLevel = selectedLevel === 'todos' || course.level === selectedLevel;
        
        return matchesQuery && matchesCategory && matchesLevel;
      });

      setSearchResults(results);
      setIsSearching(false);

      Alert.alert(
        'Busca Concluída',
        `Encontrados ${results.length} resultado(s) para "${searchQuery}"`,
        [{ text: 'OK' }]
      );
    }, 1000);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedCategory('todos');
    setSelectedLevel('todos');
    Alert.alert('Limpo', 'Busca resetada com sucesso!');
  };

  const handleCoursePress = (course) => {
    Alert.alert(
      'Navegar para Curso',
      `Você selecionou: ${course.title}. Em um app real, você navegaria para os detalhes do curso.`,
      [
        {
          text: 'Ver Detalhes',
          onPress: () => {
            // Navegar para a aba de cursos e depois para detalhes
            navigation.navigate('Courses', {
              screen: 'CourseDetail',
              params: {
                courseId: course.id,
                courseTitle: course.title,
                courseData: course,
              },
            });
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  const renderPicker = (items, selectedValue, onValueChange, placeholder) => {
    return (
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>{placeholder}:</Text>
        <View style={styles.pickerButtons}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.pickerButton,
                selectedValue === item.value && styles.pickerButtonActive,
              ]}
              onPress={() => onValueChange(item.value)}
            >
              <Text
                style={[
                  styles.pickerButtonText,
                  selectedValue === item.value && styles.pickerButtonTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Cursos</Text>
        <Text style={styles.subtitle}>
          Encontre o curso perfeito para você
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>O que você quer aprender?</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o nome do curso ou instrutor..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />

        {/* Picker para Categoria */}
        {renderPicker(categories, selectedCategory, setSelectedCategory, 'Categoria')}

        {/* Picker para Nível */}
        {renderPicker(levels, selectedLevel, setSelectedLevel, 'Nível')}

        <View style={styles.searchButtons}>
          <TouchableOpacity
            style={[styles.searchButton, isSearching && styles.searchButtonDisabled]}
            onPress={handleSearch}
            disabled={isSearching}
          >
            <Text style={styles.searchButtonText}>
              {isSearching ? '🔍 Buscando...' : '🔍 Buscar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
            <Text style={styles.clearButtonText}>🗑️ Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Resultados da busca */}
      {searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>
            Resultados da Busca ({searchResults.length})
          </Text>

          {searchResults.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.resultCard}
              onPress={() => handleCoursePress(course)}
            >
              <View style={styles.resultHeader}>
                <Text style={styles.resultTitle}>{course.title}</Text>
                <Text style={styles.resultPrice}>{course.price}</Text>
              </View>
              
              <Text style={styles.resultInstructor}>por {course.instructor}</Text>
              
              <View style={styles.resultMeta}>
                <View style={styles.resultBadge}>
                  <Text style={styles.resultBadgeText}>
                    {levels.find(l => l.value === course.level)?.label}
                  </Text>
                </View>
                
                <View style={styles.resultRating}>
                  <Text style={styles.resultRatingIcon}>⭐</Text>
                  <Text style={styles.resultRatingText}>{course.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Dicas de busca */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>💡 Dicas de Busca</Text>
        <Text style={styles.tip}>• Use palavras-chave específicas</Text>
        <Text style={styles.tip}>• Filtre por categoria e nível</Text>
        <Text style={styles.tip}>• Busque por nome do instrutor</Text>
        <Text style={styles.tip}>• Explore diferentes combinações</Text>
      </View>

      {/* Informações sobre Tab Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>📱 Tab Navigation</Text>
        <Text style={styles.navigationInfoText}>
          Esta tela faz parte da Tab Navigation principal do aplicativo. Observe que:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Acesso rápido através da barra inferior de tabs
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Estado da busca é preservado durante navegação
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Pode navegar para outras tabs sem perder dados
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Integração com Stack Navigation nos resultados
        </Text>
        <Text style={styles.navigationInfoAdvantage}>
          ✅ Vantagem: Acesso imediato às principais funcionalidades
        </Text>
        <Text style={styles.navigationInfoDisadvantage}>
          ❌ Desvantagem: Limitado a poucas seções principais
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
    backgroundColor: '#4CAF50',
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
    color: '#e8f5e8',
    textAlign: 'center',
  },
  searchContainer: {
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
  searchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  pickerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pickerButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  pickerButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  pickerButtonText: {
    fontSize: 12,
    color: '#666',
  },
  pickerButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  searchButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    flex: 0.65,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonDisabled: {
    backgroundColor: '#a5d6a7',
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: '#f44336',
    flex: 0.3,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resultsContainer: {
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
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  resultCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  resultPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  resultInstructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  resultMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  resultBadgeText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: 'bold',
  },
  resultRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultRatingIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  resultRatingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#4CAF50',
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
  },
});

export default SearchScreen;