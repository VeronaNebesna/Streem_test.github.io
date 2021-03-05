import React, { useState } from "react"
import { Link } from "react-router-dom"
import Resident from "../Location/Resident"


const Episode = ({
    id,
    name,
    date,
    episode,
    characters
    }) =>{

    const [url, setUrl] = useState();
    const [show, setShow] = useState(false);

    function getPerson (e){
        e.preventDefault();
        setUrl(e.target.innerText);
        setShow(true)
    };

    return (
        <div key={id} className="episode_list_item">
                <div><b>Name of episode: </b> {name}</div>
                <div><b>Air date: </b>{date}</div>
                <div><b>Episode:</b> {episode}</div>
                <div className="characters">
                <ul>
                    {
                        characters.map(i => {
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


export default Episode