import "./App.css"
//imports the button component
import ExampleButton from "./components/exampleButtons.jsx"
import fork from "./images/fork.png"
import knife from "./images/knife.png"

//The example button component is used in the code below
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MunchMatch</h1>
      </header>
      <img class="knife" src={knife} alt="knife"></img>
      <ExampleButton/>
      <img class="fork" src={fork} alt="fork"></img>
    </div>
  );
}

export default App;
