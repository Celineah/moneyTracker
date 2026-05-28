import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useExpenses } from '../context/ExpenseContext';
import { CATEGORIES } from '../types/expense';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { Card } from '../components/Card';

export default function StatisticsScreen() {
  const { expenses } = useExpenses();

  const chartData = useMemo(() => {
    const categoryTotals = CATEGORIES.map((category) => {
      const total = expenses
        .filter((e) => e.category === category)
        .reduce((sum, e) => sum + e.amount, 0);
      return {
        name: category,
        population: total,
        color: COLORS.categories[category as keyof typeof COLORS.categories],
        legendFontColor: COLORS.text.secondary,
        legendFontSize: 12,
      };
    });

    return categoryTotals.filter((item) => item.population > 0);
  }, [expenses]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Analytics</Text>
      
      <Card style={styles.chartCard}>
        <Text style={styles.cardTitle}>SPENDING BY CATEGORY</Text>
        {chartData.length > 0 ? (
          <PieChart
            data={chartData}
            width={Dimensions.get('window').width - 64}
            height={200}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
            absolute
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No data to visualize yet.</Text>
          </View>
        )}
      </Card>

      <View style={styles.breakdownContainer}>
        <Text style={styles.sectionTitle}>DETAILED BREAKDOWN</Text>
        {CATEGORIES.map((category) => {
          const total = expenses
            .filter((e) => e.category === category)
            .reduce((sum, e) => sum + e.amount, 0);
          return (
            <Card key={category} style={styles.breakdownCard}>
              <View style={[styles.colorDot, { backgroundColor: COLORS.categories[category as keyof typeof COLORS.categories] }]} />
              <Text style={styles.categoryName}>{category}</Text>
              <Text style={styles.categoryAmount}>${total.toFixed(2)}</Text>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: COLORS.text.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  chartCard: {
    marginBottom: SPACING.lg,
    padding: SPACING.md,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.text.muted,
    letterSpacing: 1,
    marginBottom: SPACING.md,
    alignSelf: 'flex-start',
  },
  emptyContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.text.muted,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text.secondary,
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  breakdownContainer: {
    marginTop: SPACING.md,
  },
  breakdownCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: SPACING.sm,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  categoryName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text.primary,
  },
});
