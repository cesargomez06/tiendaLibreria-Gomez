import './App.css';
import NavBar from './components/NavBar/nav-bar.jsx';
import React from "react";
import ItemListContainer from './containers/ItemListContainer'
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Loader from 'react-spinners/ClipLoader';
//import ItemDetail from './containers/ItemDetail.jsx';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App " value={{}}>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <ItemListContainer greeting={"Bienvenido a Tu librería y juguetería online"}/>     
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
            
          </Route>
        
        {/* <NavLink to="/categoria/1234" activeClassName="seleccionado">Categorias</NavLink> */}

          <Route path="/item/:id" component={ItemDetailContainer}/> 
           
        </Switch>
        <footer className="derechos"> Derechos reservados Cesar Gomez</footer>
      
    </div>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
