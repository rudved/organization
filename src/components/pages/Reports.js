import './square.css';
import Square from './square';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';



const Reports = () => {
  const [item, setItem] = useState([]);
  const [report, setAReport] = useState([]);
    useEffect(() => {
        fetch('https://my.api.mockaroo.com/organizations/1/reports.json?key=78fbcc90')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setItem(data);
            });
    }, []);
  const navigate = useNavigate()
  const testReportpage = (name,id) => {
    navigate("/testreports", { state: {name:name,id:id}}); //this will open login page on click of login button
  }

  const location = useLocation();
  const name = location.state.name;
  const id = location.state.id;
  // console.log(name,id,"data")


  return (
    <div style={{ display: 'flex' }}>
      <Square />
      <div style={{ marginTop: '2%', marginLeft: '2%' }}>
        <text style={{ color: '#aa00ff', fontSize: '14px', fontFamily: 'revert-layer' }}>Test Reports</text>
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {item.map((ele,index) => {
            return (
              <table class="table table-striped" style={{ width: '900px' }}>
                <tbody>
                  <tr>
                    <td>
                      <tr style={{ color: '#b0bec5', fontSize: '14px', fontWeight: 'bold' }}> Execution # {`${ele.id}`}</tr>
                      <tr style={{ color: '#cfd8dc', fontSize: '10px', fontWeight: 'bold' }}>2 min ago - 10m ago</tr>
                    </td>
                    <td onClick={() => testReportpage(name,ele.id)} style={{ marginRight:'2px',color: 'green', fontSize: '10px', fontWeight: 'bold',marginLeft:'10' }}>{`${ele.succeed_tests}`} Passed</td>
                    <td onClick={() => testReportpage(name,ele.id)} style={{ color: 'red', fontSize: '10px', fontWeight: 'bold' }}>{`${ele.failed_tests}`} Failed</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>

  )
};

export default Reports;