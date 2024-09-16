import React, { useState, FormEvent } from "react";

import "./style.css"

interface Expense {
  id: number;
  name: string;
  value: number;
}

interface DespezaProps {
  expenses: Expense[];
  onAddExpense: (expense: { name: string; value: number }) => void;
  onRemoveExpense: (id: number) => void;
}

const Despeza: React.FC<DespezaProps> = ({ expenses, onAddExpense, onRemoveExpense }) => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && value) {
      onAddExpense({ name, value: parseFloat(value) });
      setName('');
      setValue('');
    }
  };

  return (
    <div className="component-dashboard">
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleSubmit} className="form-criar-desp">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da Despesa"
          required
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor"
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="list-desp">
        {expenses.map(expense => (
          <li key={expense.id}>
            <span>{expense.name} - ${expense.value.toFixed(2)}</span>
            <input
              type="checkbox"
              onChange={() => onRemoveExpense(expense.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Despeza;
