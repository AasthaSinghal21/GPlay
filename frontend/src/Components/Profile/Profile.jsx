import "./Profile.css";
import { LineChart } from '@mui/x-charts/LineChart';
import avatar from "../Assests/avatar.jpg";
import { MdEdit } from "react-icons/md";
import Navbar from '../Navbar/Navbar';
import BottomNav from '../BottomNav/BottomNav';

const uData = [10,12,8,9,15];
const pData = [5,2,3,1,4];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
];
const Profile=()=>{

    return(
        <>
        <Navbar/>
        <div className="profilepage">
            <div className="profilenamesection">
                <span className="player_id">numerator07</span>
                <span className="editIcon"><MdEdit /></span>
                <div className="profilepic">
                    <img src={avatar}/>
                </div>
            </div>
            <div className="graph">
            <LineChart
      width={350}
      height={230}
      series={[
        { data: uData, label: 'Cricket',color:"orange" },
        { data: pData, label: 'Badminton',color:"red" }
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
      </div>
            <div className="upcominggames">
                <p>Upcoming games details</p>
                
            </div>
            <div className="prevgames">
                <p>Details of Games Payed So Far</p>
                
            </div>
        </div>
        <BottomNav/>
        </>
    )

}
export default Profile;