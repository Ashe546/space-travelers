import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rocket/rocket';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
