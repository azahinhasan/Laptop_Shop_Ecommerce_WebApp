import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import  Promocode from './OthersOptions/promocodeList';
import EditProduct from './productEdit';
import classes from './employee.css';

const OtherAction = props =>{
    
    const [showAddPage, setShowAddPage]=useState('promo');

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }
    let pageData='';
    if(showAddPage=='promo'){
        pageData=<Promocode/>
    }else{
        pageData=''
    }

    return (
        <div className={''}>
        <button  style={{width:'120px'}} className={showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('promo')}>Promocode</button> 
        <button className={!showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('offers')}>Offers</button> 
        

        {pageData}
        </div>
    );
    } 

export default OtherAction;





