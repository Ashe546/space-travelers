import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionStatus, selectAllMissions } from '../../Redux/mission/missionSlice';
import style from './Mission.module.css'

import Button from '../../UI/Button';

const Mission = () => {
  const { mission } = useSelector(selectAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, [mission]);

  const handlemission = (id) => {
    dispatch(missionStatus(id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Mission
            </th>
            <th>
              Description
            </th>
            <th>
              Status
            </th>
            <th>
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((x) => (
            <tr key={x.mission_id}>
              <td>
                {x.mission_name}
              </td>
              <td>{x.description}</td>
              <td>
                <span>
                  {x.joined ? 'Active Member' : 'Not a member'}
                </span>
              </td>
              <td>
                <Button title={x.joined ? 'Leave mission' : 'Join Mission'} className={x.joined ? style.btn : style.joind} onReserve={() => handlemission(x.mission_id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;