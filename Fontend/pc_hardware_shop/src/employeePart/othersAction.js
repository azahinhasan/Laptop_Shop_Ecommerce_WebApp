import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import AddProduct from './productAdd';
import EditProduct from './productEdit';
import classes from './employee.css';

const OtherAction = props =>{
    
    const [showAddPage, setShowAddPage]=useState('');

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }
    let pageData='';
    if(showAddPage=='promo'){
        pageData=<AddProduct/>
    }else{
        pageData=<EditProduct/>
    }

    return (
        <div className={''}>
        <button className={showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('promo')}>Promocode</button> 
        <button className={!showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('offers')}>Offers</button> 
        

        {pageData}
        </div>
    );
    } 

export default OtherAction;





