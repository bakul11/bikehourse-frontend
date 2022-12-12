import { GET_BIKE_FAIL, GET_BIKE_REQ, GET_BIKE_SUCCESS, GET_SINGLE_BIKE_FAIL, GET_SINGLE_BIKE_REQ, GET_SINGLE_BIKE_SUCCESS } from "../Actions/bikeActions";

const instilzeBike = {
    loadding: true,
    bike: [],
    error: ''
}
export const bikeReducers = (state = instilzeBike, action) => {
    switch (action.type) {
        case GET_BIKE_REQ:
            return {
                ...state,
                loadding: true
            }
        case GET_BIKE_SUCCESS:
            return {
                ...state,
                loadding: false,
                bike: action.payload,

            }
        case GET_BIKE_FAIL:
            return {
                ...state,
                loadding: true,
                error: action.payload
            }
        default:
            return state
    }
}


export default bikeReducers;


const bikeInstilize = {
    bike: {},
    error: '',
    loadding: true
}


export const bikeDetaileReducer = (state = bikeInstilize, action) => {
    switch (action.type) {
        case GET_SINGLE_BIKE_REQ:
            return {
                ...state,
                loadding: true
            }

        case GET_SINGLE_BIKE_SUCCESS:
            return {
                ...state,
                bike: action.payload,
                loadding: false
            }
        case GET_SINGLE_BIKE_FAIL:
            return {
                ...state,
                bike: action.payload,
                loadding: true
            }

        default:
            return state
    }
}














