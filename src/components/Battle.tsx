import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { playerAttack, enemyAttack, nextTurn } from '../store/slices/battleSlice';
import { removeCard } from '../store/slices/characterSlice'; // Add this import
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const CardImage = styled.img`
  margin-top: 550px;
  width: 200px;
  height: 300px;
  object-fit: cover;
  transition: transform 0.2s ease;
  cursor: grab;

  &:hover {
    transform: scale(1.2);
  }
`;

const DragLayer = styled.div`
  position: absolute;
  pointer-events: none;
`;

const ManaBar = styled.div`
  width: 10%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-right: 90%;
  overflow: hidden;
  position: relative;
`;

const ManaFill = styled.div<{ mana: number }>`
  height: 100%;
  width: ${(props) => props.mana * 14.28}%; /* 7 mana max, 100/7 = 14.28% per mana */
  background-color: #2b46c2;
  transition: width 0.3s ease;
`;

const HealthBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;
`;

const HealthFill = styled.div<{ health: number }>`
  height: 100%;
  width: ${(props) => props.health * 3.33}%; /* 30 health max, 100/30 = 3.33% per health */
  background-color: #e57373;
  transition: width 0.3s ease;
`;

const ManaText = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  font-weight: bold;
`;

const HealthText = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
`;

const Battle: React.FC = () => {
  const dispatch = useDispatch();
  const playerHealth = useSelector((state: RootState) => state.character.health);
  const enemyHealth = useSelector((state: RootState) => state.battle.enemyHealth);
  const playerMana = useSelector((state: RootState) => state.character.mana);
  const hand = useSelector((state: RootState) => state.character.hand);
  const selectedCharacter = useSelector((state: RootState) => state.character.selectedCharacter);
  const [draggedCard, setDraggedCard] = useState<string | null>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { card: draggedCard },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item: { card: string }) => {
      if (playerMana > 0 && hand.includes(item.card)) {
        dispatch(playerAttack(5)); // Example: apply damage
        dispatch(enemyAttack());
        dispatch(removeCard(item.card)); // Remove card from hand
        dispatch(nextTurn()); // Move to the next turn
      }
      setDraggedCard(null);
    },
  });

  const cardImages = hand.map((card, index) => (
    <CardImage
      key={index}
      src={`/images/cards/${selectedCharacter}/card${index + 1}.png`}
      alt={`Card ${index + 1}`}
      ref={drag}
      onMouseDown={() => setDraggedCard(card)}
      onMouseUp={() => setDraggedCard(null)}
    />
  ));

  return (
    <Container>
      <InfoContainer>
        <div>
          <h3>Saúde do Jogador</h3>
          <HealthBar>
            <HealthFill health={playerHealth} />
            <HealthText>{playerHealth}</HealthText>
          </HealthBar>
        </div>
        <div>
          <h2>Batalha na Rota 2</h2>
          <p>Fase Atual: {playerMana % 2 === 1 ? 'Jogador' : 'Monstro'}</p>
        </div>
        <div>
        <h3>Saúde do Inimigo</h3>
          <HealthBar>
            <HealthFill health={enemyHealth} />
            <HealthText>{enemyHealth}</HealthText>
          </HealthBar>
        </div>
      </InfoContainer>
      <ManaBar>
        <ManaFill mana={playerMana} />
        <ManaText>{playerMana}</ManaText>
      </ManaBar>
      <CardContainer ref={drop}>
        {cardImages}
      </CardContainer>
      {draggedCard && (
        <DragLayer>
          <CardImage
            src={`/images/cards/${selectedCharacter}/card${hand.indexOf(draggedCard) + 1}.png`}
            alt={`Dragged Card`}
            style={{ width: '150px', height: '200px' }}
          />
        </DragLayer>
      )}
    </Container>
  );
};

export default Battle;
