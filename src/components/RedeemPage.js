import React from 'react'
import styled from "styled-components"
import Box from './Box';
import Soon from './Soon';
import Validate from './Validate';

function RedeemPage() {
  return (
    <Container>
      <Soon />
      <Left>
        <Wrap>
        <Title>Redeem</Title>
        </Wrap>
        <Panel>
          <Box />
          <Currency>SYLI</Currency>
        </Panel>
      </Left>
      <Line></Line>
      <Right>
        <Wrap>
        <Title>Get</Title>
        </Wrap>
        <Wrap2>
        <Panel>
          <Box />
          <Currency>ETH</Currency>
        </Panel>
        <Panel>
          <Box />
          <Currency>USDC</Currency>
        </Panel>
        <Panel>
          <Box />
          <Currency>SYLIX</Currency>
        </Panel>
        <Validate />
        </Wrap2>
      </Right>
    </Container>
  )
}

export default RedeemPage

const Container = styled.div`
  height : 80vh;
  width: 100vw;
  padding: 70px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  @media(max-width:600px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Left = styled.div`
  width: auto;
  height:80%;
  display:flex;
  align-items:center;
  flex-direction:column;
  @media(max-width:700px) {
    width:49%;
    align-items:start;
  }
`;

const Right = styled(Left)``;

const Line = styled.div`
  height:80%;
  width: 1px;
  background: white;
`;

const Title = styled.text`
  font-size: 25px;
`;

const Wrap = styled.div`
  width:100%;
  text-align:center;
  padding-bottom: 40px;
`;

const Wrap2 = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`;

const Panel = styled.div`
  height: 40px;
  width: 100%;
  //background: green;
  padding: 10px;
  padding-left: 50px;
  display:flex;
  flex-direction: row;
  //justify-content: space-between;
  align-items:center;
  justify-content: start;
  column-gap: 10px;
`;

const Currency = styled.text`
  font-size: 20px;
`;