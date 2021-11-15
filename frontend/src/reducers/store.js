import { createStore , combineReducers } from "redux";

import user from "./user/user"
import details from "./details/details";

const reducers = combineReducers({user,details})
const store = createStore(reducers)
export default store;