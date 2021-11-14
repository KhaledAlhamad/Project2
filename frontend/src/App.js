import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [anime, setAnime] = useState([]);
  // const [manga, setManga] = useState([]);
  const [details, setDetails] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:8080/anime/upcoming").then((res) => {
  //     setAnime(res.data.top);
  //     // console.log(res.data.top)
  //     // console.log(anime[0].title)
  //   });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/anime/top").then((res) => {
      setAnime(res.data.top);
      // console.log(res.data.top)
      // console.log(anime[0].title)
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/manga").then((res) => {
  //     setManga(res.data.characters);
  //     console.log(res.data.characters);
  //     // console.log(anime[0].title)
  //   });
  // }, []);

  const getInfo = (e) => {
    axios.get(`http://localhost:8080/anime/${e}`).then((res) => {
      setDetails(res.data.top);
      console.log(details);
    });
  }

  const top = anime.slice(1, 6);
  return (
    <div className="App">
      <header className="App-header">
        {top.map((e) => {
          return (
            <div>
              <img src={e.image_url} alt="none" />
              <button onClick={getInfo(e.id)}></button>
              <h4>{e.title}</h4>
            </div>
          );
        })}

        {/* {manga.map((e) => {
          return (
            <div>
              <img src={e.image_url} alt="none" />
            </div>
          );
        })} */}
      </header>
    </div>
  );
}

export default App;
