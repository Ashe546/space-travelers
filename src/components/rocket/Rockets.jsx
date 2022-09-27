import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRocket } from '../../Redux/rocket/rocket';

import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);
  return (
    <main>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          description={rocket.description}
          title={rocket.name}
          image={rocket.image}
        />
      ))}
    </main>
  );
}

export default Rockets;
