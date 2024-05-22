import './square.css';
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation } from "react-router-dom";



const Square = () => {
    const location = useLocation();
    const name = location.state.name;
    const id = location.state.id;
    // console.log(name,id)
  return (
    <div className="square">
      <span style={{color:'black',fontSize:'25px',fontWeight:'bold',marginLeft:'10px'}}>Levo</span>
      <span style={{color:'black',marginTop:'30%',marginLeft:'-40%'}}>{location.state.name}</span>
      <span style={{display: 'inline-block',marginTop: '100px', height: '40px', width: '40px', marginLeft: '-60px', color: '#37474f', }}>
        <IoMdArrowDropright size={30} />
      </span>
      <text style={{marginTop:'105px',color:'#aa00ff',fontSize:'14px',fontFamily:'revert-layer'}}>Test Reports</text>
    </div>
    
  )
};

export default Square;