/*eslint-disable*/
import store from '../redux/configureStore';
import { missionStatus, fetchMissions } from '../redux/mission/missionSlice';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      rockets: [],
      mission: {
        mission: [],
        status: 'idle',
      },
    });
  });

  it('should fetch missions', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().mission.mission.length).toEqual(10);
  });

  it('should Update MissionStutus', () => {
    store.dispatch(missionStatus('9D1B7E0'));
    expect(store.getState().mission.mission[0].reservation).toEqual(true);
  });
});
