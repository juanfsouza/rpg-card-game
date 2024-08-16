import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCharacter } from '../store/slices/characterSlice';

const CharacterSelection: React.FC = () => {
  const dispatch = useDispatch();

  const handleSelectCharacter = (character: string) => {
    dispatch(selectCharacter(character));
  };

  return (
    <div>
      <h2>Escolha seu personagem</h2>
      <button onClick={() => handleSelectCharacter('Rogue')}>Rogue</button>
      <button onClick={() => handleSelectCharacter('Guerreiro')}>Guerreiro</button>
      <button onClick={() => handleSelectCharacter('Mago')}>Mago</button>
      <button onClick={() => handleSelectCharacter('Druida')}>Druida</button>
    </div>
  );
};

export default CharacterSelection;
