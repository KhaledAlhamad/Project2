import * as ReactBootStrap from "react-bootstrap";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useContext } from "react";
import { LogContext } from "./LogContext";

function Navbar() {
  const log = useContext(LogContext);

  return (
    <div id="navbar">
      <Link className="Link_home" to="/Home">
        ANIME LIST
      </Link>
      <div id="Nav">
        <Link className="Link" to="/Details">
          Details
        </Link>
      </div>

      {/* ADDED K */}
      
      <a class="Nav " href="#">
        <Link
          className="Link"
          to="/login"
          style={{ textDecoration: "none", color: "black" }}
        >
          {log.logged ? (
            <button
              type="submit"
              class="btn btn-danger btn-sm"
              onClick={() => {
                log.setLogged(false);
              }}
            >
              LogOut{" "}
            </button>
          ) : (
            "Log in"
          )}
        </Link>
      </a>
      {/* ADDED K END  */}
      
      {/* <div id="Nav">
            <Link className="Link" to="/Login">
              LOGIN
            </Link>
          </div> */}
    </div>
  );
}
export default Navbar;
