import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import "./style.css"

interface Expense {
  id: number;
  name: string;
  value: number;
}

interface Income {
  id: number;
  name: string;
  value: number;
}

interface GraficoProps {
  incomes: Income[];
  expenses: Expense[];
}

const COLORS = ['#82ca9d', '#ff7300', '#8884d8', '#8dd1e1', '#d0ed57', '#ffc658'];

const Grafico: React.FC<GraficoProps> = ({ incomes, expenses }) => {
  // Unindo os dados de ganhos e despesas
  const data = [
    ...incomes.map(income => ({
      name: income.name,
      value: income.value
    })),
    ...expenses.map(expense => ({
      name: expense.name,
      value: expense.value
    })),
  ];

  const totalIncomes = incomes.reduce((acc, income) => acc + income.value, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.value, 0);
  const difference = totalIncomes - totalExpenses;

  return (
    <div className="grafico-container">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="totals">
        <p><strong>Total de Ganhos:</strong> R$ {totalIncomes.toFixed(2)}</p>
        <p><strong>Total de Despesas:</strong> R$ {totalExpenses.toFixed(2)}</p>
        <p><strong>Diferença (Ganhos - Despesas):</strong> R$ {difference.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Grafico;
