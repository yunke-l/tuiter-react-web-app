import React from 'react';
import { BiMessageRounded } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { likeTuit, unlikeTuit } from '../reducers/tuits-reducer';
const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (tuit.liked) {
      dispatch(unlikeTuit({ tuitId: tuit._id }));
    } else {
      dispatch(likeTuit({ tuitId: tuit._id }));
    }
  };

  return (
      <div className="row d-flex align-items-center">
        <div className="col-1"></div>
        <div className="col-11 d-flex align-items-center">
          <div className="col-3 d-flex align-items-center">
            <BiMessageRounded />
            <span className="ms-2">{tuit.replies}</span>
          </div>
          <div className="col-3 d-flex align-items-center">
            <AiOutlineRetweet />
            <span className="ms-2">{tuit.retuits}</span>
          </div>
          <div className="col-3 d-flex align-items-center">
            {tuit.liked ? (
                <AiFillHeart onClick={handleLikeClick} style={{ color: 'red' }} />
            ) : (
                <AiOutlineHeart onClick={handleLikeClick} />
            )}
            <span className="ms-2">{tuit.likes}</span>
          </div>
          <div className="col-3 d-flex align-items-center">
            <FiUpload />
          </div>
        </div>
      </div>
  );
};

export default TuitStats;
