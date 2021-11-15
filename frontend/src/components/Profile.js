import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogContext } from "./LogContext";
import { clearUser } from "../reducers/user/user";
import { addWatch, clearWatch } from "../reducers/watch/watch";

function Profile() {
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return {
      user: state.user.user,
      details: state.details.details,
      watch: state.watch.watch,
    };
  });
  const dispatch = useDispatch();

  let clear = () => {
    dispatch(clearUser(state.user));
    log.setLogged(false);
  };
  let removeItem = (num) => {};
  return (
    <div>
      {log.logged ? (
        <div>
          <h1>Email: {state.user.email}</h1>
          <Link to="./login">
            <button
              type="submit"
              class="btn btn-danger btn-lg"
              onClick={() => clear()}
            >
              Log out
            </button>
          </Link>

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
                      {state?.watch?.map((e, i) => {
                        return (
                          <div class="col-lg-2 col-md-6 col-sm-6 ">
                            <div class="product__item">
                              <div
                                class="product__item__pic set-bg"
                                style={{
                                  backgroundImage: "url(" + e.image_url + ")",
                                }}
                              >
                                <button
                                  onClick={(e) => {
                                    removeItem(e);
                                  }}
                                  class="ep"
                                >
                                  ×
                                </button>
                                <div class="comment"></div>
                              </div>
                              <div class="product__item__text">
                                <h5>
                                  <a>
                                    <Link to={`/Details/${e.mal_id}`}>
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
        </div>
      ) : (
        <h1>You're logged out</h1>
      )}
    </div>
  );
}

export default Profile;
