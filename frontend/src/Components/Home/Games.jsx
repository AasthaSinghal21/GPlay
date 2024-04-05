import "./Games.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Games=(props)=>{
    return(
        <>
        <div className="game_box">
            <img src={props.image} className="image_game"/>
            <h4>{props.groundName}</h4>
            <span class="location"><LocationOnIcon className="game_icon"/>{props.location}</span>
            <span class="requirement"><PersonIcon className="game_icon"/>{props.requirement}</span>
            <br></br>
            <span class="date"><DateRangeIcon className="game_icon"/>{props.datetime}</span>
            <button className="join_button">Join</button>
        </div>
        </>
    )
}
export default Games;