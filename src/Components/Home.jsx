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
  // let x = searchParams.values;
  // let params = serializeFormQuery(category);
  // console.log(params)
  let params = `${category}/${type}${
    time && `/${time}`
  }?api_key=${key}${query && `&query=${query}`}${page && `&page=${page}`}`
  useEffect(() => {
    setSearchParams(params)
    dispatch(fetchTrendingData(params));
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
