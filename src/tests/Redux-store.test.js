/*eslint-disable*/
import store from '../redux/configureStore';
import { reserveRocket, fetchRocket } from '../redux/rocket/rocket';

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

  it('should fetch rockets', async () => {
    await store.dispatch(fetchRocket());
    expect(store.getState().rockets.length).toEqual(4);
  });

  it('should reserve a rocket', () => {
    store.dispatch(reserveRocket(1));
    expect(store.getState().rockets[0].reservation).toEqual(true);
  });
});
