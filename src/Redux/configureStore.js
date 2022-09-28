import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rocket/rocket';
import missionReducer from "./mission/missionSlice";

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
