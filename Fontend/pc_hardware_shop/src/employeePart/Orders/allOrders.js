import React,{ useState,useEffect} from 'react';
import classes from './orders.css';
import {Route,Switch,Link,Redirect,useParams,useHistory } from 'react-router-dom';
import axios from '../../api/axios';
import moment from 'moment'
//npm i moment --save //used for print only time or data
const AllOrders = props =>{

        const [allOrders,setAllOrders]=useState([]);

        useEffect(() => {
            axios.get('/orders/').then(r=>{
                setAllOrders(r.data);
                console.log(r.data,"Orders");
            })
            
        }, []);

  
            
        return (
        <div  className={''}>
            <p>All Oeders</p>

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
                    <td>{data.Status}</td>
                    <td><Link to={{pathname:'/user/EmployeeHome/orderDetails/'+data.ID}}>go</Link></td>
                </tr>
                )
            })}
            </table>
        </div>
        );
    } 

export default AllOrders;





