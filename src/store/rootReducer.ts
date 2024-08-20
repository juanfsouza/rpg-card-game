import { combineReducers } from '@reduxjs/toolkit';
import battleReducer from './slices/battleSlice';
import characterReducer from './slices/characterSlice'; // Se estiver usando também

const rootReducer = combineReducers({
  battle: battleReducer,
  character: characterReducer, // Se estiver usando também
  // Adicione outros reducers aqui
});

export default rootReducer;
