import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface CardSelectionProps {
  onNext: () => void;
  onBack: () => void;
}

const CardSelection: React.FC<CardSelectionProps> = ({ onNext, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const character = useSelector((state: RootState) => state.character.selectedCharacter);

  // Definir a pasta de cartas com base no personagem selecionado
  const cardImages = Array.from({ length: 15 }, (_, i) => `/images/cards/${character}/card${i + 1}.png`);

  const openModal = (card: string) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <h2>Suas Cartas</h2>
      <CardGrid>
        {cardImages.map((card, index) => (
          <Card key={index} onClick={() => openModal(card)}>
            <img src={card} alt={`Card ${index + 1}`} />
          </Card>
        ))}
      </CardGrid>
      <Cards>
        <BackButton onClick={onBack}>Back</BackButton>
        <NextButton onClick={onNext}>Next</NextButton>
      </Cards>

      {isModalOpen && selectedCard && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard} alt="Selected Card" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CardSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  width: 30%;
`;

const Card = styled.div`
  padding: 10px;
  cursor: pointer;

  img {
    width: 120px;
    height: 180px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Cards = styled.div`
  padding: 10px 20px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #962e14;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  img {
    max-width: 90vw;
    max-height: 90vh;
  }
`;