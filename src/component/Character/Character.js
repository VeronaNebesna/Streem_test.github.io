import React from "react"

const Character = ({id,name, image}) =>{
    return (
        <div key={id} >
            <div>Name: {name}</div>
            {/* <div>Status: {item.status}</div> */}
            {/* <div>Species: {item.species}</div> */}
            <div className="images">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}


export default Character