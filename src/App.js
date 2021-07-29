import './App.css';
import NavBar from './components/NavBar/nav-bar.jsx';
import Cart from "../src/components/Cart/Cart";
import React from "react";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

    <div className="App " >

        <NavBar />
        <Switch>
          <Route exact path="/">
              <ItemListContainer greeting={"Bienvenido a Tu librería y juguetería online"}/>     
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route> 

          <Route path="/cart">
              <Cart />
          </Route>
           
        </Switch>
        <footer className="derechos"> Derechos reservados Cesar Gomez</footer>
      
    </div>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
