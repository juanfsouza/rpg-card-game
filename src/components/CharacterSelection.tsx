import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { selectCharacter } from '../store/slices/characterSlice';


const characters = [
  { name: 'Rogue', color: 'red', image: '/images/rogue.png' },
  { name: 'Warrior', color: 'orange', image: '/images/warrior.png' },
  { name: 'Mage', color: 'blue', image: '/images/mage.png' },
  { name: 'Druid', color: 'green', image: '/images/druid.png' },
];

interface CharacterSelectionProps {
  onNext: () => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onNext }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSelectCharacter = (character: string) => {
    setSelectedCharacter(character);
    dispatch(selectCharacter(character)); // Dispara a ação para selecionar o personagem
  };

  return (
    <Container>
      <h2>Selecione seu personagem</h2>
      <CharacterList>
        {characters.map((char) => (
          <CharacterButton
            key={char.name}
            color={char.color}
            onClick={() => handleSelectCharacter(char.name)}
          >
            <img src={char.image} alt={char.name} />
            {char.name}
          </CharacterButton>
        ))}
      </CharacterList>
      {selectedCharacter && <NextButton onClick={onNext}>Next</NextButton>}
    </Container>
  );
};

export default CharacterSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const CharacterList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const CharacterButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    display: flex;
    margin: 20px;
  }
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
