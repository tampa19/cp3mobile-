/**
 * Tela de Perfil (Profile Screen)
 * Demonstra Tab Navigation e componentes obrigatórios
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

const ProfileScreen = ({ navigation }) => {
  const [userStats, setUserStats] = useState({
    coursesCompleted: 12,
    coursesInProgress: 3,
    totalHours: 87,
    certificatesEarned: 8,
    streakDays: 15,
  });

  const [recentCourses] = useState([
    {
      id: 1,
      title: 'React Native Fundamentals',
      progress: 100,
      completedDate: '2025-10-25',
      certificate: true,
    },
    {
      id: 2,
      title: 'JavaScript Avançado',
      progress: 75,
      currentLesson: 'Aula 15: Promises e Async/Await',
      certificate: false,
    },
    {
      id: 3,
      title: 'UI/UX Design para Mobile',
      progress: 45,
      currentLesson: 'Aula 8: Prototipação',
      certificate: false,
    },
  ]);

  const handleEditProfile = () => {
    Alert.alert(
      'Editar Perfil',
      'Funcionalidade de edição de perfil seria implementada aqui.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Editar',
          onPress: () => Alert.alert('Sucesso', 'Perfil atualizado!'),
        },
      ]
    );
  };

  const handleViewCertificates = () => {
    Alert.alert(
      'Certificados',
      `Você possui ${userStats.certificatesEarned} certificados. Visualizar galeria de certificados?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Ver Certificados',
          onPress: () => Alert.alert('Certificados', 'Galeria de certificados aberta!'),
        },
      ]
    );
  };

  const handleContinueCourse = (course) => {
    if (course.progress === 100) {
      Alert.alert(
        'Curso Concluído',
        'Este curso já foi concluído. Deseja revisá-lo?',
        [
          { text: 'Não', style: 'cancel' },
          {
            text: 'Revisar',
            onPress: () => navigation.navigate('Courses', {
              screen: 'CourseDetail',
              params: { courseId: course.id, courseTitle: course.title },
            }),
          },
        ]
      );
    } else {
      Alert.alert(
        'Continuar Estudos',
        `Continuar "${course.title}" na ${course.currentLesson}?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Continuar',
            onPress: () => navigation.navigate('Courses', {
              screen: 'CourseDetail',
              params: { courseId: course.id, courseTitle: course.title },
            }),
          },
        ]
      );
    }
  };

  const handleOpenDrawer = () => {
    navigation.openDrawer();
    Alert.alert(
      'Menu Lateral',
      'O menu lateral (Drawer) foi aberto! Você pode acessar Favoritos, Configurações e outras opções.',
      [{ text: 'OK' }]
    );
  };

  const renderProgressBar = (progress) => {
    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header do perfil */}
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/120x120/9C27B0/FFFFFF?text=👨‍🎓'
          }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>João Silva</Text>
          <Text style={styles.profileEmail}>joao.silva@email.com</Text>
          <Text style={styles.profileMember}>Membro desde: Janeiro 2025</Text>
          
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>✏️ Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Estatísticas do usuário */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>📊 Suas Estatísticas</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userStats.coursesCompleted}</Text>
            <Text style={styles.statLabel}>Cursos\nConcluídos</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userStats.coursesInProgress}</Text>
            <Text style={styles.statLabel}>Em\nAndamento</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userStats.totalHours}h</Text>
            <Text style={styles.statLabel}>Horas de\nEstudo</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userStats.certificatesEarned}</Text>
            <Text style={styles.statLabel}>Certificados\nObtidos</Text>
          </View>
        </View>

        <View style={styles.streakContainer}>
          <Text style={styles.streakIcon}>🔥</Text>
          <Text style={styles.streakText}>
            Sequência de {userStats.streakDays} dias estudando!
          </Text>
        </View>
      </View>

      {/* Cursos recentes */}
      <View style={styles.recentCoursesContainer}>
        <Text style={styles.sectionTitle}>📚 Atividade Recente</Text>
        
        {recentCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => handleContinueCourse(course)}
          >
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              
              {course.progress === 100 ? (
                <View style={styles.completedBadge}>
                  <Text style={styles.completedIcon}>✅</Text>
                  <Text style={styles.completedText}>
                    Concluído em {course.completedDate}
                  </Text>
                  {course.certificate && (
                    <Text style={styles.certificateText}>🏆 Certificado obtido</Text>
                  )}
                </View>
              ) : (
                <View style={styles.progressSection}>
                  <Text style={styles.currentLesson}>{course.currentLesson}</Text>
                  {renderProgressBar(course.progress)}
                </View>
              )}
            </View>
            
            <View style={styles.courseAction}>
              <Text style={styles.actionText}>
                {course.progress === 100 ? 'Revisar →' : 'Continuar →'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Ações rápidas */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>⚡ Ações Rápidas</Text>
        
        <View style={styles.actionButtons}>
          <Button
            title="Ver Certificados"
            onPress={handleViewCertificates}
            color="#9C27B0"
          />
        </View>
        
        <View style={styles.buttonSpacer} />
        
        <View style={styles.actionButtons}>
          <Button
            title="Abrir Menu Lateral"
            onPress={handleOpenDrawer}
            color="#FF9800"
          />
        </View>
      </View>

      {/* Conquistas */}
      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>🏆 Conquistas Recentes</Text>
        
        <View style={styles.achievementsList}>
          <View style={styles.achievement}>
            <Text style={styles.achievementIcon}>🎯</Text>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Primeiro Curso</Text>
              <Text style={styles.achievementDescription}>
                Concluiu seu primeiro curso com sucesso
              </Text>
            </View>
          </View>
          
          <View style={styles.achievement}>
            <Text style={styles.achievementIcon}>🔥</Text>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Estudante Dedicado</Text>
              <Text style={styles.achievementDescription}>
                15 dias consecutivos de estudo
              </Text>
            </View>
          </View>
          
          <View style={styles.achievement}>
            <Text style={styles.achievementIcon}>📚</Text>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Conhecimento Múltiplo</Text>
              <Text style={styles.achievementDescription}>
                Concluiu cursos de 3 categorias diferentes
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Informações sobre Tab Navigation */}
      <View style={styles.navigationInfo}>
        <Text style={styles.navigationInfoTitle}>📱 Tab Navigation - Perfil</Text>
        <Text style={styles.navigationInfoText}>
          A aba de Perfil demonstra como o Tab Navigation facilita o acesso a informações pessoais:
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Acesso direto às estatísticas e progresso do usuário
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Estado preservado durante navegação entre tabs
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Integração com Drawer Navigation para mais opções
        </Text>
        <Text style={styles.navigationInfoPoint}>
          • Navegação para cursos específicos via Stack Navigation
        </Text>
        <Text style={styles.navigationInfoAdvantage}>
          ✅ Vantagem: Informações sempre acessíveis
        </Text>
        <Text style={styles.navigationInfoDisadvantage}>
          ❌ Desvantagem: Espaço limitado na barra de tabs
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
  profileHeader: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#e1bee7',
    marginBottom: 4,
  },
  profileMember: {
    fontSize: 12,
    color: '#e1bee7',
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsContainer: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    width: '48%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  streakContainer: {
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e65100',
  },
  recentCoursesContainer: {
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
  courseCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  completedBadge: {
    backgroundColor: '#e8f5e8',
    padding: 8,
    borderRadius: 6,
  },
  completedIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  completedText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  certificateText: {
    fontSize: 11,
    color: '#FF9800',
    fontWeight: 'bold',
  },
  progressSection: {},
  currentLesson: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
    minWidth: 35,
  },
  courseAction: {
    marginLeft: 10,
  },
  actionText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  quickActionsContainer: {
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
  actionButtons: {
    marginHorizontal: 0,
  },
  buttonSpacer: {
    height: 15,
  },
  achievementsContainer: {
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
  achievementsList: {},
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  achievementDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
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
    color: '#9C27B0',
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

export default ProfileScreen;