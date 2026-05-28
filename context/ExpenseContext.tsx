import React, { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { Expense, Category } from '../types/expense';
import { saveExpenses, loadExpenses } from '../utils/storage';

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: { description: string; amount: number; category: Category }) => void;
  deleteExpense: (id: string) => void;
  isLoaded: boolean;
  initialBudget: number;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [initialBudget] = useState(5000);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      const storedExpenses = await loadExpenses();
      setExpenses(storedExpenses);
      setIsLoaded(true);
    };
    init();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveExpenses(expenses);
    }
  }, [expenses, isLoaded]);

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

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, isLoaded, initialBudget }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};
