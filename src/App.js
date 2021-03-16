import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/nav-bar.jsx';
import React from "react";
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
      <h1 className="neon">Tu librería online</h1>
      <ItemListContainer/>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p className="text-primary">
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
