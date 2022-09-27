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
  reducers: {},
  extraReducers: {
    [fetchRocket.fulfilled]: (state, action) => [...state, ...action.payload],
  },
});

const rockeReducer = rocketSlice.reducer;
export default rockeReducer;
export { fetchRocket };
