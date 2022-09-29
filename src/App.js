import { Provider } from 'react-redux';
import store from './Redux/configureStore';

import Header from './components/header/Header';
import Rockets from './components/rocket/Rockets';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Rockets />
        <Profile />
      </Provider>
    </div>
  );
}

export default App;
