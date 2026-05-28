import React, { useState, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Category } from '../types/expense';
import { Header } from '../components/Header';
import { CategoryFilter } from '../components/CategoryFilter';
import { ExpenseForm } from '../components/ExpenseForm';
import { ExpenseList } from '../components/ExpenseList';
import { useExpenses } from '../context/ExpenseContext';
import { COLORS } from '../constants/theme';

export default function HomeScreen() {
  const { expenses, addExpense, deleteExpense, initialBudget } = useExpenses();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredExpenses = useMemo(() => {
    if (selectedCategory === 'All') return expenses;
    return expenses.filter((e) => e.category === selectedCategory);
  }, [expenses, selectedCategory]);

  const totalSpentFiltered = useMemo(() => {
    return filteredExpenses.reduce((sum, e) => sum + e.amount, 0);
  }, [filteredExpenses]);

  const totalSpentOverall = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remainingBalance = initialBudget - totalSpentOverall;

  return (
    <View style={styles.container}>
      <Header totalSpent={totalSpentOverall} remainingBalance={remainingBalance} />
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
  },
});
