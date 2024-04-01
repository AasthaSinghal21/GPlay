import "./Profile.css";
import { LineChart } from '@mui/x-charts/LineChart';
const uData = [10,12,8,9,15];
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
        <div className="profilepage">
            <div className="profilenamesection">
                <div className="profilepic">

                </div>
            </div>
            <div className="graph">
            <LineChart
      width={400}
      height={250}
      series={[
        { data: uData, label: 'Games Played' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
      </div>
            <div className="upcominggames">
Upcoming games details
            </div>
            <div className="prevgames">
                Details of Games Payed So Far
            </div>
        </div>
        </>
    )

}
export default Profile;