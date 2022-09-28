import { useSelector } from 'react-redux';

import MyRockets from './MyRockets';
import MyMissions from './MyMissions';
import styles from './Profile.module.css';
import {selectAllMissions} from '../../Redux/mission/missionSlice'
import { useEffect } from 'react';

function Profile() {
  const { mission } = useSelector(selectAllMissions);
  const joinMission = mission.filter((x) => x.joined === true);
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reservation,
  );
  console.log(mission)

  return (
    <div className={styles.container}>
      <MyMissions data={joinMission}/>
      <MyRockets data={rockets} />
    </div>
  );
}

export default Profile;
