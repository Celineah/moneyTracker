import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Expense } from '../types/expense';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { Card } from './Card';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  const renderItem = ({ item }: { item: Expense }) => (
    <Card style={styles.itemCard}>
      <View style={[styles.categoryIndicator, { backgroundColor: COLORS.categories[item.category as keyof typeof COLORS.categories] }]} />
      <View style={styles.itemContent}>
        <View style={styles.itemMain}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.categoryLabel}>{item.category.toUpperCase()}</Text>
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No expenses yet. Start by adding one!</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text.secondary,
    letterSpacing: 1,
    marginBottom: SPACING.md,
    marginTop: SPACING.sm,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  itemCard: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
    padding: 0,
    overflow: 'hidden',
  },
  categoryIndicator: {
    width: 6,
    height: '100%',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemMain: {
    flex: 1,
  },
  description: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.text.muted,
    letterSpacing: 0.5,
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  deleteBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  deleteBtnText: {
    fontSize: 10,
    color: '#FF5252',
    fontWeight: '600',
  },
  emptyContainer: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.text.muted,
    textAlign: 'center',
  },
});
