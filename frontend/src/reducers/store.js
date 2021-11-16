import { createStore , combineReducers } from "redux";
import watch from "./watch/watch";
import user from "./user/user"
import search from "./search/search";

const reducers = combineReducers({user,search, watch})
const store = createStore(reducers)
export default store;