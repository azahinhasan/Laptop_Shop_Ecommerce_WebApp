import React, {  Component } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

import Classes from './App.css';
import HomePage from './components/homePage';
import ProductsList from './components/productsList';
import ProductInfo from './components/productInfo';
import NavBar from './components/navBar';
import Cart from './components/userCart';
class App extends Component {
  

  render() {

    return (
      <div className={Classes.App}>
        <NavBar/>
        <Switch>
            <Route path="/home"  component={HomePage}/> 
            <Route path="/list/:category" component={ProductsList}/> 
            <Route path="/info/:category/:id" component={ProductInfo}/>
            <Route path="/user/cart" component={Cart}/>
            <Redirect to="/home" />
        </Switch>

      </div>
      
    );
  }
}

export default withRouter(App); //withRouter will rendered tha page wehn route cnage