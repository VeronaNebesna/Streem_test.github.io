import React, { useState } from "react"

const Character = ({
    id,
    name,
    image,
    status,
    species,
    gender, 
    origin_name, 
    location,
    }) =>{
    const [info, setInfo] = useState(false);
    function seeMoreInfo (){
        setInfo(prev => !prev)
    }
    return (
        <div key={id} className="character_list_item" >
            <div className="character_img">
            <p> {name}</p>
            <div className="images">
                <img  onClick={()=>seeMoreInfo()} src={image} alt=""/>
            </div>
            </div>
            {
                info && 
                <div className="more_info">
                    <div><b>Name: </b>{name}</div>
                    <div><b>Status:</b> {status}</div>
                    <div><b>Species:</b> {species}</div>
                    <div><b>Gender: </b>{gender}</div>
                    <div><b>Origin name:</b> {origin_name}</div>
                    <div><b>Location:</b> {location}</div>
                </div>
            }
        </div>
    )
}


export default Character