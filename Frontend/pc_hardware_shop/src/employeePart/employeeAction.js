import React from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

const EmployeeAction = props =>{
    
    return (
        <div className={''}>
        <button>EDIT</button> 
        <button>ADD</button> 
        </div>
    );
    } 

export default EmployeeAction;





