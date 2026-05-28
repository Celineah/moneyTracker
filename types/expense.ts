export type Category = 'Roupa' | 'Alimento' | 'Transporte' | 'Lazer' | 'Contas';

export const CATEGORIES: Category[] = ['Roupa', 'Alimento', 'Transporte', 'Lazer', 'Contas'];

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: Category;
  date: string;
}

export interface ExpenseSummary {
  totalSpent: number;
  remainingBalance: number;
}
