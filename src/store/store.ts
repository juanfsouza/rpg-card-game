// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/characterSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
