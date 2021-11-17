import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { clearUser } from "../reducers/user/user";
import { useState } from "react";
import axios from "axios";

function Profile() {
  const [watch, setWatch] = useState([]);
  // const [show, setShow] = useState(false);
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });
  const dispatch = useDispatch();

  let clear = () => {
    dispatch(clearUser(state.user));
    log.setLogged(false);
  };
  let removeItem = (num) => {
    console.log("removeitem", num.mal_id);
    console.log("email",state.user.email);
    const u = state.user.email;
    axios
      .delete(`http://localhost:8080/user/watch`, {data:{
        email: state.user.email,
        id: num.mal_id
      }})
      .then((res) => {
        console.log("deleted data",res.data);
        setWatch(res.data)
      });
  };

  //   return (
  //     <div>
  //       {log.logged ? (
  //         <div>
  //           <h1>Email: {state.user.email}</h1>
  //           <Link to="./login">
  //             <button
  //   let clear = () =>{
  //       dispatch(clearUser(state.user))
  //       log.setLogged(false)
  //   }

  console.log(state.user);

  useEffect(() => {
    
  //   setShow(!show)
  //   console.log(state.user.email);
  //   const u = state.user.email;
    axios
      .get(`http://localhost:8080/user/watch?email=${state.user.email}`)
      .then((res) => {
        console.log(res.data);
        // dispatch(addWatch(res.data))
        setWatch(res.data);
        //console.log('res dot dot data',res.data)
      });
  }, [watch])

  // const getWatch = () => {
    
  //   setShow(!show)
  //   console.log(state.user.email);
  //   const u = state.user.email;
  //   axios
  //     .get(`http://localhost:8080/user/watch?email=${state.user.email}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       // dispatch(addWatch(res.data))
  //       setWatch(res.data);
  //       //console.log('res dot dot data',res.data)
  //     });
  // };
  return (
    <div>
      {log.logged ? (
        <div>
          <h1>@ {state.user.email}</h1>
          
          <section className="product spad">
            <div class="container">
              <div class="row">
                <div class="col-lg">
                  <div className="trending__product">
                    <div className="row">
                      <div class="row">
                        <div class="col-lg col-md-8 col-sm-8">
                          <div class="section-title">
                            <h4>Your Watchlist:</h4>
                          </div>
                        </div>
                      </div>
                      {watch?.map((e) => {
                        return (
                          <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="product__item">
                              <div
                                class="product__item__pic set-bg"
                                style={{
                                  backgroundImage: "url(" + e.image_url + ")",
                                }}
                              >
                                <button
                                  onClick={() => {
                                    removeItem(e);
                                  }}
                                  class="btn btn-danger"
                                >
                                  X
                                </button>
                                <div class="comment"></div>
                              </div>
                              <div class="product__item__text">
                                <h5>
                                  <a>
                                    <Link to={`../Details/${e.mal_id}`}>
                                      {e.title}
                                    </Link>{" "}
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
          <Link to="../login">
            <button
              type="submit"
              class="btn btn-danger btn-lg"
              onClick={() => clear()}
            >
              Log out
            </button>
          </Link>
        </div>
      ) : (
        <h1>You're logged out</h1>
      )}
    </div>
  );
}

export default Profile;
