import { useState, useEffect } from 'react'
import HouseCard from './HouseCard'

function GhostPage( { ghost, houses, onExit, resetGhost }){

    //issues:
    //doesn't rerender on ghost being updated
    //doesn't get ghost data properly

    const [hauntings, setHauntings] = useState([])

    // let content = <div>Select ghost:</div>

    let content = getContent()

    useEffect(()=>{
        console.log(ghost.houses)
        setHauntings(ghost.houses)
    },[])

    // useEffect(()=>{
    //     fetch("http://localhost:9292/hauntings")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         renderHauntings(data)
    //     })
    // },[])

    // function renderHauntings(data){
    //     setHauntings(houses.filter(house=>{
    //         if(data.house_id===house.id && data.ghost_id===ghost.id){
    //             return true
    //         }
    //         else{
    //             return false
    //         }
    //     }))
    // }
    
    function getContent() {
        if(ghost){
        return (<div>
        <button onClick={onExit}>Exit</button>
        <div>
            <h1>Current Hauntings</h1>
            {ghost.houses.map(house=><HouseCard key={house.id} house={house} onClick={removeHaunting}/>)}
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
        fetch("http://localhost:9292/haunting",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({ghost_id: ghost.id, house_id: house.id})
        })
        .then(res=>res.json())
        .then(data=>setHauntings({...hauntings, data})
        )
    }

    function removeHaunting(haunting){
        fetch(`http://localhost:9292/hauntings/${haunting.id}`,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        }).then(res=>res.json())
        .then(data=> setHauntings(ghost.houses.filter(haunting=>{
            if(haunting.id === data.id){
                return false
            } else {
                return true
            }
        }))
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