import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTotalPages } from "../redux/API-Params/action";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { error, loading, movieData } = useSelector((state) => state.trendingData);
  const pages = movieData.total_pages || 0;
  // console.log("page", pages);
  useEffect(() => {
    dispatch(getTotalPages(pages));
  }, [movieData]);
  
  // console.log("Moviedata", movieData);
  // console.log("data", movieData.results);

  return (
    <>
      {loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontWeight: "bold",
            fontSize: "2.4rem",
          }}
        >
          Loading Please Wait...
        </div>
      )}
      {error && (
        <div
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontWeight: "bold",
            fontSize: "2.4rem",
          }}
        >
          error
        </div>
      )}

      {movieData.results?.length !== 0 ? (
        <div id="movie">
          {movieData.results?.map((element, i) => (
            <div key={i} className="box">
              <Link
                to={`/details/${
                  element.title || element.original_name || element.name
                }`}
                id="link"
              >
                <div className="img_box">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      element.poster_path || element.profile_path
                    }`}
                    alt={element.title || element.original_name || element.name}
                  />
                </div>
                <p>{element.title || element.original_name || element.name}</p>
                <p>
                  {element.release_date &&
                    `Realese Date: ${element.release_date}`}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
};

export default Body;
