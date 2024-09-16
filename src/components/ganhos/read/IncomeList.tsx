import React from 'react';

interface Income {
  id: number;
  name: string;
  value: number;
}

interface IncomeListProps {
  incomes: Income[];
  onRemove: (id: number) => void;
}

const IncomeList: React.FC<IncomeListProps> = ({ incomes, onRemove }) => {
  return (
    <ul className='list-desp'>
      {incomes.map((income) => (
        <li key={income.id}>
          <span><strong>{income.name}</strong> - ${income.value.toFixed(2)}</span>

          <button onClick={() => onRemove(income.id)} className='remove'>
                REMOVE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IncomeList;
