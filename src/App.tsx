import React from 'react';
import GlobalStyle from './styles/globalStyles';
import CharacterSelection from './components/CharacterSelection';
import CardHand from './components/CardHand';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>RPG Card Game</h1>
        <CharacterSelection />
        <CardHand />
      </div>
    </>
  );
}

export default App;
