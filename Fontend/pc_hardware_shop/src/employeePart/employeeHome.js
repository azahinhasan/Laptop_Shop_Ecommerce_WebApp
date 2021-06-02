import React from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

const EmployeeHome = props =>{

    return (
        <div className={''}>
            <SideBar/>
            <p>Welcome To Employee Home</p>
            <Switch>
            <Route path="/home" component={''}/> 
            <Redirect to="/user/EmployeeHOme/"/>
        </Switch>
        </div>
    );
    } 

export default EmployeeHome;





