import * as ReactBootStrap from "react-bootstrap";
import React, { useState,useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
function Sidebar() {
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user };
  });
  const dispatch = useDispatch();

  return (
  <div id="sidebar">
      <Link className="Link_home" to="/Home">
        ANIME LIST
      </Link>
      {/* ADDED K */}
      
      {/* ADDED K END  */}
    </div>);
}
export default Sidebar;