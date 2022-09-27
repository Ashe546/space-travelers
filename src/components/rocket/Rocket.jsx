import Button from '../../UI/Button';
import styles from './Rocket.module.css';

function Rocket({ description, title, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.rocket}>
        <img src={image} alt="spaceX" />
        <div className={styles.details}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button title="Reserve Rocket." />
        </div>
      </div>
    </div>
  );
}

export default Rocket;
