import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../Orders/orders.css';
import axios from '../../api/axios';




const PromoEdit = props =>{
    
    const [allPromos, setAllPromos]=useState([]);

    useEffect(() => {
        loadData();
    }, []);

   const loadData=()=>{

    axios.get('').then(r=>{
        console.log(r.data);
        setAllPromos(r.data);
        })
     }
    let pageData='';

    return (
        <div className={''}>
            <p>EDIT PAGE {props.promoID}</p>
            <table className={classes.table}>

            </table>
        

        
        </div>
    );
    } 

export default PromoEdit;





