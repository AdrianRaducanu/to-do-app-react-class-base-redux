import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import itemHistoryReducer from "./itemHistoryReducer";

const reducers = combineReducers({
    itemReducer,
    itemHistoryReducer
})

export default reducers;