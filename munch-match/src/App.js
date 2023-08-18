import "./App.css"
//imports the button component
import ExampleButton from "./components/exampleButtons.jsx"
import Results from "./components/results"
import fork from "./images/fork.png"
import knife from "./images/knife.png"
import React, {useState} from "react";

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
      <header className="App-header">
        <h1>MunchMatch</h1>
      </header>
      <img className="knife" src={knife} alt="knife"></img>
      {showResults ? (<Results type={selectedType} onBackClick={onBackClick}/>) : (<ExampleButton onButtonClick={onButtonClick}/>)}
      <img className="fork" src={fork} alt="fork"></img>
    </div>
  );
}

export default App;
