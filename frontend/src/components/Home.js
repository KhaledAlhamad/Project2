import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setID } from "../reducers/details/details";

function Home(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { details: state.details.details };
  });
  return (
    // HERO SECTION

    // <div id="parent"><div id="parent">

    <section className="product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div className="trending__product">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>Trending Now</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                {props?.airing?.map((e, i) => {
                  return (
                    
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="product__item">
                        <div
                          class="product__item__pic set-bg"
                          style={{
                            backgroundImage: "url(" + e.image_url + ")",
                          }}
                        >
                          <div class="ep">{e.episodes}</div>
                          <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div>
                          <div class="view">
                            <i class="fa fa-eye"></i> {e.score}/10
                          </div>
                        </div>
                        <div class="product__item__text">
                          {/* <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul> */}
                          <h5>
                            <a>
                              <Link to="/details" onClick={()=>(dispatch(setID(e.mal_id)))}>{e.title}</Link>{" "}
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>Top</h4>
                  </div>
                </div>
              </div>
                {props?.top?.map((e, i) => {
                  return (
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="product__item">
                        <div
                          class="product__item__pic set-bg"
                          style={{
                            backgroundImage: "url(" + e.image_url + ")",
                          }}
                        >
                          <div class="ep">18 / 18</div>
                          <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div>
                          <div class="view">
                            <i class="fa fa-eye"></i> 9141
                          </div>
                        </div>
                        <div class="product__item__text">
                          <ul>
                            <li>Active</li>
                            <li>Movie</li>
                          </ul>
                          <h5>
                            <a href="#">{e.title}</a>
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
    // HERO SECTION END
  );
}

export default Home;
