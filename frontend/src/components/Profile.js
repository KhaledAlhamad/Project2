import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { clearUser } from "../reducers/user/user";

function Profile (){
    const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user };
  });
  const dispatch = useDispatch();

  let clear = () =>{
      dispatch(clearUser(state.user))
      log.setLogged(false)
  }
    return(
    <div>
        <h1>Email: {state.user.email}</h1>
        <Link to='./login'>
        <button
              type="submit"
              class="btn btn-danger btn-lg"
              onClick={()=>clear()}
            >Log out</button>
        </Link>
        </div>);
}


export default Profile;