// ExpenseList.tsx
import React from 'react';

interface Expense {
  id: number;
  name: string;
  value: number;
}

interface ExpenseListProps {
  expenses: Expense[];
  onRemove: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onRemove }) => {
  return (
    <ul className='list-desp'>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span><strong>{expense.name}</strong> - ${expense.value.toFixed(2)}</span>
          
          <button onClick={() => onRemove(expense.id)} className='remove'>
                REMOVE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
