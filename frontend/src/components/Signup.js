import axios from "axios";
import React, { useContext } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../reducers/user/user";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state)=>{
    return {user:state.user.user}
  })
    const add = (e) => {
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
            dispatch(addUser(res.data))
            navigate('../login', {replace:true})
          });
      };

    return (
        <div>
            <form>
        <div class="form-group">
          <h1>SignUp</h1>
          <label for="exampleInputEmail1">Username</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your data with anyone else.
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
            add(e);
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
