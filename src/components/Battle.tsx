import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementMana, drawCards } from '../store/slices/characterSlice';

const Battle: React.FC = () => {
  const dispatch = useDispatch();

  // Função para começar o turno
  const startTurn = () => {
    dispatch(incrementMana());
    dispatch(drawCards());
  };

  useEffect(() => {
    // Começa o turno quando o componente for montado
    startTurn();
  }, []);

  return (
    <div>
      <h2>Batalha!</h2>
      {/* Aqui você pode adicionar mais lógica de batalha e interface gráfica */}
    </div>
  );
};

export default Battle;
