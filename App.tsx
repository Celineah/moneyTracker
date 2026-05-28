import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ExpenseProvider, useExpenses } from './context/ExpenseContext';
import HomeScreen from './screens/HomeScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

function AppContent() {
  const { isLoaded } = useExpenses();

  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#212121',
          tabBarInactiveTintColor: '#bdbdbd',
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="List" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>☰</Text>
          }}
        />
        <Tab.Screen 
          name="Stats" 
          component={StatisticsScreen} 
          options={{
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>📊</Text>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ExpenseProvider>
        <AppContent />
      </ExpenseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 14,
    color: '#757575',
    letterSpacing: 1,
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
