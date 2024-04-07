import "./VenuesNear.css";
import {Link} from "react-router-dom"

const star = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
const loc = <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 -960 960 960" width="17"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
const arrow = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>

const VenuesNear=(props)=>{
  
    return(
        <>
        <div className="venue_box">
            <img src={props.image} className="image_game"/>
            <div className="firstline">
              <h4>{props.groundName}</h4>
              <p className="rating">{star}<b>{props.rating}</b></p>
            </div>
            <div className="location">
              {loc}  
              <p class="venue_location">{props.location}</p>
            </div>
            <div className="lastline">
              <span className="cost">{props.cost}</span>
              {/* <button className="venue_button">{arrow}</button> */}
              <Link className="venue_button" to="/details">{arrow}</Link>
            </div>
        </div>
        </>
    )
}
export default VenuesNear;