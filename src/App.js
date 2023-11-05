import logo from './logo.svg';
import './App.css';

import React from "react"

  export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className="App">
      <header className={darkMode ? "App-header-dark":"App-header"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </header>
 
      </div>

  );
}

