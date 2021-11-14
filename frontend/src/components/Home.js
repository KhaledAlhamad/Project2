import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  return (
      <div id="parent">
        {props.names.map((e,i) => {
          return (
            <div className={i==0 || i==6 || i==12 || i==18 || i==24?"item_left"
            : i==3 || i==9 || i==15 || i==21 ?"item_right":"item"}>
              <h3>{e.title}</h3>
              <img src={e.image_url} />
            </div>
          );
        })}
      </div>
  );
}

export default Home;
