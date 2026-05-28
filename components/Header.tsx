import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

interface HeaderProps {
  totalSpent: number;
  remainingBalance: number;
}

export const Header: React.FC<HeaderProps> = ({ totalSpent, remainingBalance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello,</Text>
      <Text style={styles.appTitle}>Finance Dashboard</Text>
      
      <View style={styles.heroCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>TOTAL EXPENSES</Text>
          <Text style={styles.value}>${totalSpent.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryItem}>
          <Text style={styles.label}>REMAINING</Text>
          <Text style={[styles.value, remainingBalance < 0 && styles.negativeValue]}>
            ${remainingBalance.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.lg,
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.text.secondary,
    fontWeight: '400',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: COLORS.text.primary,
    marginBottom: SPACING.lg,
  },
  heroCard: {
    backgroundColor: COLORS.accent,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  negativeValue: {
    color: '#FFCDD2',
  },
});
