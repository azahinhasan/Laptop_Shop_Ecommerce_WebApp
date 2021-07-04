import React,{useState} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import axios from '../../api/axios';
import classes from './employee.css';
const EmployeeAccess = props =>{
    
   const [serach,setSearch]=useState('');
   const [userInfoData,setUserInfoData]=useState('');
   const [userInfoDataRank,setUserInfoDataRank]=useState('');

   const [Employee,setEmployee]=useState('');
   const [Products,setProducts]=useState('');
   const [Orders,setOrders]=useState('');
   const [Others,setOthers]=useState('');


   const userInfo=()=>{
      axios.get('/employeeAcess/'+serach).then(r=>{
         setUserInfoData(r.data);
         setUserInfoDataRank(r.data.EmployeeRank);

         setEmployee(r.data.EmployeeRank.Employee);
         setProducts(r.data.EmployeeRank.Products);
         setOrders(r.data.EmployeeRank.Orders);
         setOthers(r.data.EmployeeRank.Others);

         console.log(r.data);
      })
   }

   return (
      <div className={''}>
         <input onChange={e=>setSearch(e.target.value)}></input>
         <br/>
         <button onClick={userInfo}>SEARCH</button>

         <br/>
         <h3>Employee Information</h3>
         <br/>
         <div>
            <table  className={classes.table}>
            <tr>
               <td>ID</td>
               <td>{userInfoData.ID}</td>
               <td>Name</td>
               <td>{userInfoData.Name}</td>
            </tr>
            <tr>
               <td>Email</td>
               <td>{userInfoData.Email}</td>
               <td>Rank</td>
               <td>{userInfoDataRank.Rank}</td>
            </tr>
            </table>
            <br/>
            <h3>Employee Access</h3>
            <br/>
            <div>
               <span>
                  Employee Part: 
                  <select onChange={e=>setEmployee(e.target.value)} value={userInfoDataRank.Employee}>
                     <option value='true'>TRUE</option>
                     <option value='false'>FALSE</option>
                  </select>
               </span>
               <span>
                  Product Part: 
                  <select onChange={e=>setProducts(e.target.value)} value={userInfoDataRank.Products}>
                     <option value='true'>TRUE</option>
                     <option value='false'>FALSE</option>
                  </select>
               </span>
               <br/>
               <span>
                  Orders Part: 
                  <select onChange={e=>setOrders(e.target.value)} value={userInfoDataRank.Orders}>
                     <option value='true'>TRUE</option>
                     <option value='false'>FALSE</option>
                  </select>
               </span>
               <span>
                  Others Part: 
                  <select onChange={e=>setOthers(e.target.value)} value={userInfoDataRank.Others}>
                     <option value='true'>TRUE</option>
                     <option value='false'>FALSE</option>
                  </select>
               </span>
               <br/>
               <button>SAVE</button>
            </div>
         </div>
      </div>
   );
   } 

export default EmployeeAccess;





