   import React,{ useState,useEffect} from 'react';
   import classes from './orders.css';
   import {Route,Switch,Link,Redirect,useParams,useHistory } from 'react-router-dom';
   import axios from '../../api/axios';
   import moment from 'moment'
   //npm i moment --save //used for print only time or data
   const OrderListUser = props =>{

         const [allOrders,setAllOrders]=useState([]);
         const [currentStatus,setcurrentStatus]=useState('');

         useEffect(() => {
               axios.get('/userOrders/'+localStorage.getItem("Email")).then(r=>{
                  setAllOrders(r.data);
                  //setcurrentStatus(r.data.StatusTables[0]);
                  console.log(r.data,"Orders");
               })
               
         }, []);

         let pageData='';
   
            if(allOrders==''){
               pageData=<h3>You did not made any order!</h3>
            }
            else{
               pageData=(<div>
               <table className={classes.table}>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Order Date</th>
                     <th>Status</th>
                     <th>Deatils</th>
                  </tr>
               {allOrders.map(data=>{
               return( 
                  <tr>
                     <td>{data.ID}</td>
                     <td>{data.Name}</td>
                     <td>{moment(data.OrderedData).format('MMMM Do YYYY')}</td>
                     <td>{data.StatusTables[0].Status}</td>
                     <td><Link to={{pathname:'/user/profileHome/ordersDetails/'+data.ID}}>go</Link></td>
                  </tr>
                  )
               })}
               </table>
               </div>)
            }   
         return (
         <div  className={''}>
               <p>All Oeders</p>
               {pageData}
         </div>
         );
      } 

   export default OrderListUser;





