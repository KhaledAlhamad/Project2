import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/anime/upcoming").then((res) => {
      setAnime(res.data.top);
      // console.log(res.data.top)
      // console.log(anime[0].title)
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/manga").then((res) => {
      setManga(res.data.characters);
      console.log(res.data.characters);
      // console.log(anime[0].title)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {anime.map((e) => {

          return (<div>
            <img src={e.image_url} alt="none" /> 
          </div>)
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
