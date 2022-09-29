import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/configureStore';

import Header from './components/header/Header';
import Rockets from './components/rocket/Rockets';
import Profile from './components/profile/Profile';
import Mission from './components/mission/Mission';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
