import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Details() {
  const state = useSelector((state) => {
    return { details: state.details.details };
  });
  const [anime,setAnime] = useState()
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/anime/${id}`).then((res) => {
      setAnime(res.data);
      console.log("resres",res.data);
    }).catch((err) => {
      console.log("err",err);
    });
  }, []);
  return (
      <div>
        <div id="details_root">
          <div className="image_and_title">
          <div>
          <h2 className="details_title">{anime?.title}</h2>
          <p className="details_title_alt">{anime?.title_japanese}</p>
          <p className="details_description">{anime?.synopsis}</p>
          <h6 className="details_score">{anime?.score}</h6>
          <h6 className="details_scored_by">{anime?.scored_by}</h6>
          </div>
          <div>
            <img src={anime?.image_url}/>
          </div>
          </div>
          <ul className="details_ul">
            <li>
              Type: <span>{anime?.type}</span>
            </li>
            {/* <li>Studios:{anime.studios[0].name}</li> */}
            <li>
              Date aired: <span>{anime?.type}</span>
            </li>
            <li>
              Status: <span>{anime?.status}</span>
            </li>
            {/* <li>Genre:{anime.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li> */}
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
              Genre: <span>{anime?.genres.length>0?anime.genres.reduce((accomulator,current)=> " "+current?.name):""}</span>
            </li>
            <li>
              Views: <span>{anime?.members}</span>
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