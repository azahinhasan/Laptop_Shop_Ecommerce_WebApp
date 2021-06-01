import React, { useState,useEffect} from 'react';
import classes from './productsList.css';
import axios from '../api/axios';

import {Redirect,Switch} from 'react-router-dom';

const Login = () =>{

    const [errorMsg, setErrorMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirctTo, setRedirctTo] = useState(false);


    useEffect(() => {

    if(localStorage.getItem("UserVerified")=='true'){
        setRedirctTo(true);
    }

    },[localStorage.getItem("UserVerified")]);

    useEffect(() => {

    if(localStorage.getItem("UserVerified")=='true'){
            setRedirctTo(true);
        }

    },[]);

    if(redirctTo){
        return <Redirect to="/home" />
    }

    const loginHendler=()=>{
        
        axios.post('/login',{
            Email:email,
            Password:password
        }).then(r=>{
            if(r.data[0]=='InValid'){
                localStorage.setItem("UserVerified", false);
                setErrorMsg("Wrong Email or Password!");
            }else{
                setErrorMsg("");
                localStorage.setItem("LoginID", Number(r.data[0]));
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
        <h2>LogIn Page</h2>
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
        <p style={{color:'red'}}>{errorMsg}</p>
        <br/>
        <button onClick={loginHendler}>LogIn</button>
    </div>
    );

} 

export default Login;





