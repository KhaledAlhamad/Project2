// import * as ReactBootStrap from "react-bootstrap";
import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { createContext } from "react";
import {setSearch} from '../reducers/search/search'

function Navbar() {
  const [searchSomething, setSearchSomething] = useState("")
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user:state.user.user,search: state.search.search };
  });
  const dispatch = useDispatch();

  return (
    <div id="navbar">
      <div className="d-flex" id="Link_search">
            <input
              type="search"
              placeholder="Search"
              className="me-0"
              aria-label="Search"
              onChange={(e) => setSearchSomething(e.target.value)}
            />
            <Link
              className="Link_search"
              onClick={()=>dispatch(setSearch(searchSomething))}
              variant="outline-success"
              to="/Search"
            >
              🔎
            </Link>
          </div>
      {/* ADDED K */}
      {log.logged ? (
        <a class="Nav " href="#">
          <Link 
            className="Link"
            to="/profile"
            // style={{ textDecoration: "none", color: "black" }}
          >
            <button
              type="submit"
              class="btn btn-light btn-sm"
            >
              {state.user?.email}
            </button>
          </Link>
        </a>
      ) : (
        <a class="Nav " href="#">
          <Link
            className="Link"
            to="/login"
            // style={{ textDecoration: "none", color: "black" }}
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
