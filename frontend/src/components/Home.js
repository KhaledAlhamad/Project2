import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setID } from "../reducers/details/details";
import SNK from '../SNK.jpg'

function Home(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { details: state.details.details };
  });
  return (
    // HERO SECTION

    // <div id="parent"><div id="parent">
    <div>
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div class="loader"></div>
      </div> */}

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={SNK} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Trending Now</h4>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <a class="primary-btn">
                        View All <span class="arrow_right"></span>
                      </a>
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
