import { GET_DETAIL_FAILURE, GET_DETAIL_REQUEST, GET_DETAIL_SUSCESS } from "./action "

const initstate = {
    loading: false,
    error: '',
    data : {}
}

export const detailReducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case GET_DETAIL_REQUEST: {
            return { loading: true, error: '', data: {} }
        };
        case GET_DETAIL_FAILURE: {
            return { loading: false, error: payload, data: {} }
        };
        case GET_DETAIL_SUSCESS: {
            return { loading: false, error: false, data: payload }
        };
        default: 
            return state
    }
}