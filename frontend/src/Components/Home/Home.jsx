import Games from "./Games";
import "./Home.css";
import swimming from "../Assests/badminton1.jpeg";
import badminton from "../Assests/badminton2.avif"
import VenuesNear from "./VenuesNear";
import cric1 from "../Assests/stadium1.webp";
import cric2 from "../Assests/stadium2.webp";

const Home=()=>{
return(
<>
<div className="createGame">Create a new game <span className="direction_arrow">{">"}</span></div>
<h3 class="homeheader">Venues Near You   {">"}</h3>
<div class="venuesnear">
<VenuesNear image={cric1} groundName="Khaitan Complex" location="Rajender Nagar" time="9am-5pm" />
<VenuesNear image={cric2} groundName="Khaitan Complex" location="Rajender Nagar" time="9am-11pm"/>
</div>
<h3 class="homeheader">Games Near You    {">"}</h3>
<div class="game_flex">
<Games image={swimming} groundName="Khaitan Complex" location="Rajender Nagar" requirement="4" datetime="10th April" />
<Games image={swimming} groundName="Khaitan Complex" location="Rajender Nagar" requirement="4" datetime="10th April" />
<Games image={badminton} groundName="Khaitan Complex" location="Rajender Nagar" requirement="4" datetime="10th April" />
<Games image={badminton} groundName="Khaitan Complex" location="Rajender Nagar" requirement="4" datetime="10th April" />
</div>
</>)
}
export default Home;