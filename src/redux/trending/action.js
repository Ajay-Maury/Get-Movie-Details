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

export const fetchTrendingData = (type) => (dispatch) => {
    console.log(1)
    dispatch(fetchTrendingRequest())
    axios(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35`
    )
      .then((res) => dispatch(fetchTrendingSuscess(res.data)))
      .catch((error) => dispatch(fetchTrendingFailure(error.message)));
}