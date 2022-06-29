import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Body from './Body';

const Trending = () => {
    const [Moviedata, setData] = useState([]);
    const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(false);  
  const [page, setPage] = useState(1);  
  // const [API, setAPI] = useState(
  //   "https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35"
  // );

  //   setAPI(()=>(props.name !="" ? `https://api.themoviedb.org/3/search/movie?api_key=ab1630eb17982a965c2d03e0c42dce35&query=${props.name}&page=${page}` : `https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35&page=${page}`))
    
      
    
    //  async function movie_data() {
    //    try {
    //      setLoading(true);
    //      let res = await fetch(API);
    //      let data = await res.json();
    //      console.log(data.results);
    //      setData(data.results);
    //      setLoading(false);
    //      setError(false);
    //    } catch (err) {
    //      setError(true);
    //      setLoading(false);
    //      console.log("error", err);
    //    }
    // }
    
  // useEffect(() => {
  //     console.log(props.name)
  //       // movie_data()
  //   },[])
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
                  Loading Please Wait .....
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
          Something Went Wrong
        </div>
      )}
      {/* {Moviedata && Moviedata.length !== 0 && <Body data={Moviedata} />} */}
    </>
  );
}

export default Trending
