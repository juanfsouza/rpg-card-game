import { createSlice } from '@reduxjs/toolkit';

interface CharacterState {
  selectedCharacter: 'druid' | 'rogue' | 'warrior' | 'mage' | null;
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


const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Selecionar personagem
    selectCharacter: (state, action) => {
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
          'card_brawl',
          'card_revenge',
        ];
      } else if (state.selectedCharacter === 'mage') {
        state.deck = [
          'card_arcane_missiles',
          'card_frostbolt',
          'card_fireball',
          'card_flamestrike',
          'card_polymorph',
          'card_counterspell',
          'card_frost_nova',
          'card_blizzard',
          'card_mirror_image',
          'card_arcane_intellect',
          'card_cone_of_cold',
          'card_ice_block',
          'card_pyroblast',
          'card_fireblast',
          'card_ice_lance',
        ];
      }
    },
    
    // Comprar cartas no início do turno
    drawCards: (state) => {
      // Lógica para comprar 4 cartas do deck e adicionar à mão
      state.hand = state.deck.slice(0, 4);
      state.deck = state.deck.slice(4);
      console.log('Hand after drawing cards:', state.hand);
      console.log('Remaining deck:', state.deck);
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
