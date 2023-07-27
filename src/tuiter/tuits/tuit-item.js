import React from "react";
import {FaCertificate} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import { BiX } from 'react-icons/bi';

const TuitItem = (
    { tuit }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(

    <div className="row">
      <div className="col-1 d-flex align-items-baseline">
        <img width={50} className="float-left rounded-circle" src={`/images/${tuit.image}`}/>
      </div>
      <div className="col-11">
        <BiX className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)} />
        <div className="d-flex align-items-center">
          <span className="me-2 fw-bold">{tuit.userName}</span>
          <FaCertificate className="fs-7 text-primary me-2"/>
          <span>{tuit.handle} · {tuit.time}</span>
        </div>
        <div>{tuit.tuit}</div>
      </div>
    </div>

  );
};
export default TuitItem;