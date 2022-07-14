
function GhostCard({ ghost }){

    console.log(ghost)

    return(
        <div>
            <span>{ghost.name}</span>
            <img src={ghost.picUrl}/>
        </div>
    )
}

export default GhostCard