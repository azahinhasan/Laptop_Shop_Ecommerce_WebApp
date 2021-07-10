import React,{ useState,useEffect} from 'react';
import classes from './orders.css';
import {Route,Switch,Link,Redirect,useParams,useHistory } from 'react-router-dom';
import axios from '../../api/axios';
import moment from 'moment'
//npm i moment --save //used for print only time or data
const AllOrders = props =>{

        const [allOrders,setAllOrders]=useState([]);
        const [currentStatus,setcurrentStatus]=useState('');
        const [validUserForAccess, setValidUserForAccess]=useState('');

        useEffect(() => {
            axios.get('/employeeAcessCheck/Orders/'+localStorage.getItem("Email")).then(r=>{
                setValidUserForAccess(r.data);
            })
        }, []);
        

        useEffect(() => {
            axios.get('/orders/').then(r=>{
                setAllOrders(r.data);
                //setcurrentStatus(r.data.StatusTables[0]);
                console.log(r.data,"Orders");
            })
            
        }, []);


            
        return (
        <div  className={''}>

        {validUserForAccess=='Valid'?
            <div>
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
                <tr key={data.ID}>
                    <td>{data.ID}</td>
                    <td>{data.Name}</td>
                    <td>{moment(data.OrderedData).format('MMMM Do YYYY')}</td>
                    <td>{data.StatusTables[0].Status}</td>
                    <td><Link to={{pathname:'/user/EmployeeHome/orderDetails/'+data.ID}}>go</Link></td>
                </tr>
                )
            })}
            </table>
            </div>
        :<h3 style={{color:'red'}}>You Donn't Have Access!!!</h3>}

        </div>
        );
    } 

export default AllOrders;





