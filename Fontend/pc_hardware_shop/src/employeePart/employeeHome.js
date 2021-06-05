import React from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import ProductAction from './productAction';
const EmployeeHome = props =>{

    return (
        <div className={''}>
            <SideBar/>
            <p>Welcome To Employee Home</p>
            <Switch>
            <Route path="/user/EmployeeHome/productaction" component={ProductAction}/> 
            <Redirect to="/user/EmployeeHome/"/>
            </Switch>
        </div>
    );
    } 

export default EmployeeHome;





