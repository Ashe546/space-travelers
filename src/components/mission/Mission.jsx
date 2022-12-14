import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  missionStatus,
  selectAllMissions,
} from '../../Redux/mission/missionSlice';
import style from './Mission.module.css';

import Button from '../../UI/Button';

const Mission = () => {
  const { mission } = useSelector(selectAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const [reservation, setIsreservation] = useState(false);

  const handlemission = (id) => {
    dispatch(missionStatus(id));
    setIsreservation(!reservation);
  };
  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={style.stutus}>Status</th>
            <th className={style.but_join}> </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((mission, e) => (
            <tr
              key={mission.mission_id}
              className={e % 2 === 0 ? style.white : style.grey}
            >
              <td className={style.title}>{mission.mission_name}</td>
              <td className={style.desc}>{mission.description}</td>
              <td className={style.stutus_update}>
                <span
                  className={mission.reservation ? style.member : style.nmember}
                >
                  {mission.reservation ? 'Active Member' : 'Not a member'}
                </span>
              </td>
              <td className={style.stutus_update}>
                <Button
                  title={mission.reservation ? 'Leave mission' : 'Join Mission'}
                  className={mission.reservation ? style.btn : style.joind}
                  onReserve={() => handlemission(mission.mission_id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
