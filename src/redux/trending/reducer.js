import { FETCH_TRENDING_FAILURE, FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUSCESS } from "./action"

const initState = {
    loading: false,
    error: '',
    movieData : {},
}

export const trendingReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_TRENDING_REQUEST: {
            return {loading: true, error: false, movieData: {} };
        }
        case FETCH_TRENDING_FAILURE: {
            return {loading: false, error: payload, movieData: {} };
        }
        case FETCH_TRENDING_SUSCESS: {
            return {
              loading: false,
              error: false,
              movieData: payload,
            };
        }
        default:
            return state
    }
}