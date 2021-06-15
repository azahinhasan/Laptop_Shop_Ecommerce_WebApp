import React, { useState,useEffect,useReducer, } from 'react';
import classes from './sideBar.css';
import {NavLink,withRouter,Link} from 'react-router-dom';

const SideBar = props =>{

    return (
        <div className={classes.SideBar}>
        <Link to={{pathname: '/user/EmployeeHome/employeeaction'}}>Employee</Link>
        <br/>
        <Link to={{pathname:'/user/EmployeeHome/productaction'}}>Products</Link>
        <br/>
        <Link to={{pathname:'/user/EmployeeHome/allorders/'}}>Orders</Link>
        <br/>
        <Link to={{pathname:'/user/EmployeeHome/OthersAction'}}>Others</Link>
        <br/>
        </div>
    );
    } 

export default SideBar;





