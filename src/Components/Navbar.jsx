import React, { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch} from "react-redux";
import { getSearchQuery, getCategory, getTime, getPage } from "../redux/API-Params/action";
function Navbar() {
  const dispatch = useDispatch();
  const nameRef = useRef("")
  const timerRef = useRef();

 
  function debounce(delay) {
    // console.log("name in debounce : ", nameRef.current)
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(
      () => {
        dispatch(getPage(1));
        dispatch(getTime(""));
         dispatch(getCategory("search"));
        dispatch(getSearchQuery(nameRef.current))
      },
      delay
    );
  }

  const handleSearch = async (e) => {
    nameRef.current = e.target.value.trim()
    if (nameRef.current) {
      debounce(1000)
    }
    else {
      dispatch(getCategory("trending")) 
      dispatch(getTime("day"))
      dispatch(getSearchQuery(nameRef.current));
  };
  };
 
  return (
      <div className="nav">
        <Link to="/">
          <div id="logo">Get Moive Details</div>
        </Link>
        <div id="serch">
          <input
            type="text"
            id="movie_name"
            onInput={handleSearch}
            placeholder="Enter Your movie name"
          />
        </div>
      </div>
  );
}

export default Navbar;
