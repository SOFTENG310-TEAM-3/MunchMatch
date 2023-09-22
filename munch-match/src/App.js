import "./App.css"
//imports the button component

import FoodOptionButtons from "./components/FoodOptionButtons"
import Results from "./components/resultsLayout"
import fork from "./images/fork.png"
import knife from "./images/knife.png"
import React, {useState} from "react";
import {SkeletonTheme} from "react-loading-skeleton";


//The example button component is used in the code below
function App() {


  const [showResults, setShowResults] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const onButtonClick = (type) => {
    setShowResults(true);
    setSelectedType(type);
  };

  const onBackClick = () => {
    setShowResults(false);
    setSelectedType("");
  };

  return (
    
    <div className="App">
        <SkeletonTheme baseColor="#f2f2f2" highlightColor="#444" >
      <header className="App-header">
        <h1>MunchMatch</h1>
      </header>
      <img className="knife" src={knife} alt="knife"></img>
      {showResults ? (<Results type={selectedType} onBackClick={onBackClick}/>) : (<FoodOptionButtons onButtonClick={onButtonClick}/>)}
      <img className="fork" src={fork} alt="fork"></img>
        </SkeletonTheme>
    </div>
  );
}

export default App;
