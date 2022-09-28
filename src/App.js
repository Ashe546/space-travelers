import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rocket from './components/rocket/Rocket';
import Mission from './components/Mission/Mission';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
