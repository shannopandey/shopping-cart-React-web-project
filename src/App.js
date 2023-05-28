import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path = '/' component = {ProductList}></Route>
              <Route path = '/details' component = {Details}></Route>
              <Route path = '/cart' component = {Cart}></Route>
              <Route component = {Default}></Route>
            </Switch>
            <Modal />
          </div>
        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default App;
