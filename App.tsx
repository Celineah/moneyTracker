  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { SafeAreaProvider } from 'react-native-safe-area-context';
  import { ExpenseProvider, useExpenses } from './context/ExpenseContext';
  import HomeScreen from './screens/HomeScreen';
  import StatisticsScreen from './screens/StatisticsScreen';
  import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
  import { COLORS, BORDER_RADIUS, SHADOWS } from './constants/theme';

  const Tab = createBottomTabNavigator();

  function AppContent() {
    const { isLoaded } = useExpenses();

    if (!isLoaded) {
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading your finances...</Text>
        </SafeAreaView>
      );
    }

    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: COLORS.text.primary,
            tabBarInactiveTintColor: COLORS.text.muted,
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
      backgroundColor: COLORS.background,
    },
    loadingText: {
      fontSize: 14,
      color: COLORS.text.secondary,
      letterSpacing: 1,
      fontWeight: '300',
    },
    tabBar: {
      backgroundColor: COLORS.white,
      borderTopWidth: 0,
      height: 70,
      paddingBottom: 10,
      paddingTop: 10,
      ...SHADOWS.medium,
      borderTopLeftRadius: BORDER_RADIUS.xl,
      borderTopRightRadius: BORDER_RADIUS.xl,
      position: 'absolute',
    },
    tabBarLabel: {
      fontSize: 10,
      fontWeight: '700',
      letterSpacing: 0.5,
    },
  });
