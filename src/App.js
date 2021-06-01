import React from "react";
import Weather from "./Weather.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h1 className="header">Weather App</h1>
          <Weather defaultCity="New York"/>
        <footer className="codedby"><span >Coded by Sandra Lopez using React<img src={logo} className="App-logo" alt="logo" />and {" "}
          <a className="code" 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer">
            open sourced on Github</a></span>
        </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
