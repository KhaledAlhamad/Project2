import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addVideo, clearVideo } from "../reducers/video/video";
import { Link } from "react-router-dom";

function Details(props) {
  return (
      <div>
        <div id="details_root">
          <h2 className="details_title">{props.name.title}</h2>
          <p className="details_title_alt">{props.name.title_japanese}</p>
          <p className="details_description">{props.name.synopsis}</p>
          <h6 className="details_score">{props.name.score}</h6>
          <h6 className="details_scored_by">{props.name.scored_by}</h6>
          <ul className="details_ul">
            <li>
              Type: <span>{props.name.type}</span>
            </li>
            {/* <li>Studios:{anime.studios[0].name}</li> */}
            <li>
              Date aired: <span>{props.name.type}</span>
            </li>
            <li>
              Status: <span>{props.name.status}</span>
            </li>
            {/* <li>Genre:{anime.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li> */}
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
        </div>
      </div>
  );
}

export default Details;



/* router.get("/upcoming", (req,res) => {
    fs.readFile('./db/upcoming.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})
router.get("/airing", (req,res) => {
    fs.readFile('./db/airing.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})
router.get("/tv", (req,res) => {
    fs.readFile('./db/tv.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})
router.get("/movie", (req,res) => {
    fs.readFile('./db/movie.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
})
router.get("/ova", (req,res) => {
    fs.readFile('./db/ova.json', 'utf8' , (err,data) => {
        res.send(data);
    })
    console.log("GET from anime route")
}) */