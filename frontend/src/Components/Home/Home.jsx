import Games from "./Games";
import "./Home.css";
import swimming from "../Assests/badminton1.jpeg";
import badminton from "../Assests/badminton2.avif"
import VenuesNear from "./VenuesNear";
import cric1 from "../Assests/img3.jpg";
import cric2 from "../Assests/img1.jpg";


const Home=()=>{
return(
<>
<div className="createGame"><b>CREATE GAME</b></div>
<h3 class="homeheader">Venues Near You</h3>
<div class="venuesnear">
<VenuesNear image={cric1} groundName="Crickage Cricket Ground" location="Paarag Vihar, Press Colony, Mayapuri" rating="4.2" cost="₹ 1,200 onwards"/>
<VenuesNear image={cric2} groundName="Dugout Cricket Ground" location="Rajender Nagar" rating="4.1" cost="₹ 900 onwards"/>
</div>
<button className="view">View More</button>
<h3 class="homeheader">Games Near You</h3>
<div class="game_flex">
<Games image={swimming} gameName="Swimathon" location="Rajender Nagar" requirement="1" datetime="10th April-12th April" />
<Games image={badminton} gameName="Doubles Tournament" location="Sports Complex, CP" requirement="2" datetime="13th April-15th April" />
</div>
<button className="view">View More</button>
</>)
}
export default Home;