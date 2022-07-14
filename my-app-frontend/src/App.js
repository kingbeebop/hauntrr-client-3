import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import GhostCard from './components/GhostCard'

function App() {

  const [houses, setHouses] = useState([])
  const [ghosts, setGhosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/houses")
    .then(res=>res.json())
    .then(data=>setHouses(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:9292/ghosts")
    .then(res=>res.json())
    .then(data=>setGhosts(data))
  },[])



  return (
    <div>
      {ghosts.map(ghost => {
        return(<GhostCard key={ghost.id}
        ghost = {ghost} />)
      })}
    </div>
  );
}

export default App;
