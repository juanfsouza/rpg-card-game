import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterState {
  selectedCharacter: 'druid' | 'rogue' | 'warrior' | 'mage' | null;
  health: number;
  mana: number;
  deck: string[];
  hand: string[];
  turn: number;
  gold: number; 
}

const initialState: CharacterState = {
  selectedCharacter: null,
  health: 30,
  mana: 2,
  deck: [], // Cartas do baralho
  hand: ['card1', 'card2', 'card3', 'card4'],
  turn: 1,
  gold: 0,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Selecionar personagem
    selectCharacter: (state, action: PayloadAction<'druid' | 'rogue' | 'warrior' | 'mage'>) => {
      state.selectedCharacter = action.payload;

      // Inicializar deck do personagem selecionado
      if (state.selectedCharacter === 'druid') {
        state.deck = [
          'card_arcane_cano',
          'card_blessing_of_the_sacred',
          'card_book_of_knowledge',
          'card_book_of_wisdom',
          'card_book_of_wisdom',
          'card_captain_mech',
          'card_cyber_security',
          'card_dot_bot',
          'card_stalking_claw',
          'card_slime_dragon',
          'card_skull_gommies',
          'card_vaye_the_jungle',
          'card_sharp_dagger',
          'card_holy_well',
          'card_evil_potion',
        ];
      } else if (state.selectedCharacter === 'rogue') {
        state.deck = [
          'card_backstab',
          'card_eviscerate',
          'card_shiv',
          'card_sinister_strike',
          'card_sprint',
          'card_assassinate',
          'card_deadly_poison',
          'card_blade_flurry',
          'card_fan_of_knives',
          'card_preparation',
          'card_vanish',
          'card_sap',
          'card_betrayal',
          'card_shadows_step',
          'card_cold_blood',
        ];
      } else if (state.selectedCharacter === 'warrior') {
        state.deck = [
          'card_bash',
          'card_bloodthirst',
          'card_execute',
          'card_shield_block',
          'card_fiery_war_axe',
          'card_cleave',
          'card_battle_rage',
          'card_warpath',
          'card_rampage',
          'card_mortal_strike',
          'card_slam',
          'card_whirlwind',
          'card_frenzy',
          'card_heroic_strike',
          'card_battle_shout',
        ];
      } else if (state.selectedCharacter === 'mage') {
        state.deck = [
          'card_fireball',
          'card_frostbolt',
          'card_polymorph',
          'card_mirror_image',
          'card_arcane_missiles',
          'card_flamestrike',
          'card_ice_lance',
          'card_pyroblast',
          'card_counterspell',
          'card_sorcerers_apprentice',
          'card_conjure_mana_gem',
          'card_ice_block',
          'card_ice_barrier',
          'card_ray_of_frost',
          'card_fireblast',
        ];
      }
    },
    // Atualizar a saúde
    updateHealth: (state, action: PayloadAction<number>) => {
      state.health = Math.max(0, state.health + action.payload);
    },
    // Atualizar a mana
    updateMana: (state, action: PayloadAction<number>) => {
      state.mana = Math.max(0, state.mana + action.payload);
    },
    // Remover carta da mão
    removeCard: (state, action: PayloadAction<string>) => {
      state.hand = state.hand.filter(card => card !== action.payload);
    },
    // Avançar turno
    nextTurn: (state) => {
      state.turn += 1;
      state.mana = Math.min(10, state.mana + 1); // Exemplo: aumentar a mana em cada turno
    },
    // Curar personagem
    healCharacter: (state, action: PayloadAction<number>) => {
      state.health = Math.min(30, state.health + action.payload); // Supondo que o máximo de saúde é 30
    },
    // Comprar carta
    buyCard: (state, action: PayloadAction<string>) => {
      state.hand.push(action.payload);
      state.gold -= 1; // Exemplo de custo de carta
    },
  },
});

export const { selectCharacter, updateHealth, updateMana, removeCard, nextTurn, healCharacter, buyCard } = characterSlice.actions;
export default characterSlice.reducer;
export type CharacterType = 'druid' | 'rogue' | 'warrior' | 'mage';