import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import axios from 'axios'
import { addUser } from "../reducers/user/user";
import { LogContext } from "./LogContext";

function Login() {
  //ADDED K
  const log = useContext(LogContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state)=>{
    return {user:state.user.user}
  })


  const logUser = (e) => {
    e.preventDefault();
    //ADDED
    // console.log(e.target.form[0].value);

    axios
      .post("http://localhost:8080/user/login", {
        email: e.target.form[0].value,
        password: e.target.form[1].value,
      })
      .then((res) => {
        if(res.data !== undefined){
          log.setLogged(true)
          dispatch(addUser(res.data))
          console.log('res',res.data)
        }
        
        //const status = res.data == 'Success' ? log.setLogged(true) : log.setLogged(false);

      });
  };




  return (
    <div className="Login">
        {/* ADDED K */}
        {log.logged ? navigate('../Profile', {replace:true})
      : (
        <form>
        <div class="form-group">
          <h1>Login</h1>
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
          {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label> */}
          <Link
            style={{ color: "white" }}
            to="/signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Doesn't have account? SignUp
          </Link>
        </div>
        <button
          type="submit"
          class="btn btn-success btn-lg"
          onClick={(e) => {
            logUser(e);
          }}>Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
