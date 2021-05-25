import React, { useState,useEffect} from 'react';

import {Redirect} from 'react-router-dom';

const HomePage = props =>{
    const [redirctTo, setRedirctTo] = useState(false);

        useEffect(()=>{
            window.localStorage.removeItem("LoginID");
            window.localStorage.removeItem("Email");
            window.localStorage.removeItem("UserVerified");
            window.localStorage.removeItem("Type");    
        
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





