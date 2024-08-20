import React from 'react';
import { useParams } from 'react-router-dom';
import generateStages from '../utils/generateStages';

const Battle: React.FC = () => {
  const { routeIndex } = useParams<{ routeIndex: string }>();
  const stages = generateStages();

  return (
    <div>
      <h2>Batalha na Rota {parseInt(routeIndex || '0') + 1}</h2>
      <div>Fase Atual: {stages[parseInt(routeIndex || '0')]}</div>
      {/* Adicionar lógica de batalha aqui */}
    </div>
  );
};

export default Battle;
