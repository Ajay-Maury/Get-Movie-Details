import axios from "axios";

export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUSCESS = "GET_DETAIL_SUSCESS";
export const GET_DETAIL_FAILURE = "GET_DETAIL_FAILURE";

const getDetailRequest = () => {
  return {
    type: GET_DETAIL_REQUEST,
  };
};

const getDetailSuscess = (data) => {
  return {
    type: GET_DETAIL_SUSCESS,
    payload: data,
  };
};

const getDetailFailure = (error) => {
  return {
    type: GET_DETAIL_FAILURE,
    payload: error,
  };
};

export const getDetail = (name,type) => (dispatch) => {
  dispatch(getDetailRequest());
  axios(`https://www.omdbapi.com/?apikey=5fdad9e6&t=${name}&type=${type}`)
    .then((res) => dispatch(getDetailSuscess(res.data)))
    .catch((error) => dispatch(getDetailFailure(error.message)));
};
