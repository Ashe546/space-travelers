import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];
const FETCH_ROCKETS = 'store/rockets/FETCH_ROCKETS';

const fetchRocket = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const rocket = state.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
      }
    },
  },
  extraReducers: {
    [fetchRocket.fulfilled]: (state, action) => action.payload,
  },
});

const rocketReducer = rocketSlice.reducer;
export default rocketReducer;
export { fetchRocket };
