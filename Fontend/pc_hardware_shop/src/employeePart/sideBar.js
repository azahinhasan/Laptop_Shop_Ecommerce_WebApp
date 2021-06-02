
import React from 'react';
import classes from './sideBar.css';
import {NavLink,withRouter,Link} from 'react-router-dom';

const SideBar = props =>{

    return (
        <div className={classes.SideBar}>
        <Link to={{pathname: '/home'}} ></Link>
        <br/>
        <Link to={{pathname:'/list/Laptop'}}>Products</Link>
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





