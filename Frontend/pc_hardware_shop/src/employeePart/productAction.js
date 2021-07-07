import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import AddProduct from './productAdd';
import EditProduct from './productEdit';
import classes from './employee.css';
import axios from '../api/axios';


const ProductAction = props =>{
    
    const [showAddPage, setShowAddPage]=useState(true);
    const [validUserForAccess, setValidUserForAccess]=useState('');

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }
    let pageData='';
    if(showAddPage){
        pageData=<AddProduct/>
    }else{
        pageData=<EditProduct/>
    }

   
    useEffect(() => {
        axios.get('/employeeAcessCheck/Products/'+localStorage.getItem("Email")).then(r=>{
            setValidUserForAccess(r.data);
        })
    }, []);


    return (
        <div className={''}>
        {validUserForAccess=='Valid'?
            <div>
                <button className={showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler(true)}>ADD</button> 
                <button className={!showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler(false)}>EDIT</button> 
                {pageData}
            </div>
        
        : <h3 style={{color:'red'}}>You Donn't Have Access!!!</h3>}
        
        </div>
    );
    } 

export default ProductAction;





