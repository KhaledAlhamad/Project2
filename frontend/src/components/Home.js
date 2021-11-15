import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setID } from "../reducers/details/details";

function Home(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { details: state.details.details };
  });
  return (
      <div id="parent">
        {props.names.map((e,i) => {
          return (
            <Link key={i} to='/details' onClick={()=>(dispatch(setID(e.mal_id)))}>
            <div className={i==0 || i==6 || i==12 || i==18 || i==24?"item_left"
            : i==3 || i==9 || i==15 || i==21 ?"item_right":"item"}>
              <h3>{e.title}</h3>
              <img src={e.image_url} />
            </div></Link>
          );
        })}
      </div>
  );
}

export default Home;
