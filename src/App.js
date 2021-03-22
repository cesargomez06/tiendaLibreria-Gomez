import './App.css';
import NavBar from './components/NavBar/nav-bar.jsx';
import React from "react";
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
      
      <ItemListContainer greeting={"Bienvenido a Tu librería online"}/>
      
        
      </header>
    </div>
  );
};

export default App;
