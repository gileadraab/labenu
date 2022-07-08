
import './App.css';
import Matches from './Components/Matches';
import { useEffect, useState } from "react";
import Profiles from './Components/Profiles';

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
    <div>
      <h2>ASTROMATCH</h2>
        {showScreen()}
    </div>
  );
}

export default App;
