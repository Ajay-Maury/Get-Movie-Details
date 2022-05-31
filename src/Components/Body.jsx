import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageContext } from "../context/PageContext";
const Body = (props) => {
  const navigate = useNavigate();
  // const {handlePage} = useContext(PageContext)
  // console.log(handlePage);
  // console.log(props.data)
  return (
    <>
      {props.data.length !== 0 ? (
        props.data.map((element, i) => (
          // console.log(element
          <div
            key={i}
            className="box"

            // onClick={() => {
            //   let t = element.title;
            //   console.log(t);
            //  // localStorage.setItem("Movie-Name", JSON.stringify(t));
            //   navigate(`/details/${element.title}`,{replace:false});
            // }}
          >
            <Link to={`/details/${element.title}`} id="link">
              <div className="img_box">
                <img
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  alt=""
                />
              </div>
              <p>{element.title}</p>
              <p>{`Realese Date: ${element.release_date}`}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
};

export default Body;
