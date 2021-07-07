import axios from '../../api/axios';
import React, { useState,useEffect } from 'react';
import SideBar from './sideBar';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';
import OrdersList from './orderListUser';
import OrdersDetails from './ordersDetails';
import UpdatePassword from './updatePassword';

const UserProfileHome = props =>{

  
    return (
        <div className={''}>
            <h1>User Profile</h1>

            <br/>
            <br/>
            <SideBar/>

            <Switch>
            <Route path="/user/profileHome/orders" component={OrdersList}/> 
            <Route path="/user/profileHome/ordersDetails/:id" component={OrdersDetails}/> 
            <Route path="/user/profileHome/updatePassword" component={UpdatePassword}/> 
            <Redirect to="/user/profileHome"/>
            </Switch>
        </div>
    );
    } 

export default UserProfileHome;





