import axios from '../../api/axios';
import React, { useState,useEffect } from 'react';
import SideBar from './sideBar';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';


const UserProfileHome = props =>{

  
    return (
        <div className={''}>
           <h3>UserProfile</h3>

           <SideBar/>
        </div>
    );
    } 

export default UserProfileHome;





