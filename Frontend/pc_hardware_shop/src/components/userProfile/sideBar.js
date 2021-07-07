import React, { useState,useEffect,useReducer, } from 'react';
import classes from './sideBar.css';
import {NavLink,withRouter,Link} from 'react-router-dom';

const SideBar = props =>{

    return (
        <div className={classes.SideBar}>
        <Link to={{pathname:'/user/profileHome'}}>Home</Link>
        <br/>
        <Link to={{pathname:'/user/profileHome/updatePassword'}}>Update Password</Link>
        <br/>
        <Link to={{pathname:'/user/profileHome/orders'}}>Orders</Link>
        <br/>
        </div>
    );
    } 

export default SideBar;





