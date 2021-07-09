import React, {  Component } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import axios from './api/axios'

import Classes from './App.css';
import HomePage from './components/homePage';
import SearchPage from './components/searchedResults';
import ProductsList from './components/productsList';
import ProductInfo from './components/productInfo';
import NavBar from './components/navBar';
import Cart from './components/userCart';
import ConfirmOrderBy from './components/confirmOrderBy';
import ConfirmOrder from './components/confirmOrder';
import Login from './components/loginPage';
import Logout from './components/logOut';
import SignUp from './components/signUp';
import EmployeeHOme from './employeePart/employeeHome';
import UserProfileHome from './components/userProfile/profileHome';
import PrintPdf from './components/print/htmlToPdf2';
class App extends Component {

  state={
    userValid:false,
   
  }

  setUserValid(value){
    this.setState({userValid:value});
  }
  
   checkValidity(digit){
    axios.post('/login/verify',{
        Email: localStorage.getItem("Email"),
        Token:localStorage.getItem("Token")
    }).then(r=>{
        console.log(r.data,'UserVarify');
        if(r.data=="OK"){
            this.setUserValid(true);

        }else{
          this.setUserValid(false);
            if(digit==0){
                //history.push('/home');
                //history.push('/user/logout');
                this.props.history.push("/user/logout'");
            }
            else if(digit==1){
                //history.push('/user/logout');
                this.props.history.push("/user/logout'");
            }
        
        }
    }).catch(e=>{
        console.log(e);
    })
}

  componentDidMount(){
    this.checkValidity(0)
  }
  
  render() {

    
    return (
      <div className={Classes.App}>
        <NavBar/>
        <Switch>
            <Route path="/home" component={HomePage}/> 
            <Route path="/list/:category" component={ProductsList}/> 
            <Route path="/info/:category/:id" component={ProductInfo}/>
            <Route path="/user/cart" component={Cart}/>
            <Route path="/user/confirmorderBy" component={ConfirmOrderBy}/>
            <Route path="/user/confirmorder/finalstage" component={ConfirmOrder}/>
            <Route path="/user/login" component={Login}/>
            <Route path="/user/logout" component={Logout}/>
            <Route path="/user/signup" component={SignUp}/>
            <Route path="/user/printReceipt/:orderedid" component={PrintPdf}/>
            <Route path="/product/search" component={SearchPage}/>

            <Route path="/user/EmployeeHOme/" component={EmployeeHOme}/>
            {this.state.userValid?
            
            <Route path="/user/profileHome" component={UserProfileHome}/>:null}
            

            <Redirect to="/home"/>
        </Switch>
      </div>
      
    );
  }
}

export default withRouter(App); //withRouter will rendered tha page wehn route cnage





//auth for all user
//admin can change the rank access
//admin can resate the acess

//backend auth
//hanlder employee access

//add product validationm
/** BuG **/
//OrderDetails product info page error
