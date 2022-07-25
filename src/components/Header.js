import React from 'react';
import styled from "styled-components"
import ConnectButton from './ConnectButton';
import MintPage from "./MintPage";
import RedeemPage from "./RedeemPage";
import PORPage from "./PORPage";
import { NavLink, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Logo src="./assets/Logo.png"/>
      <Menu>
        <Choice>Mint</Choice>
        <Choice>Redeem</Choice>
        <Choice>P.O.R.</Choice>
      </Menu>
      <ConnectButton />
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: sticky;
  z-index: 2;
  top: 0px;
  width: 100vw;
  height: 100px;
  display:flex;
  flex-direction-row;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  background: rgba( 255, 255, 255, 0 );
  backdrop-filter: blur( 17px );
  -webkit-backdrop-filter: blur( 17px );
  @media(max-width:700px) {
    padding-left: 10px;
    padding-right:10px;
  }
`;

const Logo = styled.img`
  height:70px;
  width:70px;
  background: transparent;
`;

const Menu = styled.div`
  display:flex;
  position: center;
  width:30%;
  justify-content:space-between;
  background: rgba( 255, 255, 255, 0 );
  backdrop-filter: blur( 17px );
  @media(max-width:700px) {
    width: 50%;
  }
`;

const Choice = styled.text`
  color: #606060;
  background: transparent;
`;