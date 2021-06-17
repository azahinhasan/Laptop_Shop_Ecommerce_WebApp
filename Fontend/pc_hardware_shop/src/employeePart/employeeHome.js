import axios from '../api/axios';
import React, { useState,useEffect } from 'react';
import SideBar from './sideBar';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';
import ProductAction from './productAction';
import AllOrders from './Orders/allOrders';
import AllOrdersDetails from './Orders/ordersDetails';
import OthersAction from './othersAction';
import classes from './employee.css';

const EmployeeHome = props =>{

    const[userValid,setUserValid]=useState(false);
    const history = useHistory();
    useEffect(() => {

        axios.post('/login/verify',{
            Email: localStorage.getItem("Email"),
            Token:localStorage.getItem("Token")
        }).then(r=>{
            console.log(r.data);
            if(r.data=="OK"){
                setUserValid(true);
               
            }else{
                history.push('/home');
            }
        }).catch(e=>{
            console.log(e);
        })
    }, []);

    let pagaData='';
    if(userValid){
        pagaData=(
            <Switch>
            <Route path="/user/EmployeeHome/productaction" component={ProductAction}/> 
            <Route path="/user/EmployeeHome/allorders/" component={AllOrders}/> 
            <Route path="/user/EmployeeHome/orderDetails/:id" component={AllOrdersDetails}/> 
            <Route path="/user/EmployeeHome/OthersAction/" component={OthersAction}/> 
            <Redirect to="/user/EmployeeHome/"/>
            </Switch>
        )
    }
    // else{
    //     pagaData=<Switch><Redirect to="/home"/></Switch>;
    // }
    
    return (
        <div className={''}>
            <SideBar/>
            <div  className={classes.MainPage}>
                <p>Welcome To Employee Home</p>
                {pagaData}
            </div>
        </div>
    );
    } 

export default EmployeeHome;





