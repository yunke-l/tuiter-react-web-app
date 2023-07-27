import React from "react";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import {useSelector} from "react-redux";

const TuitList = () => {
  const { tuits } = useSelector(state => state.tuits)

  return(
      <ul className="list-group">
        {tuits.map((tuit) => (
            <li key={tuit._id} className="list-group-item">
              <TuitItem tuit={tuit} />
              <TuitStats tuit={tuit} />
            </li>
        ))}
      </ul>
  );
};
export default TuitList