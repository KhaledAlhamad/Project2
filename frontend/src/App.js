import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [anime, setAnime] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/anime/upcoming').then((res) =>{
      setAnime(res.data.top)
      console.log(res.data.top)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
