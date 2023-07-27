import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },

  reducers: {
    likeTuit: (state, action) => {
      const { tuitId } = action.payload;
      const tuitToUpdate = state.tuits.find((tuit) => tuit._id === tuitId);
      if (tuitToUpdate) {
        tuitToUpdate.likes += 1;
        tuitToUpdate.liked = true;
      }
    },

    unlikeTuit: (state, action) => {
      const { tuitId } = action.payload;
      const tuitToUpdate = state.tuits.find((tuit) => tuit._id === tuitId);
      if (tuitToUpdate && tuitToUpdate.likes > 0) {
        tuitToUpdate.likes -= 1;
        tuitToUpdate.liked = false;
      }
    },

    deleteTuit(state, action) {
      const index = state.tuits
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },

    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }

  },
});

export const { likeTuit, unlikeTuit, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
