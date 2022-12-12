import { bikeReducers } from "../Reducers/bikeReducers"
import { bikeDetaileReducer } from "../Reducers/bikeReducers";
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const rootReducers = combineReducers({
    bikeReducers,
    bikeDetaileReducer
})


const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;