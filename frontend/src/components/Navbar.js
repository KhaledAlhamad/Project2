import * as ReactBootStrap from "react-bootstrap";
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { clearUser } from "../reducers/user/user";

function Navbar() {
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user };
  });
  const dispatch = useDispatch();

  return (
    <div id="navbar">
      <Link className="Link_home" to="/Home">
        ANIME LIST
      </Link>

      {/* ADDED K */}
      {log.logged ? (
        <a class="Nav " href="#">
          <Link
            className="Link"
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button
              type="submit"
              class="btn btn-light btn-sm"
            >
              {state.user.email}
            </button>
          </Link>
        </a>
      ) : (
        <a class="Nav " href="#">
          <Link
            className="Link"
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Log in
          </Link>
        </a>
      )}
      {/* ADDED K END  */}
    </div>
  );
}
export default Navbar;
