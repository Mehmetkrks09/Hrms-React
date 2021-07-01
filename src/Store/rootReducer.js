import { combineReducers } from "redux";
import FavoriteAdvertisementReducer from "./Reducers/FavoriteAdvertisementReducer";


const rootReducer = combineReducers({
    favorites :FavoriteAdvertisementReducer
})

export default rootReducer