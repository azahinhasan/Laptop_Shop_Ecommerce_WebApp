import React,{useState} from 'react';
import SideBar from './sideBar';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import EmployeeAccess from './EmployeeOptions/employeeActionChnage';
import classes from './employee.css';
const EmployeeAction = props =>{
    
    const [selectButton, setShowAddPage]=useState('ACCESS_CHANGE');

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }

    let pageData='';
    if(selectButton=='ACCESS_CHANGE'){
        pageData=<EmployeeAccess/>
    }else if(selectButton=='EDIT'){
        pageData=''
    }else if(selectButton=='ADD'){
        pageData=''
    }else if(selectButton=='SALARY'){
        pageData=''
    }





    return (
        <div className={''}>
        <button style={{width:'160px'}} className={selectButton=='ACCESS_CHANGE'?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('ACCESS_CHANGE')}>ACCESS CHANGE</button> 
        <button className={selectButton=='EDIT'?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('EDIT')}>EDIT</button> 
        <button className={selectButton=='ADD'?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('ADD')}>ADD</button> 
        <button   style={{width:'100px'}} className={selectButton=='SALARY'?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('SALARY')}>SALARY</button> 



        <br/>
        <hr/>
        {pageData}
        </div>
    );
    } 

export default EmployeeAction;





