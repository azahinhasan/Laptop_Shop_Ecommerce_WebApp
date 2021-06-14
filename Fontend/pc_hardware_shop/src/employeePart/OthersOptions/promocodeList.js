import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../employee.css';
import axios from '../../api/axios';


const PromoList = props =>{
    
    const [allPromos, setAllPromos]=useState([]);

    const showAddPageHandler=(data)=>{
        setShowAddPage(data);
    }

   const loadData=()=>{
     axios.get('').then(r=>{

     })
   }
    let pageData='';


    return (
        <div className={''}>
          
        

        
        </div>
    );
    } 

export default PromoList;





