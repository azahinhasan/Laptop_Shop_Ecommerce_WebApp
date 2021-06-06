import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import AddProduct from './productAdd';
import EditProduct from './productEdit';
import classes from './employee.css';

const ProductAction = props =>{
    
    const [showAddPage, setShowAddPage]=useState(true);

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }
    let pageData='';
    if(showAddPage){
        pageData=<AddProduct/>
    }else{
        pageData=<EditProduct/>
    }

    return (
        <div className={''}>
        <button className={showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler(true)}>ADD</button> 
        <button className={!showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler(false)}>EDIT</button> 

        {pageData}
        </div>
    );
    } 

export default ProductAction;





