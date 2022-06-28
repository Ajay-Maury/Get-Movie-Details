import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingData } from "../redux/trending/action";
import Body from "./Body";
import Filters from "./Filters";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const Home = () => {
    let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch();
  const { category, type, time, key, query, page } = useSelector(
    (state) => state.apiParams
  );
  // console.log(category, type, time, key, query, page);
  let x = searchParams.values;
  console.log("param", x);

  useEffect(() => {
    dispatch(fetchTrendingData(category, type, time, key, query, page));
  }, [dispatch, category, type, time, key, query, page]);

  return (
    <div>
      <Navbar />  
      <Filters/>
      <Body />
      <Pagination/>
    </div>
  );
};

export default Home;
