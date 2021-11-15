import axios from "axios";
import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
    const addUser = (e) => {
        e.preventDefault();
    
        //ADDED
        // log.setLogged(true);
    
        // console.log(e.target.form[0]);
    
        axios
          .post("http://localhost:8080/user/signup", {
            email: e.target.form[0].value,
            password: e.target.form[1].value,
          })
          .then((res) => {
            console.log(res.data);
          });
      };

    return (
        <div>
            <form>
        <div class="form-group">
          <h1>SignUp</h1>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        
        <button
          type="submit"
          class="btn btn-success btn-lg"
          onClick={(e) => {
            addUser(e);
          }}
        >
          SignUp
        </button>
        <Link
            style={{ color: "white" }}
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Or log in
          </Link>
      </form>
        </div>
    )
}

export default Signup
