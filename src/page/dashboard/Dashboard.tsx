import React, { useState } from "react";
import Despeza from "../../components/despezas/Despeza";
import IncomeManager from "../../components/ganhos/Income";
import Grafico from "../../components/grafico/Grafico";

import "./style.css";

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

export default function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleAddExpense = (expense: { name: string; value: number }) => {
    setExpenses([...expenses, { ...expense, id: nextId }]);
    setNextId(nextId + 1);
  };

  const handleRemoveExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleAddIncome = (income: { name: string; value: number }) => {
    setIncomes([...incomes, { ...income, id: nextId }]);
    setNextId(nextId + 1);
  };

  const handleRemoveIncome = (id: number) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  return (
    <>
      <div className="cruds">
        <Despeza
          expenses={expenses}
          onAddExpense={handleAddExpense}
          onRemoveExpense={handleRemoveExpense}
        />
        <IncomeManager
          incomes={incomes}
          onAddIncome={handleAddIncome}
          onRemoveIncome={handleRemoveIncome}
        />
      </div>

      <Grafico incomes={incomes} expenses={expenses} />
    </>
  );
}
