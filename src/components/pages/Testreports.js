import React, { useState, useEffect } from "react";
import './square.css';
import Square from './square';
import { useLocation } from 'react-router-dom';
import Squarereports from './squarereports';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import SearchBar from "./search";
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";


const Testreports = () => {
  const [test,setTest] = useState([])
  const [report, setReport] = useState({})
  const [urlCount, setUrlCount] = useState(0);
  const data = [{
    name: 'Failed Tests',    
  }, {
    name: 'Passed Tests',
  }]
  const columns = [{
  accessor: 'name',
  Cell: ({ original }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Return the icon component based on the name */}
      {original.name === 'Failed Tests' ? <FaTimesCircle style={{ marginRight: '5px',color:'red' }} /> : <FaCheckCircle style={{ marginRight: '5px',color:'green' }} />}
      {/* Return the name */}
      <span style={{fontSize:'15px',color: "#90a4ae"}}>{original.name}&nbsp;&nbsp;{urlCount}/{urlCount}</span>
    </div>
  )
  }]
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/organizations/1/reports/1/details.json?key=78fbcc90')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
          setTest(data)
          setReport(data.endpoints)
          setUrlCount(data.endpoints.length);
          // console.log(data.endpoints)
        });
}, []);

  return (
    <div style={{ display: 'flex' }}>
      <Square />
      <div style={{ marginLeft: '2%', marginTop: '1%' }}>
      <text style={{ color: '#0d47a1', fontSize: '14px', fontFamily: 'revert-layer' }}>Test Reports</text>
        <MdKeyboardArrowRight color="#90a4ae" style={{marginLeft:'15px'}} />
        <text style={{ color: 'black', fontSize: '14px', fontFamily: 'revert-layer', }}>Example #{id}</text>
        <Squarereports />
        <span style={{ color: '#0d47a1', marginTop: '1%' }}>Results</span>
        <hr
          style={{
            marginTop: '-5',
            marginBottom: '-2%',
            width: '60px',
            background: '#0d47a1',
            color: '#0d47a1',
            borderColor: '#0d47a1',
            height: '5px',
          }}
        />
        <hr
          style={{
            background: '#90a4ae',
            color: '#90a4ae',
            borderColor: '#90a4ae',
            height: '2px',
          }}
        />
        <SearchBar />
        <div style={{ height: '400px', overflowY: 'auto' }}>
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          SubComponent={(row) => {
            return (
              <div>
                {report.map((reportItem, index) => (
                  <div key={index} style={{ padding: '20px',color: "#90a4ae",backgroundColor: "#eceff1", marginTop: '10px', marginBottom: '10px' }}>
                    <span style={{marginLeft:'-2%',fontSize:'30px',color:row.original.name === 'Failed Tests' ? 'red' : 'green'}}>| </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {reportItem.url}
                  </div>
                ))}
              </div>
            );
          }}
        />
        </div>
      </div>
    </div>

  )
};

export default Testreports;