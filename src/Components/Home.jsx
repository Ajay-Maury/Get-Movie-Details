import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingData } from "../redux/trending/action";
import Body from "./Body";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { category, type, time, key, query, page } = useSelector(
    (state) => state.apiParams
  );
  console.log(category, type, time, key, query, page);

  useEffect(() => {
    dispatch(fetchTrendingData(category, type, time, key, query, page));
  }, [dispatch, category, type, time, key, query, page]);

  return (
    <div>
      <Navbar />  
      <Body />
      <Pagination/>
    </div>
  );
};

export default Home;
