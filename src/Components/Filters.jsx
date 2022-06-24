import React from "react";
import { useDispatch } from "react-redux";
import { getType } from "../redux/API-Params/action";

const Filters = () => {
  const dispatch = useDispatch();

  function handleSelect(e) {
    console.log(e.target.value);
    let data = e.target.value;
    dispatch(getType(data));
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <select
        style={{ margin: "1%",padding:"1%" }}
        name="type"
        id="type"
        onChange={handleSelect}
      >
        <option value="movie">Movie</option>
        <option value="tv">TV Shows</option>
      </select>

      {/* <select name="category" id="category">
        <option value="movie">Movie</option>
        <option value="tv">TV Shows</option>
      </select> */}
    </div>
  );
};

export default Filters;
