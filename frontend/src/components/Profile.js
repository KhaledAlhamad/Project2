import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { clearUser } from "../reducers/user/user";
import { useState } from "react";
import axios from 'axios'

function Profile (){
  const [watch, setWatch] = useState([])
    const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user };
  });
  const dispatch = useDispatch();

  let clear = () =>{
      dispatch(clearUser(state.user))
      log.setLogged(false)
  }

  console.log(state.user)
  
  const getWatch = () => {
    console.log(state.user.email);
    const u = state.user.email;
    axios
      .get("http://localhost:8080/user/watch", JSON.stringify({
        email: "aa"
      }))
      .then((res) => {
        console.log(res.data)
        // dispatch(addWatch(res.data))

      });
  };
    return(
    <div>
      <button onClick={() => getWatch()}>Click</button>
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