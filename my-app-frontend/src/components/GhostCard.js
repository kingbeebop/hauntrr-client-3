// import { Card, Image } from "semantic-ui-react";

function GhostCard({ ghost, onClick, onDelete }){

    console.log(ghost)

    function handleDelete(){
        onDelete(ghost)
    }

    function handleClick(){
        onClick(ghost)
    }

    return(
        // <Card>
        //     <Image src={ghost.picUrl} wrapped ui={false} />
        //     <Card.Content>
        //         <Card.Header>{ghost.name}</Card.Header>
        //     </Card.Content>
        // </Card>
        <div onClick={handleClick}>
            <button onClick={handleDelete}>X</button>
            <span>{ghost.name}</span>
            <img src={ghost.picUrl}/>
        </div>
    )
}

export default GhostCard