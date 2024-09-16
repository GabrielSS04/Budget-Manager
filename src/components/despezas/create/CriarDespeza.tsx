// AddExpense.tsx
import React, { useState, FormEvent } from 'react';

interface AddExpenseProps {
  onAdd: (expense: { name: string; value: number }) => void;
}

const AddExpense: React.FC<AddExpenseProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && value) {
      onAdd({ name, value: parseFloat(value) });
      setName('');
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-criar-desp'>
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
  );
};

export default AddExpense;
