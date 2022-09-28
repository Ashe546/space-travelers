import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions, selectAllMissions } from "../../Redux/mission/missionSlice";

const Mission = () => {
  const { missions } = useSelector(selectAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div >
    <table >
      <thead>
        <th>
          Mission
        </th>
        <th>
          Description
        </th>
        <th>
          Status
        </th>
        <th></th>
      </thead>
      <tbody>
          {missions.map((x) => {
            return (
                <tr key={x.mission_id}>
                <td>
                  {x.mission_name}
                </td>
                <td>
                  {x.description}
                </td>
                <td>
                  <span>
                    Not a member
                  </span>
                </td>
                <td>
                  <span>
                    Join Mission
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
  );
};

export default Mission;