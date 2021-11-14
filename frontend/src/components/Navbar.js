import * as ReactBootStrap from "react-bootstrap";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Navbar() {


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
          <div id="Nav">
            <Link className="Link" to="/Login">
              LOGIN
            </Link>
          </div>
    </div>
  );
}
export default Navbar;