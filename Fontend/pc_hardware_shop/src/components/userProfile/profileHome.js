import axios from '../../api/axios';
import React, { useState,useEffect } from 'react';
import SideBar from './sideBar';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';
import OrdersList from './orderListUser';
import OrdersDetails from './ordersDetails';

const UserProfileHome = props =>{

  
    return (
        <div className={''}>
           <h3>UserProfile</h3>

           <SideBar/>

           <Switch>
            <Route path="/user/profileHome/orders" component={OrdersList}/> 
            <Route path="/user/profileHome/ordersDetails/:id" component={OrdersDetails}/> 
            <Redirect to="/user/profileHome"/>
            </Switch>
        </div>
    );
    } 

export default UserProfileHome;





