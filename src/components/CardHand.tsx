import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CardHand: React.FC = () => {
  const hand = useSelector((state: RootState) => state.character.hand);

  return (
    <div>
      <h3>Sua Mão</h3>
      <div>
        {hand.map((card, index) => (
          <div key={index} style={{ border: '1px solid #000', padding: '10px', margin: '5px' }}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHand;
