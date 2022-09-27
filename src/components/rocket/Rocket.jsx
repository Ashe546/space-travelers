import Button from '../../UI/Button';
import spaceX from '../../asset/spacex.jpg';
import styles from './Rocket.module.css';

function Rocket() {
  return (
    <main className={styles.container}>
      <div className={styles.rocket}>
        <img src={spaceX} alt="spaceX" />
        <div className={styles.details}>
          <h2>SpaceX Falcon 9</h2>
          <p>
            SpaceX Falcon 9 is a two-stage rocket designed and manufactured by
            SpaceX for the reliable and safe transport of satellites and the
            Dragon spacecraft into orbit
          </p>
          <Button title="Reserve Rocket" />
        </div>
      </div>
    </main>
  );
}

export default Rocket;
