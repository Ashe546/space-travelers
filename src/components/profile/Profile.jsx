import { useSelector } from 'react-redux';

import MyRockets from './MyRockets';
import MyMissions from './MyMissions';
import styles from './Profile.module.css';
import {selectAllMissions} from '../../Redux/mission/missionSlice'
import { useEffect } from 'react';

function Profile() {
  const { mission } = useSelector(selectAllMissions);
  const joinMission = mission.filter((mission) => mission.joined === true);
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reservation,
  );

  return (
    <div className={styles.container}>
      <MyMissions data={joinMission}/>
      <MyRockets data={rockets} />
    </div>
  );
}

export default Profile;
