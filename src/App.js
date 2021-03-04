import React from "react";
import {Link, Route} from "react-router-dom"
import Characters from "./component/Character/Characters";
import Episodes from "./component/Episodes/Episodes";
import Locations from "./component/Location/Locations";
import "./style.css"


const App=()=> {
  return(
    <div>
      <button><Link to="/location">See all Location</Link></button>
      <button><Link to="/characters">See all Characters</Link></button>
      <button><Link to="/episides">See all Episides</Link></button>


      <Route exact path="/location" component={()=>(<Locations/>)}/>
      <Route exact path="/characters" component={()=>(<Characters/>)}/>
      <Route exact path="/episides" component={()=>(<Episodes/>)}/>


    </div>
  )
}

export default App;
