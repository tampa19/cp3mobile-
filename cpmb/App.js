import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import LessonScreen from './src/screens/LessonScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AboutScreen from './src/screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para os cursos (navegação hierárquica)
function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursesList" 
        component={CoursesScreen} 
        options={{ title: 'Cursos Disponíveis' }}
      />
      <Stack.Screen 
        name="CourseDetail" 
        component={CourseDetailScreen} 
        options={{ title: 'Detalhes do Curso' }}
      />
      <Stack.Screen 
        name="Lesson" 
        component={LessonScreen} 
        options={{ title: 'Aula' }}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator principal (navegação por abas)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }}
      />
      <Tab.Screen 
        name="Courses" 
        component={CoursesStack} 
        options={{ title: 'Cursos' }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

// Aplicativo principal com Drawer Navigation (menu lateral)
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#2196F3',
          drawerInactiveTintColor: '#757575',
        }}>
        <Drawer.Screen 
          name="MainTabs" 
          component={MainTabs} 
          options={{ title: 'EduNav - Home' }}
        />
        <Drawer.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{ title: 'Favoritos' }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Configurações' }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ title: 'Sobre' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
