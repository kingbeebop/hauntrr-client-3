import { useState, useEffect } from 'react'
import HouseCard from './HouseCard'

function GhostPage( { ghost, houses, onExit, resetGhost }){

    //issues:
    //doesn't rerender on ghost being updated
    //doesn't get ghost data properly

    const [hauntings, setHauntings] = useState([])

    // let content = <div>Select ghost:</div>

    let content = getContent()
    
    function getContent() {
        console.log(ghost)
        if(ghost){
        return (<div>
        <button onClick={onExit}>Exit</button>
        <div>
            <h1>Current Hauntings</h1>
            {hauntings.map(house=><HouseCard house={house} onClick={removeHaunting}/>)}
        </div>
        <div>
            <h1>Available Houses</h1>
            {houses.map(house=><HouseCard key={house.id} house={house} onClick={addHaunting}/>)}
        </div>
    </div>)
    } else {
        return (<div>Select ghost:</div>)
    }}

    // useEffect(()=>{
    //     // console.log(ghost)
    //     // setHauntings(ghost.houses)
    //     updateContent()
    // },[])

    // useEffect(()=>{
    //     updateContent()
    // },[ghost])

    function addHaunting(house){
        fetch("http://localhost:9292/hauntings",{
            method: "POST",
            headers: {"ContentType":"application/json"},
            body: {"ghost_id":ghost.id, "house_id":house.id}
        }).then(res=>res.json())
        .then(
            fetch(`http://localhost:9292/ghosts/${ghost.id}`)
            .then(res=>res.json())
            .then(data=>resetGhost(data))
        )
    }

    function removeHaunting(haunting){
        fetch(`http://localhost:9292/hauntings/${haunting.id}`,{
            method: "DELETE",
            headers: {"ContentType":"application/json"}
        }).then(res=>res.json())
        .then(
            fetch(`http://localhost:9292/ghosts/${ghost.id}`)
            .then(res=>res.json())
            .then(data=>resetGhost(data))
        )
    }

    // function updateContent(){
    //     if(ghost){
    //         content = (<div>
    //         <button onClick={onExit}>Exit</button>
    //         <div>
    //             <h1>Current Hauntings</h1>
    //             {hauntings.map(house=><HouseCard house={house} onClick={removeHaunting}/>)}
    //         </div>
    //         <div>
    //             <h1>Available Houses</h1>
    //             {houses.map(house=><HouseCard key={house.id} house={house} onClick={addHaunting}/>)}
    //         </div>
    //     </div>)
    //     } else {
    //         content = (<div>Select ghost:</div>)
    //     }
    // }

    return(
        <div>{content}</div>
    )
}

export default GhostPage