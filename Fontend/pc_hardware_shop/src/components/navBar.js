import React, { Component } from 'react';
import {NavLink,withRouter,Link} from 'react-router-dom';
import classes from './navBar.css'
class navBar extends Component {

render() {
    return (
        <div className={classes.navBar}>
        <nav>
           
            <ul>
                <li className={classes.siteName}>TestSite</li>
                <span className={classes.navOptions}>
                    <li><Link to={{pathname: '/home'}} >Home</Link></li>
                    <li><Link to={{pathname:'/list/Laptop'}}>Laptop</Link></li>
                    <li><Link to={{pathname:'/list/SSD'}}>SSD</Link></li>
                </span>
             
            </ul>
        </nav>
        </div> 
    );
}
}

export default withRouter(navBar);