import React, {useEffect, useState} from "react"
import axios from "axios"

const Resident = ({
    url
}) =>{
    const [state, setState]=useState([]);

    useEffect(()=>{
        axios({
            method: 'GET',
            url:url,
            }).then(response =>setState(response.data))
    });

    return(
        <div className="more_info">
            <div>
                <img src={state.image} alt=""/>
            </div>
            <div> <b>Name:</b> {state.name}</div>
            <div> <b>Species: </b>{state.species}</div>
            <div><b>Status:</b>  {state.status}</div>
            <div><b>Type:</b> {state.type}</div>
            <div><b>Gender:</b> {state.gender}</div>
        </div>
    )
}


export default Resident