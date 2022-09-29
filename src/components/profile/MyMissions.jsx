import styles from './MyMission.module.css';

function MyMissions({ data }) {
  return (
    <div className={styles.myMission}>
      <h2>My Missions</h2>
      <ul>
        {data.map((mission) => (
          <li key={mission.id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyMissions;
