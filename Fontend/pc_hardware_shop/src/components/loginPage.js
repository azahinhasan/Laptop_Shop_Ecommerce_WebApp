import React, { useState,useEffect} from 'react';
import axios from 'axios';
import classes from './productsList.css';

import {Redirect,Switch} from 'react-router-dom';

const Login = () =>{


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirctTo, setRedirctTo] = useState(false);

    useEffect(() => {

    if(localStorage.getItem("UserVerified")){
        setRedirctTo(true);
    }
    },[localStorage.getItem("UserVerified")]);

    useEffect(() => {
        if(localStorage.getItem("UserVerified")){
            setRedirctTo(true);
        }
    },[]);

    if(redirctTo){
        return <Redirect to="/home" />
    }

    const loginHendler=()=>{
        
        axios.post('http://localhost:3819/api/login',{
            Email:email,
            Password:password
        }).then(r=>{
            if(r.data=='InValid'){
                localStorage.setItem("UserVerified", false);
            }else{
                localStorage.setItem("LoginID", r.data[0]);
                localStorage.setItem("Type", r.data[1]);
                localStorage.setItem("Email", r.data[2]);
                localStorage.setItem("UserVerified", true);
                window.location.reload();
            }
        }).catch(err=>{
            localStorage.setItem("UserVerified", false);
            console.log(err,' LoginPage')
        })
    }

    return (
    <div className="">
        <br/>
        <table className={classes.table}>
            <tr>
                <td>Email:</td>
                <td><input onChange={event=>setEmail(event.target.value)}/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input  onChange={event=>setPassword(event.target.value)}/></td>
            </tr>
        </table>
        
        <br/>
        <button onClick={loginHendler}>LogIn</button>
    </div>
    );

} 

export default Login;





