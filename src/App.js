import { Provider } from 'react-redux';
import store from './Redux/configureStore';

import Header from './components/header/Header';
import Rockets from './components/rocket/Rockets';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Rockets />
      </Provider>
    </div>
  );
}

export default App;
