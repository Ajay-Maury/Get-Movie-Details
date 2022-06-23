import { FETCH_TRENDING_FAILURE, FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUSCESS } from "./action"

const initState = {
    loading: false,
    error: '',
    movieData : {},
}

export const trendingReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_TRENDING_REQUEST: {
            return { ...state, loading: true, error: false};
        }
        case FETCH_TRENDING_FAILURE: {
            return { ...state, loading: false, error: payload};
        }
        case FETCH_TRENDING_SUSCESS: {
            return {
              ...state,
              loading: false,
              error: false,
              movieData: payload,
            };
        }
        default:
            return state
    }
}