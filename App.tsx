import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';
import { Expense, Category } from './types/expense';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { saveExpenses, loadExpenses } from './utils/storage';

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [initialBudget] = useState(5000);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load expenses on startup
  useEffect(() => {
    const init = async () => {
      const storedExpenses = await loadExpenses();
      setExpenses(storedExpenses);
      setIsLoaded(true);
    };
    init();
  }, []);

  // Save expenses whenever they change
  useEffect(() => {
    if (isLoaded) {
      saveExpenses(expenses);
    }
  }, [expenses, isLoaded]);

  const filteredExpenses = useMemo(() => {
    if (selectedCategory === 'All') return expenses;
    return expenses.filter((e) => e.category === selectedCategory);
  }, [expenses, selectedCategory]);

  const totalSpent = useMemo(() => {
    return filteredExpenses.reduce((sum, e) => sum + e.amount, 0);
  }, [filteredExpenses]);

  const totalSpentOverall = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remainingBalance = initialBudget - totalSpentOverall;

  const addExpense = (expense: { description: string; amount: number; category: Category }) => {
    const newExpense: Expense = {
      ...expense,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Header totalSpent={totalSpent} />
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <ExpenseForm onAdd={addExpense} />
        <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
        
        <View style={styles.footer}>
          <Text style={styles.footerLabel}>REMAINING MONEY</Text>
          <Text style={[styles.footerValue, remainingBalance < 0 && styles.negativeBalance]}>
            ${remainingBalance.toFixed(2)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#757575',
    letterSpacing: 1,
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 2,
    borderTopColor: '#212121',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#212121',
    letterSpacing: 1,
  },
  footerValue: {
    fontSize: 20,
    fontWeight: '300',
    color: '#2e7d32',
  },
  negativeBalance: {
    color: '#d32f2f',
  },
});
