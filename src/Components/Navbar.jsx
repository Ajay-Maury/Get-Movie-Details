import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingData } from "../redux/trending/action";
import Body from "./Body";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../redux/search/action";

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
  console.log("moda", data);
  console.log("ddd", d);

  useEffect(() => {
      setType("trending");
      setTime("day");
    dispatch(
      fetchTrendingData(type, "movie", nameRef.current, page.current, time)
    );
    // movie_data();
  }, [dispatch, type, nameRef.current,time]);

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
          fetchTrendingData(type, "movie", page.current, time)
        ),
      delay
    );
  }

  // console.log("name in state : ", name);

  // async function mymovie() {
  //   try {
  //     // console.log("name in api function  : ", nameRef.current);
  //     let movie = await fetch(
  //       `https://api.themoviedb.org/3/search/movie?api_key=ab1630eb17982a965c2d03e0c42dce35&query=${nameRef.current}&page=${page.current}`
  //     );
  //     movie = await movie.json();
  //     if (movie.results) {
  //       totalPage.current = movie.total_pages;
  //       console.log(movie, "pages", totalPage);
  //       console.log("dta", movie.results);
  //       setData(movie.results);
  //     }
  //     else {
  //       totalPage.current = null;
  //       page.current=1
  //       movie_data();
  //     }
  //   } catch (er) { console.log("error", er) }
  // }
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <div id="logo">Get Moive Details</div>
        </Link>
        {/* <a href="/">
          <div id="logo">Get Moive Details</div>
        </a> */}
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
      <div id="err"></div>
      {loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontWeight: "bold",
            fontSize: "2.4rem",
          }}
        >
          Loading Please Wait .....
        </div>
      )}
      <div id="movie">
        {error && <div>Something went wrong!</div>}
        {data && data.length !== 0 && <Body data={data} />}
      </div>
      {data && data.length !== 0 && (
        <footer className="pageBtn">
          {page.current > 1 && (
            <button
              onClick={() => {
                (page.current = page.current - 1), mymovie();
              }}
            >
              Prev
            </button>
          )}
          {totalPage.current > 1 && page.current < totalPage.current && (
            <button
              onClick={() => {
                (page.current = page.current + 1), mymovie();
              }}
            >
              Next
            </button>
          )}
        </footer>
      )}
    </div>
  );
}

export default Navbar;
