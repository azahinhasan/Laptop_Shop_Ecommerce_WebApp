import React from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';

const EmployeeAction = props =>{
    
    return (
        <div className={''}>
        <button style={{width:'160px'}}>ACCESS CHANGE</button> 
        <button>EDIT</button> 
        <button>ADD</button> 
        <button>SALARY</button> 
        </div>
    );
    } 

export default EmployeeAction;





