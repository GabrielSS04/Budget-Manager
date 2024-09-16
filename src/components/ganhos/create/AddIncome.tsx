import React, { useState, FormEvent } from 'react';

interface AddIncomeProps {
  onAdd: (income: { name: string; value: number }) => void;
}

const AddIncome: React.FC<AddIncomeProps> = ({ onAdd }) => {
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
  );
};

export default AddIncome;
