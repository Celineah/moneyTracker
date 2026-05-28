import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useExpenses } from '../context/ExpenseContext';
import { CATEGORIES } from '../types/expense';

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
        color: getCategoryColor(category),
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
      };
    });

    return categoryTotals.filter((item) => item.population > 0);
  }, [expenses]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Spending Statistics</Text>
      
      {chartData.length > 0 ? (
        <View style={styles.chartContainer}>
          <PieChart
            data={chartData}
            width={Dimensions.get('window').width - 32}
            height={220}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No data available for chart.</Text>
        </View>
      )}

      <View style={styles.breakdownContainer}>
        <Text style={styles.subtitle}>CATEGORY BREAKDOWN</Text>
        {CATEGORIES.map((category) => {
          const total = expenses
            .filter((e) => e.category === category)
            .reduce((sum, e) => sum + e.amount, 0);
          return (
            <View key={category} style={styles.breakdownRow}>
              <View style={[styles.colorDot, { backgroundColor: getCategoryColor(category) }]} />
              <Text style={styles.categoryName}>{category}</Text>
              <Text style={styles.categoryAmount}>${total.toFixed(2)}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Roupa': return '#FF6384';
    case 'Alimento': return '#36A2EB';
    case 'Transporte': return '#FFCE56';
    case 'Lazer': return '#4BC0C0';
    case 'Contas': return '#9966FF';
    default: return '#C9CBCF';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    letterSpacing: 1.2,
    color: '#212121',
    marginTop: 20,
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 10,
  },
  emptyContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 30,
  },
  emptyText: {
    color: '#9e9e9e',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#212121',
    letterSpacing: 1,
    marginBottom: 12,
  },
  breakdownContainer: {
    marginBottom: 40,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  categoryName: {
    flex: 1,
    fontSize: 14,
    color: '#424242',
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },
});
