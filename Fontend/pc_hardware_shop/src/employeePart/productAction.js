import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import AddProduct from './productAdd';
import EditProduct from './productEdit';

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
        <button onClick={()=>showAddPageHandler(true)}>EDIT</button> 
        <button onClick={()=>showAddPageHandler(false)}>ADD</button> 

        {pageData}
        </div>
    );
    } 

export default ProductAction;





