import React, { useState, useEffect } from "react"
import axios from "axios"
import Character from "./Character"

const Characters = ()=>{
    const [state, setState]=useState([])
    const [pageNumber, setPageNumber]=useState(1)
    const [search, setSearch] = useState("")

    useEffect(()=>(
        axios({
            method: 'GET',
            url:`https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
        }).then(response =>  setState(prev => prev.concat(response.data.results)))
        ),[pageNumber]);
    
    useEffect(()=>(
        axios({
            method: 'GET',
            url:`https://rickandmortyapi.com/api/character/?page=${pageNumber}?name=${search}&status=${search}`,
            }).then(response =>  setState(response.data.results))
    ),[search]);
   
    function handleScroll (e) {
        e.preventDefault()
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setPageNumber((prev)=>prev+1)
        }
    }
  return (
    <div>
        <div className="list_of_chacracter" className="scrollable" onScroll={(e)=>handleScroll(e)}>
        <div className="title_list">List of characters</div>
            <form action="" className="form">
                <p>Search:</p>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        {
            state.map(item=>{
                return(
                    <Character
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        origin_name={item.origin.name}
                        location={item.location.name}
                    />
                )
            })
        }
        </div>
    </div>
  );
}

export default Characters