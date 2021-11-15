import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { addVideo, clearVideo } from "../reducers/video/video";
import { Link } from "react-router-dom";
import axios from 'axios';

function Details() {
  const state = useSelector((state) => {
    return { details: state.details.details };
  });
  const [anime,setAnime] = useState()

const [detail, setDetail] = useState()

console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:8080/anime/${state.details}`).then((res) => {
      setAnime(res.data);
      console.log("resres",res.data);
    }).catch((err) => {
      console.log("err",err);
    });
  }, []);
  return (
      <div>
        <div>
        <div id="details_root">
          <div id="image_and_title">
          <div>
          <h2 className="details_title">{detail?.title}</h2>
          <p className="details_title_alt">{detail?.title_japanese}</p>
          <p className="details_description">{detail?.synopsis}</p>
          <h6 className="details_score">{detail?.score}</h6>
          <h6 className="details_scored_by">{detail?.scored_by}</h6>
          </div>
          <div>
            <img src={detail?.image_url}/>
          </div>
          </div>
          <ul className="details_ul">
            <li>
              Type: <span>{detail?.type}</span>
            </li>
            {/* <li>Studios:{detail.studios[0].name}</li> */}
            <li>
              Date aired: <span>{detail?.type}</span>
            </li>
            <li>
              Status: <span>{detail?.status}</span>
            </li>
            {/* <li>Genre:{detail.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li> */}
            <li>
              Score:{" "}
              <span>
                {detail?.score}/{detail?.scored_by}
              </span>
            </li>
            <li>
              Rating: <span>{detail?.rating}</span>
            </li>
            <li>
              Duration: <span>{detail?.duration}</span>
            </li>
            <li>
              Genre: <span>{detail?.genres.length>0?detail.genres.reduce((accomulator,current)=> " "+current?.name):""}</span>
            </li>
            <li>
              Views: <span>{detail?.members}</span>
            </li>
          </ul>
          <button onClick={addWatch(detail)}>Add to Watch </button>
        </div>
      </div>

        {/* <div id="details_root">
          <h2 className="details_title">{props.name.title}</h2>
          <p className="details_title_alt">{props.name.title_japanese}</p>
          <p className="details_description">{props.name.synopsis}</p>
          <h6 className="details_score">{props.name.score}</h6>
          <h6 className="details_scored_by">{props.name.scored_by}</h6>
          <ul className="details_ul">
            <li>
              Type: <span>{anime?.type}</span>
            </li>
            <li>Studios:{anime.studios[0].name}</li>
            <li>
              Date aired: <span>{anime?.type}</span>
            </li>
            <li>
              Status: <span>{anime?.status}</span>
            </li>
            <li>Genre:{anime.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li>
            <li>
              Score:{" "}
              <span>
                {anime?.score}/{anime?.scored_by}
              </span>
            </li>
            <li>
              Rating: <span>{anime?.rating}</span>
            </li>
            <li>
              Duration: <span>{anime?.duration}</span>
            </li>
            <li>
              Quality: <span>{anime?.type}</span>
            </li>
            <li>
              Views: <span>{anime?.type}</span>
            </li>
          </ul>
        </div> */}
      </div>
  );
}

export default Details;


