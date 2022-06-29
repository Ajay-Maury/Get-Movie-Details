import axios from "axios"

export const FETCH_TRENDING_REQUEST = "FETCH_TRENDING_REQUEST"
export const FETCH_TRENDING_SUSCESS = "FETCH_TRENDING_SUSCESS"
export const FETCH_TRENDING_FAILURE = "FETCH_TRENDING_FAILURE"

export const fetchTrendingRequest = () => {
  return {
    type: FETCH_TRENDING_REQUEST,
  };
};

export const fetchTrendingSuscess = (data) => {
  return {
    type: FETCH_TRENDING_SUSCESS,
    payload: data,
  };
};

export const fetchTrendingFailure = (error) => {
  return {
    type: FETCH_TRENDING_FAILURE,
    payload: error,
  };
};

export const fetchTrendingData =
  (params) => (dispatch) => {
    // console.log("category", category, "type", type, "query", query, "time", time, "page", page);
    // console.log("Hello ")
    const url = `https://api.themoviedb.org/3/${params}`;

    // console.log("url", url);

    dispatch(fetchTrendingRequest());
    axios(url)
      .then((res) => dispatch(fetchTrendingSuscess(res.data)))
      .catch((error) => dispatch(fetchTrendingFailure(error.message)));
  };