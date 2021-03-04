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
            <div>
            <p>Name: {name}</p>
            <div className="images">
                <img  onClick={()=>seeMoreInfo()} src={image} alt=""/>
            </div>
            </div>
            {
                info && 
                <div className="more_info">
                    <div>Name: {name}</div>
                    <div>Status: {status}</div>
                    <div>Species: {species}</div>
                    <div>Gender: {gender}</div>
                    <div>Origin name: {origin_name}</div>
                    <div>Location: {location}</div>
                </div>
            }
        </div>
    )
}


export default Character