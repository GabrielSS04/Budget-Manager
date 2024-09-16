import React, { useState, FormEvent } from "react";

interface Income {
  id: number;
  name: string;
  value: number;
}

interface IncomeManagerProps {
  incomes: Income[];
  onAddIncome: (income: { name: string; value: number }) => void;
  onRemoveIncome: (id: number) => void;
}

const IncomeManager: React.FC<IncomeManagerProps> = ({ incomes, onAddIncome, onRemoveIncome }) => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && value) {
      onAddIncome({ name, value: parseFloat(value) });
      setName('');
      setValue('');
    }
  };

  return (
    <div className="component-dashboard">
      <h2>Adicionar Ganho</h2>
      <form onSubmit={handleSubmit} className="form-criar-desp">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do Ganho"
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
        {incomes.map(income => (
          <li key={income.id}>
            <span>{income.name} - ${income.value.toFixed(2)}</span>
            <input
              type="checkbox"
              onChange={() => onRemoveIncome(income.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeManager;
