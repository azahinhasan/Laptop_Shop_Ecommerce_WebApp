import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
import axios from 'axios';
//import GoogleMapReact from 'google-map-react';



const HomePage = props =>{

        const [ipAddress, setIpAddress] = useState("");
        const [ipAddressDetails, setIpAddressDetails] = useState("");

        return (
          <div className="">
              <p>Home</p>
          </div>
        );
    } 

export default HomePage;





