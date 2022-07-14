import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import GhostCard from './components/GhostCard'
import GhostPage from './components/GhostPage'

function App() {

  const [houses, setHouses] = useState([])
  const [ghosts, setGhosts] = useState([])
  const [currentGhost, setCurrentGhost] = useState(false)

  // let hauntingDisplay = <div>Select a ghost:</div>

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



  // useEffect(()=>{
  //   console.log("triggered")
  //   console.log(currentGhost)
  //   if(currentGhost){
  //     console.log("working")
  //     hauntingDisplay = <GhostPage ghost={currentGhost} houses={houses} onExit={handleExitHaunting}/>
  //   }else{
  //     hauntingDisplay = <div>Select a ghost:</div>
  //   }
  // },[currentGhost])

  // function reloadGhosts(){
  //   fetch("http://localhost:9292/ghosts")
  //   .then(res=>res.json())
  //   .then(data=>setGhosts(data))
  // }


  function handleDeleteGhost(ghost){
    fetch(`http://localhost:9292/ghosts/${ghost.id}`,{
      method: "DELETE",
      headers: {"ContentType":'applicaton/json'}
    })
    .then(setGhosts(ghosts.filter(temp=>!(ghost.id===temp.id))))
  }

  function handleClickGhost(ghost){
    setCurrentGhost(ghost)
  }

  function exitHauntings(){
    setCurrentGhost(false)
  }


  function resetGhost(ghost){
    setCurrentGhost(ghost)
  }


  return (
    <div>
      <div id='hauntings'>
        <GhostPage ghost={currentGhost}
        houses={houses}
        onExit={exitHauntings}
        resetGhost={resetGhost}/>
        </div>
      {ghosts.map(ghost => {
        return(<GhostCard key={ghost.id}
        ghost = {ghost}
        onSelect = {handleClickGhost}
        onDelete = {handleDeleteGhost}/>)
      })}
    </div>
  );
}

export default App;
