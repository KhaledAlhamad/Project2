// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import axios from 'axios'
import { LogContext } from './LogContext';
import { useContext } from 'react';

function Login() {
  //ADDED K
  const log = useContext(LogContext);

  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [type, setType] = useState("log_in");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  

  const logUser = (e) => {
    e.preventDefault();
    //ADDED
    // log.setLogged(true);
    // console.log(e.target.form[0].value);

    axios
      .post("http://localhost:8080/user/login", {
        email: e.target.form[0].value,
        password: e.target.form[1].value,
      })
      .then((res) => {
        const status = res.data == 'Success' ? log.setLogged(true) : log.setLogged(false);
        console.log(res.data);
       
      });
  };




  return (
    <div className="Login">
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>User name </Form.Label>
          <Form.Control
            autoFocus
            type="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {type=='sign_up'?
        <Form.Group size="lg" controlId="email">
        <Form.Label>Email </Form.Label>
        <Form.Control
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      :''}
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          {type=='log_in'?'Login':'Sign Up'}
        </Button>
      </Form>
      <button onClick={()=>setType(type=='log_in'?'sign_up':'log_in')}>{type=='log_in'?'Or Create a new account':'Already have account? log in'}</button> */}
      
      {/* <form>
        <div class="form-group">
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
        </div> */}



        {/* ADDED K */}
        {log.logged ? (
        
        <h1>You are logged</h1>

      ) 
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

        {/* {log.logged ? (
        "User Logged in"
      ) : (
        <button
          type="submit"
          class="btn btn-success btn-lg"
          onClick={(e) => {
            addUser(e);
          }}
          onClick={() => {
            log.setLogged(true);
          }}
        >Login
          <Link
            style={{ color: "white" }}
            to="./home"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Login
          </Link>
        </button>
      )} */}
 {/* ADDED K END*/}

        {/* <button type="submit" class="btn btn-primary" onClick={(e) => {
              addUser(e);
            }}>
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Login;
