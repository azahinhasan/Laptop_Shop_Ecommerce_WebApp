import React, {  Component } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

import Classes from './App.css';
import HomePage from './components/homePage';
import ProductsList from './components/productsList';
import ProductInfo from './components/productInfo';
import NavBar from './components/navBar';
import Cart from './components/userCart';
import ConfirmOrderBy from './components/confirmOrderBy';
import ConfirmOrder from './components/confirmOrder';
import Login from './components/loginPage';
import Logout from './components/logOut';
import SignUp from './components/signUp';
import EmployeeHOme from './employeePart/employeeHome';
import PrintPdf from './components/print/htmlToPdf2';
class App extends Component {
  

  render() {

    return (
      <div className={Classes.App}>
        <NavBar/>
        <Switch>
            <Route path="/home" component={HomePage}/> 
            <Route path="/list/:category" component={ProductsList}/> 
            <Route path="/info/:category/:id" component={ProductInfo}/>
            <Route path="/user/cart" component={Cart}/>
            <Route path="/user/confirmorderBy" component={ConfirmOrderBy}/>
            <Route path="/user/confirmorder/finalstage" component={ConfirmOrder}/>
            <Route path="/user/login" component={Login}/>
            <Route path="/user/logout" component={Logout}/>
            <Route path="/user/signup" component={SignUp}/>
            <Route path="/user/printReceipt/:orderedid" component={PrintPdf}/>
            <Route path="/user/EmployeeHOme/" component={EmployeeHOme}/>
            <Redirect to="/home"/>
        </Switch>
      </div>
      
    );
  }
}

export default withRouter(App); //withRouter will rendered tha page wehn route cnage