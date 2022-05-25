import { Link, useNavigate } from "react-router-dom";
const Body = (props) => {
  // console.log(props.data)
   const navigate = useNavigate();
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
            //   localStorage.setItem("Movie-Name", JSON.stringify(t));
            //   //  navigate("/Details/${t}",{replace:false});
            // }}
          >
            <Link to={`/details/${element.title}`}>
              {/* <span style={{ color: "green" }}>
                {element.vote_average > 8.5 ? "Recommended" : ""}
              </span> */}
              <div className="img_box">
                <img
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  alt=""
                />
              </div>
              <p>{element.title}</p>
                <p>{`Realese Date: ${element.release_date}`}</p>
                {/* <p>{`Rating : ${element.vote_average}`}</p> */}
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
