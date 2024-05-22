import { BiSolidBuildings } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my.api.mockaroo.com/organizations.json?key=78fbcc90')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    const navigate = useNavigate()
    const openReportsPage = (name,id) => {
        navigate("/reports", { state: {name:name,id:id} }); //this will open login page on click of login button
    }
    return (
        <div>
            <p style={{color:'black',fontSize:'25px',fontWeight:'bold',marginLeft:'20px'}}>Levo</p>
            <p style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', color: '#673ab7', fontSize: '23px', fontWeight: 'bold', fontFamily: 'revert-layer' }}>Organizations</p>
            <p style={{ display: 'flex', justifyContent: 'center', color: '#e040fb', fontSize: '13px', marginBottom: '30px' }}>Pick the organization you want to access to</p>
            <div style={{
                display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {data.map((data) => {
                    return (
                        <ul>
                            <div onClick={() => openReportsPage(data.name,data.id)} style={{
                                display: "flex",
                                flexDirection: 'row',
                                textAlign: 'center',
                                width: 400,
                                height: 70,
                                // marginBottom: '10px',
                                // paddingTop: '20px',
                                backgroundColor: "#cfd8dc",
                                border: "2px solid #607d8b"
                            }}>
                                <p style={{ marginTop: '15px', height: '40px', width: '40px', marginLeft: '20px', backgroundColor: 'white', color: '#b0bec5', borderRadius: '20px' }}>
                                    <BiSolidBuildings size={30} />
                                </p>
                                <span style={{
                                    fontSize: 15,
                                    color: 'white',
                                    marginTop: '25px',
                                    textAlign: 'center',
                                    marginLeft: '80px',
                                    fontWeight: 'bold', fontFamily: 'sans-serif'
                                }}>
                                    {data.name}
                                </span>
                            </div>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;