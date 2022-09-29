/*eslint-disable*/
import store from '../redux/configureStore';
import { missionStatus, fetchMissions} from '../redux/mission/missionSlice';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      mission: {mission: [], status: "idle"},
      rockets: []
    });
  });

  it('should fetch rockets', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().mission.mission.length).toEqual(10);
  });

  it('should reserve a rocket', () => {
    store.dispatch(reserveRocket(1));
    expect(store.getState().rockets[0].reservation).toEqual(true);
  });
});