function HouseCard({ house, onClick }){


    function handleClick(){
        onClick(house)
    }

    return(
        // <Card>
        //     <Image src={ghost.picUrl} wrapped ui={false} />
        //     <Card.Content>
        //         <Card.Header>{ghost.name}</Card.Header>
        //     </Card.Content>
        // </Card>
        <div onClick={handleClick}>
            <span>{house.name}</span>
            <img src={house.picUrl}/>
            <span>{house.location}</span>
            <span>{house.description}</span>

        </div>
    )
}

export default HouseCard