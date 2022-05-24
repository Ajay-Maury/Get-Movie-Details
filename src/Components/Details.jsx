import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Details.css"
const Details = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
const {id}= useParams()
    // let name = JSON.parse(localStorage.getItem("Movie-Name"));
    // console.log(name)
    
    useEffect(() => {
    movieData(id);
},[])

    async function movieData(name) {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=5fdad9e6&t=${id}`
      );
      res = await res.json();
        console.log(res);
      setData([res]);
  }
  // const navigate = useN
  return (
    <>
      <div id="container">
        <div id="btn">
          <Link to="/">
            <i className="fas fa-window-close"></i>
          </Link>

          {/* <a href="/">
            <i className="fas fa-window-close"></i>
          </a> */}
        </div>
        <div id="detail">
          {data.map((e, i) => (
            <div className="box1" key={i}>
              <div className="poster_box">
                <img src={e.Poster} alt="" />
                <p>
                  <strong>{e.Title}</strong>
                </p>
              </div>
              <div className="detail_box">
                <p>
                  <strong>Actors : </strong>
                  {e.Actors}
                </p>
                <p>
                  <strong>Awards : </strong>
                  {e.Awards}
                </p>
                <p>
                  <strong>Box Office : </strong>
                  {e.BoxOffice}
                </p>
                <p>
                  <strong>Director : </strong>
                  {e.Director}
                </p>
                <p>
                  <strong>Plot : </strong>
                  {e.Plot}
                </p>
                <p>
                  <strong>Release Date : </strong>
                  {e.Released}
                </p>
                <p>
                  <strong>Writer : </strong>
                  {e.Writer}
                </p>
                <p>
                  <strong>IMDB Rating : </strong>
                  {e.imdbRating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Details
