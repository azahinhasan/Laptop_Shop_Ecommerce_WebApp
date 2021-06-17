import React, { useState,useEffect} from 'react';

import {Redirect} from 'react-router-dom';
import axios from '../api/axios';

const HomePage = props =>{
    const [redirctTo, setRedirctTo] = useState(false);


        const cleanSeassion=()=>{
            window.localStorage.removeItem("LoginID");
            window.localStorage.removeItem("Email");
            window.localStorage.removeItem("UserVerified");
            window.localStorage.removeItem("Type");
            window.localStorage.removeItem("Tokken");
        }
        useEffect(()=>{
            axios.post('/logout',{
                Email: localStorage.getItem("Email"),
                Token:localStorage.getItem("Token")
            }).then(r=>{
                if(r.data=="OK"){
                    console.log('Tokken Deleted!')
                } 
            
            }).catch(e=>{
                console.log(e);
            })


            cleanSeassion();
            setRedirctTo(true);

        },[])

        if(redirctTo){
            return <Redirect to="/home" />
        }
        return (
        <div className="">
            <p>LogOut.....</p>
        </div>
        );
    } 

export default HomePage;





