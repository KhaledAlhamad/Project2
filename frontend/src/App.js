import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LogContext } from "./components/LogContext";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Trending from "./components/Trending";
import Top from "./components/Top";
import Season from "./components/Season";
import Action from "./components/Category/Action";
import Adventure from "./components/Category/Adventure";
import Comedy from "./components/Category/Comedy";
import Mystery from "./components/Category/Mystery";
import Upcoming from "./components/Upcoming";

function App() {
  const [airing, setAiring] = useState([]);
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([])
  const [season, setSeason] = useState([]);
  // const [anime, setAnime] = useState([])
  //ADDED K
  const [logged, setLogged] = useState(false);

  // GET Airing from backend (slow loading)
  // useEffect(() => {
  //   axios.get("http://localhost:8080/anime/airing").then((res) => {
  //     setAiring(res.data.top);
  //   });
  // }, []);

  // GET Upcoming
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming").then((res) => {
      setUpcoming(res.data.top);
    });
  }, []);
  

  // GET Airing
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime/1/airing").then((res) => {
      setAiring(res.data.top);
    });
  }, []);

  // GET Top from backend (slow loading)
  // useEffect(() => {
  //   axios.get("http://localhost:8080/anime/top").then((res) => {
  //     setTop(res.data.top);
  //   });
  // }, []);

 // GET Top
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime").then((res) => {
      setTop(res.data.top);
    });
  }, []);


  // GET Season from backend (slow loading)
  // useEffect(() => {
  //   axios.get("http://localhost:8080/anime/season").then((res) => {
  //     setSeason(res.data.anime);
  //     // console.log(season);
  //   });
  // }, []);

  // GET Season
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/season/2021/fall").then((res) => {
      setSeason(res.data.anime);
      console.log(season);
    });
  }, []);

  // axios.get("https://api.jikan.moe/v3/season/2021/fall",{
  //   params: {
  //     _limit: 10
  //    }
  // }).then((response) => {
  //   res.send(response.data);
  //   console.log(response.data)
  // });

  // <<<<<<< yasser
  // const top = anime.slice(1, 6);
  // =======

  // >>>>>>> main
  return (
    <LogContext.Provider value={{ logged, setLogged }}>
      <Router>
        <div className="App">
          <Navbar />
          {/* <Sidebar /> */}
          <header className="App-header">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home airing={airing} top={top} season={season} upcoming={upcoming}/>}
              ></Route>
              <Route
                exact
                path="/Home"
                element={<Home airing={airing} top={top} season={season} upcoming={upcoming} />}
              ></Route>
              <Route
                exact
                path="/Details/:id"
                element={<Details airing={airing} top={top} />}
              ></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/Search" element={<Search />}></Route>
              <Route path="/Trending" element={<Trending airing={airing} />}></Route>
              <Route path="/Top" element={<Top top={top} />}></Route>
              <Route path="/Upcoming" element={<Upcoming upcoming={upcoming} />}></Route>
              <Route path="/Season" element={<Season season={season} />}></Route>
              <Route path="/Action" element={<Action />}></Route>
              <Route path="/Adventure" element={<Adventure />}></Route>
              <Route path="/Comedy" element={<Comedy />}></Route>
              <Route path="/Mystery" element={<Mystery />}></Route>
            </Routes>
          </header>
        </div>
      </Router>
    </LogContext.Provider>
  );
}
export default App;
