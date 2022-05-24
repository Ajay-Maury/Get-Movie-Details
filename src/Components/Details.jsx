import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  // let name = JSON.parse(localStoragdata.getItem("Movie-Name"));
  // consoldata.log(name)

  useEffect(() => {
    movieData(id);
  }, []);

  async function movieData(name) {
    let res = await fetch(`https://www.omdbapi.com/?apikey=5fdad9e6&t=${id}`);
    res = await res.json();
    console.log(res);
    setLoading(false);
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
        </div>
        <div id="detail">
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom:"1%",
            }}
          >
            {loading ? "Loading Please Wait " : data[0].Title}
          </div>
          {data.map((data, i) => (
            <div className="box1" key={i}>
              <div className="poster_box">
                <img src={data.Poster} alt="" />
              </div>
              <div className="detail_box">
                <p>
                  <strong>Actors : </strong>
                  {data.Actors}
                </p>
                <p>
                  <strong>Awards : </strong>
                  {data.Awards}
                </p>
                <p>
                  <strong>Box Office : </strong>
                  {data.BoxOffice}
                </p>
                <p>
                  <strong>Director : </strong>
                  {data.Director}
                </p>
                <p>
                  <strong>Plot : </strong>
                  {data.Plot}
                </p>
                <p>
                  <strong>Release Date : </strong>
                  {data.Released}
                </p>
                <p>
                  <strong>Writer : </strong>
                  {data.Writer}
                </p>
                <p>
                  <strong>IMDB Rating : </strong>
                  {data.imdbRating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
