import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import "./Navbar.css";

function Navbar() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // function handleInput(e) {
  //   // let mname = e.target.value;
  //   // console.log(mname);
  //   // setName(mname);
  //   if (name) {
  //     debounce(mymovie, 1000);
  //   }
  // }

  useEffect(() => {
    // mymovie();
    movie_data();
  }, []);
 
  
  // console.log(query, "query");
  
  
  async function movie_data() {
    try {
      setLoading(true);
      let res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35"
      );
      let data = await res.json();
      console.log(data.results);
      setData(data.results);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log("error", err);
    }
  }

   function debounce(fun, delay) {
     if (timer) {
       clearTimeout(timer);
     }
     setTimer(setTimeout(() => fun(), delay));
   }
  
  console.log("name in state : ", name);

  async function mymovie() {
    try {
      console.log("name in api function  : ", name);
      let movie = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab1630eb17982a965c2d03e0c42dce35&query=${name}`
      );
      movie = await movie.json();
      console.log(movie.results);
      setData(movie.results);
    } catch (er) { console.log("error", er) }
  }
  return (
    <div>
      <div className="nav">
        {/* <Link to="/">
          <div id="logo">Get Moive Details</div>
        </Link> */}
        <a href="/">
          <div id="logo">Get Moive Details</div>
        </a>
        <div id="serch">
          <input
            type="text"
            id="movie_name"
            onInput={(e) => {
              setName(e.target.value), debounce(mymovie, 1000);
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
              marginTop:"10%",
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
    </div>
  );
}

export default Navbar;
