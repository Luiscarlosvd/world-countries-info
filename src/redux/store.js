import { configureStore } from '@reduxjs/toolkit';
import leaguesReducer from './leagues/leaguesSlice';

const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
  },
});

export default store;