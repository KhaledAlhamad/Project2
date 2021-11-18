import React from "react";
import { Link } from "react-router-dom";
import SNK from "../SNK.jpg";
import KNY from "../KNY.jpg";


function Home(props) {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={SNK} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={KNY} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="trending__product">
                <div className="row">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                      <div class="section-title">
                        <h4>Upcoming</h4>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="btn__all">
                        <a class="primary-btn">
                          <Link to="/Upcoming" className="view-all">
                            View All <span class="arrow_right"></span>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>

                  {props?.upcoming?.slice(0, 6).map((e, i) => {
                    return (
                      <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="product__item">
                          <div
                            class="product__item__pic set-bg"
                            style={{
                              backgroundImage: "url(" + e.image_url + ")",
                            }}
                          >
                            {e?.episodes ? (
                              <div class="ep">{e.episodes}</div>
                            ) : (
                              ""
                            )}
                            {/* <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div> */}
                            {e.score > 0 ? (
                              <i class="fa fa-eye">{e?.score}/10</i>
                            ) : (
                              ""
                            )}
                          </div>
                          <div class="product__item__text">
                            {/* <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul> */}
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
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Trending Now</h4>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="btn__all">
                        <a class="primary-btn">
                          <Link to="/Trending" className="view-all">
                            View All <span class="arrow_right"></span>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>
                  {props?.airing?.slice(0, 6).map((e, i) => {
                    return (
                      <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="product__item">
                          <div
                            class="product__item__pic set-bg"
                            style={{
                              backgroundImage: "url(" + e.image_url + ")",
                            }}
                          >
                            {e?.episodes ? (
                              <div class="ep">{e.episodes}</div>
                            ) : (
                              ""
                            )}
                            {/* <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div> */}
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

                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                      <div class="section-title">
                        <h4>Top</h4>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="btn__all">
                        <a class="primary-btn">
                          <Link to="/Top" className="view-all">
                            View All <span class="arrow_right"></span>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>

                  {props?.top?.slice(0, 6).map((e, i) => {
                    return (
                      <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="product__item">
                          <div
                            class="product__item__pic set-bg"
                            style={{
                              backgroundImage: "url(" + e.image_url + ")",
                            }}
                          >
                            {e?.episodes ? (
                              <div class="ep">{e.episodes}</div>
                            ) : (
                              ""
                            )}
                            {/* <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div> */}
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
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                      <div class="section-title">
                        <h4>Season</h4>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="btn__all">
                        <a class="primary-btn">
                          <Link to="/Season" className="view-all">
                            View All <span class="arrow_right"></span>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>

                  {props?.season?.slice(0, 6).map((e, i) => {
                    console.log(e.title);
                    return (
                      <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="product__item">
                          <div
                            class="product__item__pic set-bg"
                            style={{
                              backgroundImage: "url(" + e.image_url + ")",
                            }}
                          >
                            {e?.episodes ? (
                              <div class="ep">{e.episodes}</div>
                            ) : (
                              ""
                            )}
                            {/* <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div> */}
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
  );
}

export default Home;
