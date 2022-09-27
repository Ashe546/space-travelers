import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];
const FETCH_ROCKETS = 'store/rockets/FETCH_ROCKETS';

const fetchRocket = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const transformedData = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
  }));

  return transformedData;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const rocketId = action.payload;
      return state.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        image: rocket.image,
        reservation:
          rocket.id === rocketId ? !rocket.reservation : rocket.reservation,
      }));
    },
  },
  extraReducers: {
    [fetchRocket.fulfilled]: (action) => action.payload,
  },
});

const rocketReducer = rocketSlice.reducer;
export default rocketReducer;
export { fetchRocket };
export const { reserveRocket, cancelRocket } = rocketSlice.actions;
