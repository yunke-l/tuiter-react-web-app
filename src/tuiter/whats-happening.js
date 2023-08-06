import React, {useState} from "react";
import {BsCardImage, BsFiletypeGif, BsEmojiSmile, BsBarChart} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  }
  return (
      <>
      <div className="row">
        <div className="col-auto">
          <img src="/images/nasa.png" width={60} />
        </div>
        <div className="col-10">
         <textarea value={whatsHappening} placeholder="What's happening?"
                   className="form-control border-0"
                   onChange={(event) => setWhatsHappening(event.target.value)}>
         </textarea>
          <div>
            <button className="rounded-pill btn btn-primary btn-lg float-end ps-3 pe-3 fw-bold"
                    style={{width: "75px", height: "45px"}}
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="mt-4" />
              <BsCardImage className="text-primary me-3 fs-1" />
              <BsFiletypeGif className="text-primary me-3 fs-1" />
              <BsBarChart className="text-primary me-3 fs-1" />
              <BsEmojiSmile className="text-primary me-3 fs-1" />
              <SlLocationPin className="text-primary me-3 fs-1" />
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </>
  )
}
export default WhatsHappening;