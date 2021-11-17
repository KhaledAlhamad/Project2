import React from "react";
import { Link } from "react-router-dom";


const Upcoming = (props) => {
  return (
    <div>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="Upcoming__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Upcoming Now</h4>
                    </div>
                  </div>

                  {/* <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <a class="primary-btn">
                        View All <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  {props?.upcoming?.map((e, i) => {
                    return (
                      <div class="col-lg-2 col-md-6 col-sm-6">
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
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Upcoming;