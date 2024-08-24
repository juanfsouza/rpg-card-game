import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { healCharacter } from '../store/slices/characterSlice';
import { RootState } from '../store/store';

const Campfire: React.FC = () => {
  const dispatch = useDispatch();
  const health = useSelector((state: RootState) => state.character.health);

  const handleHeal = () => {
    dispatch(healCharacter(10)); // Exemplo de cura de 10 pontos
  };

  return (
    <div>
      <h1>Campfire</h1>
      <p>Health: {health}</p>
      <button onClick={handleHeal}>Heal</button>
    </div>
  );
};

export default Campfire;
