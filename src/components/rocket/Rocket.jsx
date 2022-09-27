import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from '../../UI/Button';
import styles from './Rocket.module.css';
import { reserveRocket } from '../../Redux/rocket/rocket';

function Rocket({ description, title, image, id }) {
  const dispatch = useDispatch();

  const [isReserved, setIsisReserved] = useState(false);

  const reserveHandler = () => {
    dispatch(reserveRocket(id));
    setIsisReserved(!isReserved);
  };

  const reserved = <span>Reserved</span>;

  return (
    <div className={styles.container}>
      <div className={styles.rocket}>
        <img src={image} alt="spaceX" />
        <div className={styles.details}>
          <h2>{title}</h2>
          <p>
            {isReserved ? reserved : ''}
            {description}
          </p>
          <Button
            title={isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            onReserve={reserveHandler}
            className={isReserved ? styles.reserved : styles.btn}
          />
        </div>
      </div>
    </div>
  );
}

export default Rocket;
