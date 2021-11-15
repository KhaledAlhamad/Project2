import './App.css';
import axios from 'axios';
import React,{ useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes , Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LogContext } from "./components/LogContext";
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  const [airing, setAiring] = useState([])
  const [anime, setAnime] = useState([])
  //ADDED K
  const [logged, setLogged] = useState(false);
  const [top, setTop] = useState([])

  // GET Airing
  useEffect(() => {
    axios.get('http://localhost:8080/anime/airing').then((res) =>{
      setAiring(res.data.top.slice(0,6));
      console.log(res.data.top)
    })
  }, [])
  // GET Top
  useEffect(() => {
    axios.get('http://localhost:8080/anime/top').then((res) =>{
      setTop(res.data.top.slice(0,6));
      console.log(res.data.top)
    })
  }, [])
  // const top = anime.slice(1, 6);
  return (
    <LogContext.Provider value={{ logged, setLogged }}>
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />
          <header className="App-header">
            <Routes>
            <Route exact path="/" element ={<Home airing={airing} top={top} />}>
            </Route>
            <Route exact path="/Home" element ={<Home airing={airing} top={top} />} >
            </Route>
            <Route exact path="/Details/:id" element ={<Details airing={airing} top={top} />} >
            </Route>
            <Route path="/Login" element={<Login/>}>
            </Route>
            <Route path="/signup" element={<Signup />}>
            </Route>
            <Route path="/profile" element={<Profile />}>
            </Route>
            </Routes>
          </header>
        </div>
      </Router>
    </LogContext.Provider>
  );
}
export default App;