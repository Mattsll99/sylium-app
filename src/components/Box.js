import React from 'react'
import styled from "styled-components"

function Box() {
  return (
    <Container></Container>
  )
}

export default Box

const Container = styled.div`
height:40px;
width:120px;
border-radius: 10px;
background: #151515;
border-width:1px;
border-style: solid;
border-color: white;
`;