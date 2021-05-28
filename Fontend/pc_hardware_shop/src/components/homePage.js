import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
import axios from 'axios';
//import GoogleMapReact from 'google-map-react';
import classes from './homePage.css';


const HomePage = props =>{

        const [ipAddress, setIpAddress] = useState("");
        const [ipAddressDetails, setIpAddressDetails] = useState("");

        return (
          <div className={classes.homePage}>
              <img className={classes.smallPic} src={require('../Content/HomePage/apple-imac.jpg').default} />
              <img className={classes.largePic} src={require('../Content/HomePage/vminipreorder.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/lenovo-yoga-all-model-271x350.jpg').default} />
              <br/>
              <img className={classes.largePic} src={require('../Content/HomePage/ekwb.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/bluetooth-speaker-web-banner.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/iphone-12-cables-converter.jpg').default} />
          </div>
        );
    } 

export default HomePage;





