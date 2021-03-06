import React,{ useState} from 'react';
import classes from './homePage.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory } from 'react-router-dom';
import PageNumber from './pageNumber';

const HomePage = props =>{

        return (
          <div className={classes.homePage}>
           
              <h2>Welcome To MyMyLeptopShop</h2>
              <br/>
              <img className={classes.smallPic} src={require('../Content/HomePage/apple-imac.jpg').default} />
              <img className={classes.largePic} src={require('../Content/HomePage/vminipreorder.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/lenovo-yoga-all-model-271x350.jpg').default} />
              <br/>
              <img className={classes.largePic} src={require('../Content/HomePage/ekwb.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/bluetooth-speaker-web-banner.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/iphone-12-cables-converter.jpg').default} />
              <br/>
              <img className={classes.smallPic} src={require('../Content/HomePage/gamingchairs.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/mi-tvs.jpg').default} />
              <img className={classes.largePic} src={require('../Content/HomePage/studio-equipments-web-banner.jpg').default} />
              <br/>
              <img className={classes.smallPic} src={require('../Content/HomePage/lenovo-yoga-all-model-271x350.jpg').default} />
              <img className={classes.largePic} src={require('../Content/HomePage/dellinsp155000.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/iphone-12-cables-converter.jpg').default} />
              <br/>
              <img className={classes.largePic} src={require('../Content/HomePage/vminipreorder.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/M8-dual-arm.jpg').default} />
              <img className={classes.smallPic} src={require('../Content/HomePage/bluetooth-speaker-web-banner.jpg').default} />
         
              <br/>
              
              <div> <PageNumber/> </div>
             
          </div>
        );
    } 

export default HomePage;





