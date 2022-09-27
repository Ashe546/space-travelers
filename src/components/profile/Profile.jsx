import { useSelector } from 'react-redux';

import MyRockets from './MyRockets';
import MyMissions from './MyMissions';
import styles from './Profile.module.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reservation,
  );

  return (
    <div className={styles.container}>
      <MyMissions />
      <MyRockets data={rockets} />
    </div>
  );
}

export default Profile;
