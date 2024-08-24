import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCard, removeCard } from '../store/slices/characterSlice';
import { RootState } from '../store/store';

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const hand = useSelector((state: RootState) => state.character.hand);
  const gold = useSelector((state: RootState) => state.character.gold);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleBuyCard = (card: string) => {
    if (gold > 0) {
      dispatch(buyCard(card));
      setSelectedCard(card);
    }
  };

  return (
    <div>
      <h1>Shop</h1>
      <p>Gold: {gold}</p>
      <div>
        {['card1', 'card2', 'card3'].map((card) => (
          <div key={card}>
            <p>{card}</p>
            <button onClick={() => handleBuyCard(card)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
