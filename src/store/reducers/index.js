import { combineReducers } from "redux";
import { BoardReducer } from "./BoardReducer";

export const reducers = combineReducers({
  board: BoardReducer,
});
