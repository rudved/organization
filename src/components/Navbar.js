import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #b0bec5;
  color: #90a4ae;
  height:30px;
`;


const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li style={{fontSize:'30px',marginTop:'7px'}}></li>
      </ul>
      <ul>
        <li style={{fontSize:'30px',marginLeft:'-20px',marginTop:'7px'}}></li>
      </ul>
      <ul>
        <li style={{fontSize:'30px',marginLeft:'-40px',marginTop:'7px'}}></li>
      </ul>
    </Nav>
  );
};
export default NavBar;