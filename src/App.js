import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar';
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <p>
          Tienda <code> Online</code> 
        </p>
        <a
          className="App-link"
          href="https://rosarionortebike.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a mi web
        </a>
      </header>
    </div>
  );
};

export default App;
