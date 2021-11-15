import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  return (

    // HERO SECTION

    // <div id="parent">
    <section className="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div className="row">
          {props.names.map((e, i) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                  <div
                          class="product__item__pic set-bg"
                          style={{backgroundImage: "url(" + e.image_url + ")"}}
                        >
                        
                          <div class="ep">18 / 18</div>
                          <div class="comment">
                            <i class="fa fa-comments"></i> 11
                          </div>
                          <div class="view">
                            <i class="fa fa-eye"></i> 9141
                          </div>
                        </div>
                  {/* <img src={e.image_url} /> */}
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
              // <div className={i==0 || i==6 || i==12 || i==18 || i==24?"item_left"
              // : i==3 || i==9 || i==15 || i==21 ?"item_right":"item"}>
              //   <h3>{e.title}</h3>
              //   <img src={e.image_url} />
              // </div>
            );
          })}
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
