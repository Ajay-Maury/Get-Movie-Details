import {
  GET_CATEGORY,
  GET_PAGE_NO,
  GET_SEARCH_TERM,
  GET_TIME_DATA,
  GET_TOTAL_PAGE,
  GET_TYPE_DATA,
} from "./action";

const initState = {
  category: "trending",
  type: "movie",
  time: "day",
  key: "ab1630eb17982a965c2d03e0c42dce35",
  query: "",
    page: 1,
  totalPages : 0,
};

export const apiParamsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_TERM: {
      return { ...state, query: payload };
    }
    case GET_PAGE_NO: {
      return { ...state, page: payload };
    }
    case GET_CATEGORY: {
      return { ...state, category: payload };
    }
    case GET_TYPE_DATA: {
      return { ...state, type: payload };
    }
      case GET_TIME_DATA: {
          return { ...state, time: payload };
      };
      case GET_TOTAL_PAGE: {
          return { ...state, totalPages :payload};
          }
    default:
      return state;
  }
};

//GET  /trending/{media_type}/{time_window}  https://api.themoviedb.org/3/search/movie?a   