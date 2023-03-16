import { combineReducers } from "redux";
import FavMemeReducer from "./FavMemeReducer";

const rootReducer = combineReducers({
  favMemeReducer: FavMemeReducer,
});

export default rootReducer;
