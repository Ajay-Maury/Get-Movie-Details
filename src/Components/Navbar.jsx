import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingData } from "../redux/trending/action";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const timerRef = useRef(null);
  const [time, setTime] = useState("day");
  const page = useRef(1);
  const [type, setType] = useState("trending");
  const totalPage = useRef(null);
  const { loading, error, movieData } = useSelector(
    (state) => state.trendingData
  );
  const d = useSelector((state) => state.searchData);
  const data = movieData.results;
  // console.log("moda", data);
  // console.log("ddd", d);

  

  function debounce(delay) {
    console.log("name in debounce : ", nameRef.current);
    setType("search");
    setTime("");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(
      () =>
        dispatch(
          fetchTrendingData("search", "movie",nameRef.current, 1 , "")
        ),
      delay
    );
  }

 
  return (
      <div className="nav">
        <Link to="/">
          <div id="logo">Get Moive Details</div>
        </Link>
        <div id="serch">
          <input
            type="text"
            id="movie_name"
            onInput={(e) => {
              nameRef.current = e.target.value;
              if (nameRef.current == "") page.current = 1;
              debounce(1000);
            }}
            placeholder="Enter Your movie name"
          />
        </div>
      </div>
  );
}

export default Navbar;
