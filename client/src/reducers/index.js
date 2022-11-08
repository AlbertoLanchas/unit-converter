import { combineReducers } from "redux";
import { savedReducers } from "./savedReducers";

const reducer = combineReducers({
  saved: savedReducers,
});

export default reducer;
