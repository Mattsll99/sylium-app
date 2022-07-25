import React from 'react'
import styled from "styled-components"

function Validate() {
  return (
    <Container>
      <Text>Validate</Text>
    </Container>
  )
}

export default Validate

const Container = styled.div`
  height: 45px;
  width: 145px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  background: #505050;
`;

const Text = styled.text`
  background: transparent;
  cursor: pointer;
`;