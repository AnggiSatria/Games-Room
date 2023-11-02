import { combineReducers } from "redux";
import userReducer from "../action/user/user";
import gamesReducer from "../action/games/games";

const Reducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
});

export default Reducer;
