import React, { Component } from 'react';
import {NavLink,withRouter,Link} from 'react-router-dom';
import classes from './navBar.css'
import SearchBar from './searchBar';
class navBar extends Component {
    state={
        searchBar:false
    }
    showSearchBarHandler(){
        console.log("serarc")
        this.setState({searchBar:!this.state.searchBar});
    }
render() {

    
    let searchBar='';
    if(this.state.searchBar){
        searchBar=<SearchBar/>;
    }else{
        searchBar='';
    }

    return (
        <div className={classes.navBar}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div class={classes.navbar}>
                <Link className={classes.SiteName} to={{pathname: '/home'}}>MyMy LepTop Shop</Link>
                <Link to={{pathname: '/home'}} >Home</Link>
                <Link to={{pathname:'/list/Laptop'}}>Laptop</Link>
                <div class={classes.dropdown}>
                    <div class={classes.dropbtn}>Leptop Components</div>
                    <div class={classes.dropdowncontent}>
                    <Link to={{pathname:'/list/SSD'}}>SSD</Link>
                    <Link to={{pathname:'/list/RAM'}}>RAM</Link>
                    <Link to={{pathname:'/list/HDD'}}>HDD</Link>
                    </div>
                </div> 
                <Link to={{pathname:'/user/cart'}}>Cart</Link>
                <Link to={{pathname:'/user/EmployeeHOme/'}}>Employee</Link>





                <div className={classes.LoginSingnUp}>
                <Link onClick={()=>this.showSearchBarHandler()}><i class="fa fa-search"></i></Link>
                {localStorage.getItem("UserVerified")=='true'?
                    <Link to={{pathname:'/user/logout'}}>LogOut</Link>
                : <span>
                    <Link to={{pathname:'/user/login'}}>LogIn</Link>
                    <Link to={{pathname:'/user/signup'}}>SignUp</Link>
                </span>}
                
            </div>
          

        <div>
            {searchBar}
        </div>

        </div>  

        
        </div> 
    );
}
}

export default withRouter(navBar);