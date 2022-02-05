import '../App.css';
import definitions from "../definitions.json"
import WordContainer from './WordContainer';
import {useState} from "react"


function App() {
  const [defArray, setDefArray] = useState(definitions)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Common Coding Words and Their Definitions</h1>
      </header>

      <div className="words-container">
        <h4>Words To Be Defined</h4>
        <WordContainer defArray={defArray} />
      </div>

    </div>
  );
}

export default App;
