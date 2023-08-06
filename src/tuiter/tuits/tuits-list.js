import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        { loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
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