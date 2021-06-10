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
        <div class={classes.dropdown}>
            <button class={classes.dropbtn}>Employee</button>
            <div class={classes.dropdowncontent}>
                <Link to={{pathname:'/list/SSD'}}>Salary</Link>
                <Link to={{pathname:'/list/RAM'}}>Add Employee</Link>
                <Link to={{pathname:'/list/HDD'}}>Edit Employee Info</Link>
            </div>
        </div> 
        </div>
    );
    } 

export default SideBar;





