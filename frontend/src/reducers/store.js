import { createStore , combineReducers } from "redux";
import watch from "./watch/watch";
import user from "./user/user"
import details from "./details/details";

const reducers = combineReducers({user,details, watch})
const store = createStore(reducers)
export default store;