import './squarereports.css';
import { PiTimerFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { TbArrowsSplit2 } from "react-icons/tb";
import { IoPinOutline } from "react-icons/io5";
import { DiGithubBadge } from "react-icons/di";
import { RxGlobe } from "react-icons/rx";



const Squarereports = () => {
  const location = useLocation();
  const name = location.state.name;
  const id = location.state.id;
  // console.log(name,id)
  return (
    <div style={{ marginTop: '3%' }}>
      <div className="squarereports">
        <div style={{ flex: 1 }}>
          <span style={{ marginLeft: '5%' }}>
            <PiTimerFill size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>Duration: 3m</span>
          <span style={{ marginLeft: '15%' }}>
            <FaRegCalendar size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>Finished 10 minutes ago</span>
        </div>
      </div>
      <div className="squarereports">
        <div style={{ flex: 1, marginTop: '-1%' }}>
          <span style={{ marginLeft: '5%' }}>
            <LuBox size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#5e35b1', marginLeft: '2%' }}>build-and-deploy (12332) </span>
        </div>
      </div>
      <div className="squarereports">
        <div style={{ flex: 1, marginTop: '-2%' }}>
          <span style={{ marginLeft: '5%' }}>
            <TbArrowsSplit2 size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>master</span>
          <span style={{ marginLeft: '1%' }}>
            <IoPinOutline size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>a3df3ac6</span>
          <span style={{ marginLeft: '5%' }}>
            <DiGithubBadge size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>mgiamberardino</span>
        </div>
      </div>
      <div className="squarereports">
        <div style={{ flex: 1, marginTop: '-3%' }}>
          <span style={{ marginLeft: '5%' }}>
            <RxGlobe size={15} color={'#90a4ae'} />
          </span>
          <span style={{ fontSize: '10px', color: '#90a4ae', marginLeft: '2%' }}>https://app-staging.levo.ai/api</span>
        </div>
      </div>
    </div>
  )
};

export default Squarereports;