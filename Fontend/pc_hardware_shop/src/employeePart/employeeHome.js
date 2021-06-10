import React from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import ProductAction from './productAction';
import AllOrders from './Orders/allOrders';
import AllOrdersDetails from './Orders/ordersDetails';
const EmployeeHome = props =>{

    return (
        <div className={''}>
            <SideBar/>
            <p>Welcome To Employee Home</p>
            <Switch>
            <Route path="/user/EmployeeHome/productaction" component={ProductAction}/> 
            <Route path="/user/EmployeeHome/allorders/" component={AllOrders}/> 
            <Route path="/user/EmployeeHome/orderDetails/:id" component={AllOrdersDetails}/> 
            <Redirect to="/user/EmployeeHome/"/>
            </Switch>
        </div>
    );
    } 

export default EmployeeHome;





