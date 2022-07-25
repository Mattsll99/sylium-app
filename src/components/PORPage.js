import React from 'react';
import styled from "styled-components"
import Box from './Box';
import Soon from './Soon';
import Validate from './Validate';

function PORPage() {
  return (
    <Container>
      <Soon />
      <Sections>
        <Text>Provide</Text>
        <Text>Preferential Rate</Text>
        <Text>You get</Text>
      </Sections>
      <Left>
        <Wrap>
        <Title>ETH</Title>
        </Wrap>
        <Basket>
        <Panel>
          <Box />
          <Currency>ETH</Currency>
        </Panel>
        <Panel>
          <Currency>...</Currency>
        </Panel>
        </Basket>
      </Left>
      <Line></Line>
      <Center>
        <Amount>... SYLI</Amount>
        <Amount style={{color:"#505050", paddingBottom: 15}}>Instead of ... SYLI</Amount>
      <Validate/>
      </Center>
      <Right>
        <Wrap>
        <Title>USDC</Title>
        </Wrap>
        <Basket>
        <Panel>
          <Box />
          <Currency>USDC</Currency>
        </Panel>
        <Panel>
          <Currency>...</Currency>
        </Panel>
        </Basket>
      </Right>
    </Container>
  )
}

export default PORPage

const Container = styled.div`
  height : 80vh;
  width: 100vw;
  padding: 30px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width:700px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Line = styled.div`
  height:40%;
  width: 1px;
  background: white;
  padding-bottom: 100px;
`;

const Sections = styled.div`
  width: auto;
  height: 50%;
  padding-top: 100px;
  padding-right:30px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Left = styled.div`
  width: auto;
  height: 50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  //justify-content: space-between;

`;

const Right = styled(Left)``;

const Text = styled.text`
  /*@media(max-width:700px) {
    font-size:16px;
  }*/
`;

const Title = styled.text``;

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 60px;
  display:flex;
  justify-content:center;
`;

const Panel = styled.div`
  width: auto;
  height: 40px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  column-gap: 10px;
`;

const Basket = styled.div`
  width: 200px;
  height: 45%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width:700px) {
    width: 120px;
  }
`;

const Currency = styled.text``;

const Center = styled.div`
  position: absolute;
  margin-top: 32vh;
  margin-left: 190px;
  height: auto; 
  display:flex; 
  flex-direction: column;
  align-items: center;
`;

const Amount = styled.text``;