import React from "react";
import {Link, Route} from "react-router-dom"
import Characters from "./component/Character/Characters";
import Episodes from "./component/Episodes/Episodes";
import Locations from "./component/Location/Locations";
import "./style.scss"


const App=()=> {
  return(
    <div>
		<div className="btns">
			<button className="characters_btn"><Link to="/characters">See all Characters</Link></button>
			<button  className="location_btn"><Link to="/location">See all Location</Link></button>
			<button className="episodes_btn"><Link to="/episides">See all Episides</Link></button>
		</div>
		<Route exact path="/location" component={()=>(<Locations/>)}/>
		<Route exact path="/characters" component={()=>(<Characters/>)}/>
		<Route exact path="/episides" component={()=>(<Episodes/>)}/>
    </div>
  )
}

export default App;
