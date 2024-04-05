import "./VenuesNear.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const VenuesNear=(props)=>{
    return(
        <>
        <div className="venue_box">
            <img src={props.image} className="image_game"/>
            <h4>{props.groundName}</h4>
            <span class="venue_location"><LocationOnIcon className="game_icon"></LocationOnIcon>{props.location}</span>
            {/* <span class="venue_date"><AccessTimeFilledIcon className="game_icon"/>{props.time}</span> */}
            <button className="venue_button">View More Details</button>
        </div>
        </>
    )
}
export default VenuesNear;