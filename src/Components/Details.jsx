import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../redux/detail/action ";
import "./Details.css";
const Details = () => {
  let navigate = useNavigate();
  const { id,type } = useParams();
  const dispatch = useDispatch();
  const {loading,error,data} = useSelector(state=>state.detail)
console.log(data)
  useEffect(() => {
    // console.log(id)
    dispatch(getDetail(id,type))
  }, []);

  return (
    <>
      <div id="container">
        <div id="btn" 
        // onClick={() => navigate("../", { replace: true })}
        >
          {/* <i className="fas fa-window-close"></i> */}

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
              marginBottom: "1%",
            }}
          >
            {loading ? "Loading Please Wait " : data.Title}
            {error && `${error}`}
          </div>
          {data.Response === "True" ? (
            <div className="box1">
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
          ) : (
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
                marginBottom: "1%",
              }}
            >
              {data.Error}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
