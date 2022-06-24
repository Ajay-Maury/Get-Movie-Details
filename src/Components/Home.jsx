import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrendingData } from "../redux/trending/action";
import Body from "./Body";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingData("trending", "movie", "", 1, "day"));
  }, []);

  return (
    <div>
      <Navbar />  
        <Body />
    </div>
  );
};

export default Home;
