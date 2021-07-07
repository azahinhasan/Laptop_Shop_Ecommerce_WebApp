import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import  Promocode from './OthersOptions/promocodeList';
import EditProduct from './productEdit';
import classes from './employee.css';
import axios from '../api/axios';

const OtherAction = props =>{
    
    const [showAddPage, setShowAddPage]=useState('promo');
    const [validUserForAccess, setValidUserForAccess]=useState('');

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }
    let pageData='';
    if(showAddPage=='promo'){
        pageData=<Promocode/>
    }else{
        pageData=''
    }

    useEffect(() => {
        axios.get('/employeeAcessCheck/Others/'+localStorage.getItem("Email")).then(r=>{
            setValidUserForAccess(r.data);
        })
    }, []);


    return (

        <div className={''}>

        {validUserForAccess=='Valid'?
            <div>
                <button  style={{width:'120px'}} className={showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('promo')}>Promocode</button> 
                <button className={!showAddPage?classes.buttonOptionSelected: classes.buttonOption} onClick={()=>showAddPageHandler('offers')}>Offers</button> 
                {pageData}

            </div>
        :
        <h3 style={{color:'red'}}>You Donn't Have Access!!!</h3>}

        </div>
    );
    } 

export default OtherAction;





