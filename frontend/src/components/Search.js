import React, { useEffect, useState, useContext } from "react";
// import { addVideo, clearVideo } from "../reducers/video/video";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addWatch } from "../reducers/watch/watch";
import { LogContext } from "./LogContext";

function Search() {
  const [results, setResults] = useState([]);
  const state = useSelector((state) => {
    return { search: state.search.search };
  });
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${state.search}&page=1`)
      .then((res) => {
        setResults(res.data.results);
        console.log("search result data", res.data.results);
      });
  }, [state.search]);

  return (
    <div  id="search_page">
      <div >
        {results?.map((e, i) => {
          return (
            <div class="col-lg-4">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url(" + e.image_url + ")",
                  }}
                >
                  {e.end_date===null?
                  <div class="ep">Ongoing</div>:
                  <div class="ep2">Finished</div>}
                  
                  <div class="comment">
                    <i class="fa fa-comments"></i> {e.episodes>0?e.episodes+" episodes":"episodes unknown"}
                  </div>
                  <div class="view">
                    <i class="fa fa-eye"></i> {e.score+" / 10"}
                  </div>
                </div>
                <div class="product__item__text">
                  <h5>
                      <Link to={`/Details/${e.mal_id}`}>{e.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
