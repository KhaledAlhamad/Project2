import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addVideo, clearVideo } from "../reducers/video/video";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {useParams} from "react-router-dom"

function Details(props) {
  const {id} = useParams();

const [detail, setDetail] = useState()

console.log(id)
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then((res) =>{
      // console.log(id)
      setDetail(res.data);
      console.log(res)

    })
  }, [])

  const addWatch = (e) => {
console.log("button " + e)
  }

  // https://api.jikan.moe/v3/anime/${id}

  return (
      <div>
        <div>
        <div id="details_root">
          <div className="image_and_title">
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
              Type: <span>{props.name.type}</span>
            </li>
            <li>Studios:{anime.studios[0].name}</li>
            <li>
              Date aired: <span>{props.name.type}</span>
            </li>
            <li>
              Status: <span>{props.name.status}</span>
            </li>
            <li>Genre:{anime.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li>
            <li>
              Score:{" "}
              <span>
                {props.name.score}/{props.name.scored_by}
              </span>
            </li>
            <li>
              Rating: <span>{props.name.rating}</span>
            </li>
            <li>
              Duration: <span>{props.name.duration}</span>
            </li>
            <li>
              Quality: <span>{props.name.type}</span>
            </li>
            <li>
              Views: <span>{props.name.type}</span>
            </li>
          </ul>
        </div> */}
      </div>
  );
}

export default Details;


