
import './App.css';
import axios from 'axios';
import React,{ useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LogContext } from "./components/LogContext";
import Signup from './components/Signup';


function App() {
  const [animes, setAnimes] = useState([])
  const [anime, setAnime] = useState([])
  //ADDED K
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v3/top/anime/1/airing').then((res) =>{
      res.data.top.length>13?setAnimes(res.data.top.slice(0,12)):
      res.data.top.length>7?setAnimes(res.data.top.slice(0,6)):
      res.data.top.length==1?setAnimes(res.data.top):
      setAnimes([])
      console.log(res.data.top)
    })
    axios.get('https://api.jikan.moe/v3/anime/1').then((res) =>{
      setAnime(res.data)
      console.log(res.data.top)
    })
    
  }, [])
  /*
  axios.get("http://localhost:8080/anime/top").then((res) => {
      setAnime(res.data.top);
      // console.log(res.data.top)
      // console.log(anime[0].title)
    });
  }, []);
  const getInfo = (e) => {
    axios.get(`http://localhost:8080/anime/${e}`).then((res) => {
      setDetails(res.data.top);
      console.log(details);
    });
  }*/

  // const top = anime.slice(1, 6);
  return (
    <LogContext.Provider value={{ logged, setLogged }}>
      
    <Router>
      <div className="App">
      <Navbar />
      <Sidebar />
        <header className="App-header">
        <Route exact path="/">
          <Home names={animes} />
        </Route>
        <Route path="/Home">
          <Home names={animes} />
        </Route>
        <Route path="/Details">
          <Details name={anime} />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        </header>
      </div>
    </Router>
    </ LogContext.Provider>
  );
}

export default App;
