import React from 'react';
import { BiMessageRounded } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegThumbsDown, FaThumbsDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
      <div className="row d-flex align-items-center">
        <div className="col-1"></div>
        <div className="col-11 d-flex align-items-center">
          <div className="col-2 d-flex align-items-center">
            <BiMessageRounded />
            <span className="ms-2">{tuit.replies}</span>
          </div>
          <div className="col-2 d-flex align-items-center">
            <AiOutlineRetweet />
            <span className="ms-2">{tuit.retuits}</span>
          </div>
          <div className="col-2 d-flex align-items-center">
            {tuit.liked ? (
                <AiFillHeart onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1  }))} style={{ color: 'red' }} />
            ) : (
                <AiOutlineHeart onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, liked: true, likes: tuit.likes + 1 }))} />
            )}
            <span className="ms-2">{tuit.likes}</span>
          </div>
          <div className="col-2 d-flex align-items-center">
            {tuit.disliked ? (
                <FaThumbsDown onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1  }))} style={{ color: 'black' }} />
            ) : (
                <FaRegThumbsDown onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, disliked: true, dislikes: tuit.dislikes + 1 }))} />
            )}
            <span className="ms-2">{tuit.dislikes}</span>
          </div>
          <div className="col-2 d-flex align-items-center">
            <FiUpload />
          </div>
        </div>
      </div>
  );
};

export default TuitStats;
