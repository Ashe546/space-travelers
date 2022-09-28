import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Profile from '../components/profile/Profile';

const mockStore = configureStore([]);

describe('Profile', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
          image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          reservation: false,
        },
      ],
    });

    component = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });

  it('should render rocket components correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
