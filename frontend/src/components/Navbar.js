// import * as ReactBootStrap from "react-bootstrap";
import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { createContext } from "react";
import { setSearch } from "../reducers/search/search";

function Navbar() {
  const [searchSomething, setSearchSomething] = useState("");
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user, search: state.search.search };
  });
  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
      <Link class="navbar-brand" to="/Home">
            ANIME LIST
          </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="./Action" class="dropdown-item">Action</Link></li>
            <li><Link to="./Adventure" class="dropdown-item" >Adventure</Link></li>
            <li><Link to="./Comedy" class="dropdown-item" >Comedy</Link></li>
            <li><Link to="./Mystery" class="dropdown-item" >Mystery</Link></li>
          </ul>
        </li>
            {log.logged ? (
              <li class="nav-item">
                <Link
                id="login_button"
                  class="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  <button class="btn btn-info btn-sm">
                    {state.user?.email}
                  </button>
                </Link>
              </li>
            ) : (
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Log in
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex" id="Link_search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchSomething(e.target.value)}
            />
            <Link
              onClick={() => dispatch(setSearch(searchSomething))}
              variant="outline-success"
              to="/Search"
              class="btn btn-outline-info"
              type="submit"
            >
              Search
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

{
  /* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
      {/* ADDED K */
}
// {log.logged ? (
//   <a class="Nav " href="#">
//     <Link
//       className="Link"
//       to="/profile"
//       // style={{ textDecoration: "none", color: "black" }}
//     >
//       <button
//         type="submit"
//         class="btn btn-light btn-sm"
//       >
//         {state.user?.email}
//       </button>
//     </Link>
//   </a>
// ) : (
//   <a class="Nav " href="#">
//     <Link
//       className="Link"
//       to="/login"
//       // style={{ textDecoration: "none", color: "black" }}
//     >
//       Log in
//     </Link>
//   </a>
// )}
//   {/* ADDED K END  */}
// </div> */}
