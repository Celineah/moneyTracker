import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface HeaderProps {
  totalSpent: number;
}

export const Header: React.FC<HeaderProps> = ({ totalSpent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryLabel}>TOTAL EXPENSES</Text>
        <Text style={styles.summaryValue}>${totalSpent.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    letterSpacing: 1.2,
    color: '#212121',
  },
  summaryBox: {
    alignItems: 'flex-end',
  },
  summaryLabel: {
    fontSize: 10,
    color: '#757575',
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#d32f2f',
  },
});
