import { createStore , combineReducers } from "redux";
import watch from "./watch/watch";
import user from "./user/user"

const reducers = combineReducers({user, watch})
const store = createStore(reducers)
export default store;