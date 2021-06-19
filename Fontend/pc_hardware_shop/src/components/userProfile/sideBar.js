import React, { useState,useEffect,useReducer, } from 'react';
import classes from './sideBar.css';
import {NavLink,withRouter,Link} from 'react-router-dom';

const SideBar = props =>{

    return (
        <div className={classes.SideBar}>
        <Link to={{pathname:'/user/EmployeeHome/productaction'}}>Home</Link>
        <br/>
        <Link to={{pathname:'/user/EmployeeHome/allorders/'}}>Update Password</Link>
        <br/>
        <Link to={{pathname:'/user/EmployeeHome/OthersAction'}}>Orders</Link>
        <br/>
        </div>
    );
    } 

export default SideBar;





