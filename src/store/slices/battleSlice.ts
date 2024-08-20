import { createSlice } from '@reduxjs/toolkit';

interface BattleState {
  playerHealth: number;
  enemyHealth: number;
  playerMana: number;
  enemy: {
    name: string;
    health: number;
    attack: number;
  };
  turn: number;
}

const initialState: BattleState = {
  playerHealth: 30,
  enemyHealth: 0,
  playerMana: 2,
  enemy: { name: '', health: 0, attack: 0 },
  turn: 1,
};

const battleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    startBattle: (state, action) => {
      state.enemy = action.payload; // Passar o inimigo selecionado
      state.enemyHealth = action.payload.health;
    },
    playerAttack: (state, action) => {
      const damage = action.payload;
      state.enemyHealth -= damage;
    },
    enemyAttack: (state) => {
      state.playerHealth -= state.enemy.attack;
    },
    nextTurn: (state) => {
      state.turn += 1;
      state.playerMana = Math.min(7, state.turn); // Aumentar mana no início do turno
    },
  },
});

export const { startBattle, playerAttack, enemyAttack, nextTurn } = battleSlice.actions;

export default battleSlice.reducer;