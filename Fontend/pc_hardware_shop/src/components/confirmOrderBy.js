import React from 'react';
import {Route,Switch,withRouter,Redirect,Link,useHistory} from 'react-router-dom';


const ConfirmOrderBy = props =>{

        return (
        <div className="">
            <div>Do You Want To Login/SignUp?</div>
            <a href="#">Login </a>|<a href="#"> SignUp</a>
            <br/>
            <Link to={{pathname:'/user/confirmorder/finalstage'}}>I want to Continue without Login/SingUp</Link>
        </div>
        );
    } 

export default ConfirmOrderBy;





