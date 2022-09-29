import styles from './MyRocket.module.css';

function MyRockets({ data }) {
  return (
    <div className={styles.myRocket}>
      <h2>My Rockets</h2>
      <ul>
        {data.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyRockets;
