import { createSlice } from '@reduxjs/toolkit';

interface CharacterState {
  selectedCharacter: string | null;
  health: number;
  mana: number;
  deck: string[];
  hand: string[];
  turn: number;
}

const initialState: CharacterState = {
  selectedCharacter: null,
  health: 30,
  mana: 2,
  deck: [], // Cartas do baralho
  hand: [], // Cartas na mão
  turn: 1,
};

// Função para Inicializar o Deck
const initializeDeck = (character: string): string[] => {
  switch (character) {
    case 'Rogue':
      return ['Rogue Carta 1', 'Rogue Carta 2', 'Rogue Carta 3',]; // Cartas específicas para Rogue
    case 'Guerreiro':
      return ['Guerreiro Carta 1', 'Guerreiro Carta 2',];
    case 'Mago':
      return ['Mago Carta 1', 'Mago Carta 2',];
    case 'Druida':
      return ['Druida Carta 1', 'Druida Carta 2',];
    default:
      return [];
  }
};


const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Selecionar personagem
    selectCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
      // Inicializar deck do personagem selecionado
      state.deck = initializeDeck(action.payload); // Função para gerar as cartas iniciais
    },
    // Comprar cartas no início do turno
    drawCards: (state) => {
      // Lógica para comprar 4 cartas do deck e adicionar à mão
      state.hand = state.deck.slice(0, 4);
      state.deck = state.deck.slice(4);
    },
    // Aumentar mana no início do turno
    incrementMana: (state) => {
      if (state.mana < 7) {
        state.mana += 1;
      }
    },
    // Passar para o próximo turno
    nextTurn: (state) => {
      state.turn += 1;
    },
  },
});

export const { selectCharacter, drawCards, incrementMana, nextTurn } = characterSlice.actions;

export default characterSlice.reducer;
