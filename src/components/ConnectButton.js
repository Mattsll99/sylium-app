import React from 'react'
import styled from "styled-components"

function ConnectButton() {
  return (
    <Container>
      <Soon>
        <Text>COMING SOON</Text>
      </Soon>
      <Connect>Connect Wallet</Connect>
    </Container>
  )
}

export default ConnectButton

const Container = styled.div`
  height: 45px;
  width: 145px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  background: #505050;
`;

const Connect = styled.text`
  font-weight: bold;
  background:transparent;
`;

const Soon = styled.div`
  width:145px;
  height:15px;
  position: absolute;
  transform: rotate(-20deg);
  background: #FFC700;
  border-radius: 5px;
  display:flex;
  justify-content:center;
  align-items: center;
`;

const Text = styled.text`
  background: transparent;
  font-size:15px;
  color:#151515;
`;