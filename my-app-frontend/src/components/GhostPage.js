import { useState, useEffect } from 'react'
import HouseCard from './HouseCard'

function GhostPage( { ghost, houses }){

    const [hauntings, setHauntings] = useState([])

    useEffect(()=>{
        setHauntings(ghost.houses)
    },[])

    function addHaunting(house){
        fetch("http://localhost:9292/hauntings",{
            method: "POST",
            headers: {"ContentType":"application/json"},
            body: {"ghost_id":ghost.id, "house_id":house.id}
        }).then(res=>res.json())
        .then()
    }

    function removeHaunting(haunting){
        fetch(`http://localhost:9292/hauntings/${haunting.id}`,{
            method: "DELETE",
            headers: {"ContentType":"application/json"}
        }).then(res=>res.json())
        .then()
    }

    return(
        <div>
            <div>
                <h1>Current Hauntings</h1>
                {hauntings.map(house=><HouseCard house={house} onClick={removeHaunting}/>)}
            </div>
            <div>
                <h1>Available Houses</h1>
                {houses.map(house=><HouseCard house={house} onClick={addHaunting}/>)}
            </div>
        </div>
    )
}

export default GhostPage