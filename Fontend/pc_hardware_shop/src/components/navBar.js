import React, { Component } from 'react';
import {NavLink,withRouter,Link} from 'react-router-dom';
import classes from './navBar.css'
class navBar extends Component {

render() {
    return (
        <div className={classes.navBar}>
        {/* <nav>
           
            <ul>
                <li className={classes.siteName}>TestSite</li>
                <span className={classes.navOptions}>
                    <li><Link to={{pathname: '/home'}} >Home</Link></li>
                    <li><Link to={{pathname:'/list/Laptop'}}>Laptop</Link></li>
                    <li><Link to={{pathname:'/list/SSD'}}>SSD</Link></li>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </span>
             
            </ul>
        </nav> */}

            <div class={classes.navbar}>
                <Link className={classes.SiteName} to={{pathname: '/home'}}>MyMy LepTop Shop</Link>
                <Link to={{pathname: '/home'}} >Home</Link>
                <Link to={{pathname:'/list/Laptop'}}>Laptop</Link>
                <div class={classes.dropdown}>
                    <button class={classes.dropbtn}>Leptop Components</button>
                    <div class={classes.dropdowncontent}>
                    <Link to={{pathname:'/list/SSD'}}>SSD</Link>
                    <Link to={{pathname:'/list/SSD'}}>SSD</Link>
                    <Link to={{pathname:'/list/SSD'}}>SSD</Link>
                    </div>
                </div> 
        </div>  
        
        </div> 
    );
}
}

export default withRouter(navBar);