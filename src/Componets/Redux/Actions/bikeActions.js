import axios from "axios";

export const GET_BIKE_REQ = 'GET_BIKE_REQ';
export const GET_BIKE_FAIL = 'GET_BIKE_FAIL';
export const GET_BIKE_SUCCESS = 'GET_BIKE_SUCCESS';


//Get single Bike Details 
export const GET_SINGLE_BIKE_REQ = 'GET_SINGLE_BIKE_REQ'
export const GET_SINGLE_BIKE_FAIL = 'GET_SINGLE_BIKE_FAIL'
export const GET_SINGLE_BIKE_SUCCESS = 'GET_SINGLE_BIKE_SUCCESS'



//Load all bike data
export const getAllBike = (dispatch) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_BIKE_REQ
            })
            //success data
            const res = await axios.get('https://bikehourse.onrender.com/bike/getAllBike');
            console.log("result pailam", res?.data);
            dispatch({
                type: GET_BIKE_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_BIKE_FAIL,
                payload: error.message
            })
        }
    }
}



//get single bike

export const getSingleBikeDetails = (id, dispatch) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_SINGLE_BIKE_REQ
            })
            const res = await axios.get(`https://bikehourse.onrender.com/bike/getsingleBike/${id}`);
            dispatch({
                type: GET_SINGLE_BIKE_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_SINGLE_BIKE_FAIL,
                payload: error.message
            })
        }
    }
}

