import './App.css';
import styled from "styled-components"
import Header from './components/Header';
import MintPage from './components/MintPage';
import RedeemPage from './components/RedeemPage';
import PORPage from './components/PORPage';
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <MintPage />
      <RedeemPage />
      <PORPage />
    </Container>
  );
}

export default App;

const Container = styled.div``;