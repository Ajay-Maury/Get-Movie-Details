import { GET_PAGE_NO, GET_SEARCH_TERM } from "./action"

const initState = {
    name: "",
    page : 1
}

export const search_PageReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_SEARCH_TERM: {
            return { ...state, name: payload }
        };
        case GET_PAGE_NO: {
            return { ...state, page: payload }
        };
            default: return state
    }
}