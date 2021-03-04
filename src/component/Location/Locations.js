import React, { useState, useEffect } from "react"
import Location from "./Location"
import axios from "axios"


const Locations = ()=>{
    const [state, setState]=useState([])
    const [pageNumber, setPageNumber]=useState(1)
    const [search, setSearch] = useState("");

    useEffect(()=>(
        axios({
            method: 'GET',
            url:`https://rickandmortyapi.com/api/location/?page=${pageNumber}`,
        }).then(response =>  setState(prev => prev.concat(response.data.results)))
        ),[pageNumber]);
    
        useEffect(()=>(
            axios({
                method: 'GET',
                url:`https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`,
                }).then(response => setState(response.data.results))
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
            <div className="title_list">List of locations</div>
                <form action="" className="form">
                    <p>Search:</p>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </form>
            {
                state.map(item=>{
                    return(
                         <Location
                            id={item.id}
                            name={item.name}
                            type={item.type}                    
                            dimension={item.dimension}
                            residents={item.residents}
                    />
                    )
                   
                })
            }
            </div>
        </div>
      );
}

export default Locations