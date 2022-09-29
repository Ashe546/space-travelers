import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/header/Header';
import Rockets from '../components/rocket/Rockets';
import Profile from '../components/profile/Profile';
import Mission from '../components/mission/Mission';

import store from '../Redux/configureStore';

describe('Header renders correctly', () => {
  test('Renders Header Correctly', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(header).toMatchSnapshot();
  });
});

describe('Profile renders correctly', () => {
  test('Renders Profile Correctly', () => {
    const profile = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});

describe('mission renders correctly', () => {
  test('Renders mission Correctly', () => {
    const mission = render(
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});

describe('rocket renders correctly', () => {
  test('Renders rocket Correctly', () => {
    const rocket = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });
});
