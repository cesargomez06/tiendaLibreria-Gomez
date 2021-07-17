import './App.css';
import NavBar from './components/NavBar/nav-bar.jsx';
import React from "react";
import ItemListContainer from './containers/ItemListContainer'
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemDetail from './containers/ItemDetail.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <NavBar />
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <ItemListContainer greeting={"Bienvenido a Tu librería online"}/>     
            </header>
          </Route>
        
        {/* <NavLink to="/categoria/1234" activeClassName="seleccionado">Categorias</NavLink> */}

          <Route path="/item/:id" component={ItemDetailContainer}/> 
           
        </Switch>
        <footer> Derechos reservados Cesar Gomez</footer>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
