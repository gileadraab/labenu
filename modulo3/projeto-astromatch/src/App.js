
import './App.css';
import Matches from './Components/Matches';
import { useEffect, useState } from "react";
import Profiles from './Components/Profiles';
import {Body, MainContainer, Header, Logo, Name, LogoFooter, Footer} from './Components/Styles'
import SwanLogo from './Components/Img/WhiteSwans.png'

function App() {
  const [screen, setScreen] = useState("profiles")

  const changeScreen = (nextScreen) => {
    setScreen(nextScreen)
  }


  const showScreen = () => {
    switch(screen){
      case "profiles":
        return <Profiles changeScreen = {changeScreen}/>
      case "matches":
        return <Matches changeScreen = {changeScreen}/>
    }
  }


  return (
    <Body>
      <MainContainer>
        <Header><Logo src = {SwanLogo}></Logo><Name>LabeLove</Name></Header>
        {showScreen()}
        <Footer></Footer>
      </MainContainer>
    </Body>
  );
}

export default App;
