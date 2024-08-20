import React from 'react';
import styled from 'styled-components';

interface MapProps {
  onNext: () => void;
}

const MapSelection: React.FC<MapProps> = ({ onNext }) => {
  const routes = Array.from({ length: 7 }, (_, i) => `Rota ${i + 1}`);

  const handleSelectRoute = (route: string) => {
    console.log(`Selecionou a ${route}`);
    onNext();
  };

  return (
    <Container>
      <h2>Selecione sua Rota</h2>
      <RouteList>
        {routes.map((route, index) => (
          <RouteButton key={index} onClick={() => handleSelectRoute(route)}>
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
  min-height: 100vh;
  background-image: url('/images/map/path_to_map_background.jpg');
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  background-position: center; /* Centraliza a imagem no contêiner */
`;

const RouteList = styled.div`
  display: flex;
  flex-direction: column;
`;

const RouteButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #0f992f;
  color: white;
  border: none;
  cursor: pointer;
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
