import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUSCESS } from "./action";

const initState = {
  loading: false,
  error: "",
  searchData: {},
};

export const searchReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_SEARCH_REQUEST: {
            return {loading: true,error:'',searchData:{}}
        };
        case FETCH_SEARCH_FAILURE: {
            return {error: payload, loading: false, searchData: {} };
        };
        case FETCH_SEARCH_SUSCESS: {
            return {searchData: payload ,loading:false,error:''}
        };
        default:
            return state
    };

}
