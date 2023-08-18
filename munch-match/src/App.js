
//imports the button component

import ExampleButton from "./components/exampleButtons.jsx"
import ResultsPage from './Results.js';

const googleAPIScript = process.env.REACT_APP_GOOGLE_API_KEY

window.REACT_APP_GOOGLE_API_KEY = googleAPIScript

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
  
          <ResultsPage/>
        
      </header>
    </div>
  );
}

export default App;
