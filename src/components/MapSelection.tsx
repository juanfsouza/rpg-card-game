import React, { useState } from 'react';
import styled from 'styled-components';

interface MapProps {
  onNext: () => void;
}

const MapSelection: React.FC<MapProps> = ({ onNext }) => {
  const [activeRoute, setActiveRoute] = useState(1);
  
  // Gerar as rotas disponiveis com bas na rota ativa
  const routes = Array.from({ length: 15 }, (_, i) => i + 1);

  const handleSelectRoute = (route: number) => {
    if(route <= activeRoute) {
      console.log(`Selecionou a Rota ${route}`);
      onNext();
    } else {
      console.log(`Rota ${route} não disponivel ainda.`);
    }
  };

  return (
    <Container>
      <h2>Selecione sua Rota</h2>
      <RouteList>
        {routes.map((route, index) => (
          <RouteButton 
            key={index} 
            onClick={() => handleSelectRoute(route)}
            disabled={route > activeRoute} // Desativa o botao se a rota nao estiver disponivel
          >
            {route}
          </RouteButton>
        ))}
      </RouteList>
      <NextButton onClick={onNext}>Next</NextButton>
    </Container>
  );
};

export default MapSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-image: url('/images/map/path_to_map_background.jpg');
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  background-position: center; /* Centraliza a imagem no contêiner */
  background-size: cover;
  transform: scale()
`;

const RouteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const RouteButton = styled.button<{ disabled: boolean }>`
  margin: 90px;
  padding: 20px 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#0f992f')};
  color: #ffffff;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transform: ${(props) => `translate(${Math.random() * 30}px, ${Math.random() * 30}px)`};
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 20px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-color: wheat;
  border-radius: 5px;
  cursor: pointer;
`;
