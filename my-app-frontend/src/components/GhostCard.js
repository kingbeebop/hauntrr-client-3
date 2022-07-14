// import { Card, Image } from "semantic-ui-react";

function GhostCard({ ghost, onSelect, onDelete }){

    // console.log(ghost)

    function handleDelete(){
        onDelete(ghost)
    }

    function handleClick(){
        // console.log(ghost)
        onSelect(ghost)
    }

    return(
        // <Card>
        //     <Image src={ghost.picUrl} wrapped ui={false} />
        //     <Card.Content>
        //         <Card.Header>{ghost.name}</Card.Header>
        //     </Card.Content>
        // </Card>
        <div>
            <button onClick={handleDelete}>X</button>
            <span>{ghost.name}</span>
            <img src={ghost.picUrl}/>
            <button onClick={handleClick}>Select</button>
        </div>
    )
}

export default GhostCard