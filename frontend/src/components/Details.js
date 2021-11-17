import React, { useEffect, useState , useContext} from "react";
// import { addVideo, clearVideo } from "../reducers/video/video";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addWatch } from "../reducers/watch/watch";
import { LogContext } from "./LogContext";


function Details(props) {
  const { id } = useParams();
  const log = useContext(LogContext);
  const state = useSelector((state) => {
    return { user: state.user.user };
  });
  const dispatch = useDispatch();
  const [detail, setDetail] = useState([]);
  const [MALreviews, setMALreviews] = useState([]);
  const [newReview, setNewReview] = useState(false);
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:8080/anime/${id}`).then((res) => {
      // console.log(id)
      console.log("res data");
      setDetail(res.data);
      console.log(state.user);
    }).catch((err)=>{
      console.log('error at getting anime')
    })
    axios.get(`https://api.jikan.moe/v3/anime/${id}/reviews/1`).then((res) => {
      setMALreviews(
        res?.data?.reviews?.length > 5 ? res.data.reviews.slice(0, 4) : res.data.reviews
      );
      console.log("mal", MALreviews);
    });
  }, [newReview]);

  const addWatch = (e) => {
    console.log(e);
    axios
      .post("http://localhost:8080/user/watch", {
        details: e,
        email: state.user.email,
      })
      .then((res) => {
        console.log(res.data);
        // dispatch(addWatch(res.data))
      });
  };

  let createReview = (e) => {
    e.preventDefault();
    //ADDED
    // console.log(e.target.form[0].value);
    console.log(id);
    console.log(state.user.email);
    console.log(state.user.userName);
    console.log(e.target.form[0].value);
    axios
      .post("http://localhost:8080/anime/review", {
        id: id,
        obj: {
          email: state.user.email,
          content: e.target.form[0].value,
          username: state.user.userName,
          date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
          +" "+new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        },
      })
      .then((res) => {
        console.log(res.data);
        setNewReview(!newReview);
      });
  };

  // https://api.jikan.moe/v3/anime/${id}


  //if(!detail && !Array.isArray(detail)) return <div> Loading ...</div>;
  return (
    <div>
      <div>
        <div id="details_root">
          <div className="image_and_title">
            <div>
              <img src={detail[0]?.image_url} />
            </div>
            <div>
              <h2 className="details_title">{detail[0]?.title}</h2>
              <p className="details_title_alt">{detail[0]?.title_japanese}</p>
              <p className="details_description">{detail[0]?.synopsis}</p>
            </div>
          </div>
          <ul className="details_ul">
            <li>
              Type: <span>{detail[0]?.type}</span>
            </li>
            {/* <li>Studios:{detail.studios[0].name}</li> */}
            <li>
              Date aired: <span>{detail[0]?.aired?.from?.substring(0,10)}</span>
            </li>
            <li>
              Status: <span>{detail[0]?.status}</span>
            </li>
            {/* <li>Genre:{detail.genres.map((ee)=>{return(<p>{ee.name}</p>)})}</li> */}
            <li>
              Score:{" "}
              <span>
                {detail[0]?.score}/10  <span>from {detail[0]?.scored_by} users</span>
              </span>
            </li>
            <li>
              Rating: <span>{detail[0]?.rating}</span>
            </li>
            <li>
              Duration: <span>{detail[0]?.duration}</span>
            </li>
            <li>
              Genre:{" "}
              <span>
                {detail[0]?.genres?.map(g => g.name).join(", ")}
              </span>
            </li>
            <li>
              Views: <span>{detail[0]?.members}</span>
            </li>
          </ul>{log.logged?<button className="btn btn-success" onClick={() => addWatch(detail[0])}>Add to Watch </button>:<Link to="../login"></Link>}
          
        </div>
        <div className="reviews">
          {MALreviews.length == 0
            ? ""
            : MALreviews?.map((e) => {
                return (
                  <div className="review_mal">
                    <p>{e?.date?.slice(0, 10) + " " + e?.date?.slice(12)}</p>
                    <p>{e?.reviewer?.username}</p>
                    <h3>
                      {e?.content?.slice(0, 200) + "... "}
                      <a href={e.url} class="btn btn-outline-info">
                        View at MAL{" "}
                      </a>
                    </h3>
                  </div>
                );
              })}
          {detail[1] == ""
            ? ""
            : detail[1]?.reviews?.map((e) => {
                return (
                  <div className="review_local">
                    <p>{e?.date}</p>
                    <p>
                      {e?.username} {e?.email} {e?.likes}
                    </p>
                    <h3>{e?.content}</h3>
                  </div>
                );
              })}
              {!log.logged?"":
          <form className="review_form">
            <div class="form-group">
              <h1>Write a review</h1>
              <label for="exampleFormControlTextarea1"></label>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3" 
                  placeholder="Get opinionated"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              onClick={(e) => createReview(e)}
            >
              Post
            </button>
          </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Details;
