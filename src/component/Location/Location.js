import React, { useEffect, useState } from "react"
import { Link,Route } from "react-router-dom"
import Resident from "./Resident"

const Location = ({
    id,
    name,
    type,                  
    dimension,
    residents
}) =>{

    const [url, setUrl] = useState();
    const [show, setShow] = useState(false)

    function getPerson (e){
        e.preventDefault();
        setUrl(e.target.innerText);
        setShow(true)
    };

    return(
        <div className="list_of_location" key={id}>
            <div><b>Name:</b> {name}</div>
            <div><b>Type:</b> {type}</div>
            <div>{dimension}</div>
            <p> <b>List of residens: </b></p>
            <div className="residens">
                <ul>
                    {
                        residents.map(i =>{
                            return(<li><Link to="" onClick={(e)=> getPerson(e)}>{i}</Link></li>)
                        })
                    }
                </ul>
                <div className="residen">
                {
                    show && <Resident url={url}/>
                }
                </div>
            </div>
        </div>
    )
}

export default Location