import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {

  const [userName,setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState('log_in');


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
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
      <button onClick={()=>setType(type=='log_in'?'sign_up':'log_in')}>{type=='log_in'?'Or Create a new account':'Already have account? log in'}</button>
    </div>
  );
}



export default Login;

