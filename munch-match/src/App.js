
//imports the button component
import ExampleButton from "./components/exampleButtons.jsx"

//The example button component is used in the code below
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ExampleButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
