import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Expense } from '../types/expense';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  const renderItem = ({ item }: { item: Expense }) => (
    <View style={styles.row}>
      <View style={[styles.cell, { flex: 2 }]}>
        <Text style={styles.cellText}>{item.description}</Text>
      </View>
      <View style={[styles.cell, { flex: 1.2 }]}>
        <Text style={styles.categoryBadge}>{item.category.toUpperCase()}</Text>
      </View>
      <View style={[styles.cell, { flex: 1 }]}>
        <Text style={[styles.cellText, styles.amountText]}>${item.amount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, { flex: 2 }]}>DESCRIPTION</Text>
        <Text style={[styles.headerCell, { flex: 1.2 }]}>CATEGORY</Text>
        <Text style={[styles.headerCell, { flex: 1 }]}>AMOUNT</Text>
        <View style={{ width: 30 }} />
      </View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No expenses found.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    backgroundColor: '#fff',
  },
  headerCell: {
    fontSize: 10,
    fontWeight: '700',
    color: '#212121',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    alignItems: 'center',
  },
  cell: {
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 13,
    color: '#424242',
  },
  amountText: {
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: 8,
  },
  categoryBadge: {
    fontSize: 9,
    color: '#757575',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  deleteBtn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnText: {
    fontSize: 20,
    color: '#bdbdbd',
    fontWeight: '300',
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#9e9e9e',
    fontStyle: 'italic',
  },
});
