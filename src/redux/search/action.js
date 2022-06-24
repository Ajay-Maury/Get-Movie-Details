import axios from "axios"

export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST"
export const FETCH_SEARCH_SUSCESS = "FETCH_SEARCH_SUSCESS"
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE"

const fetchSearchRequest = () => {
    return {
        type : FETCH_SEARCH_REQUEST
    }
}

const fetchSearchSuscess = (data) => {
    return {
        type: FETCH_SEARCH_SUSCESS,
        payload : data,
    }
}

const fetchSearchFailure = (error) => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload : error
    }
}

export const fetchSearchData = (category, name, page) => (dispatch) => {
  console.log(category, "category");
  dispatch(fetchSearchRequest());
  axios(
    `https://api.themoviedb.org/3/search/${category}?api_key=ab1630eb17982a965c2d03e0c42dce35&query=${name}&page=${page}`
  )
    .then((res) => dispatch(fetchSearchSuscess(res.data)))
    .catch((error) => dispatch(fetchSearchFailure(error.message)));
};