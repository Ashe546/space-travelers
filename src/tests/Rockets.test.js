import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Rockets from '../components/rocket/Rockets';

const mockStore = configureStore([]);

describe('Rockets', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          name: 'Falcon 1',
          description:
            'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
          image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          reservation: false,
        },
        {
          id: 2,
          name: 'Falcon 9',
          description:
            'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
          image: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
          reservation: false,
        },
        {
          id: 3,
          name: 'Falcon Heavy',
          description:
            'Falcon Heavy is a heavy lift launch vehicle designed and manufactured by SpaceX for the reliable and safe transport of satellites, the Dragon spacecraft, and other payloads into orbit.',
          image: 'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
          reservation: false,
        },
        {
          id: 4,
          name: 'Starship',
          description:
            'Starship is an upcoming super heavy-lift launch vehicle and spacecraft under development by SpaceX.',
          image: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png',
          reservation: false,
        },
      ],
      mission: {
        mission: [],
        status: 'idle',
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });

  it('should render rocket components correctly with given state from Redux', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
