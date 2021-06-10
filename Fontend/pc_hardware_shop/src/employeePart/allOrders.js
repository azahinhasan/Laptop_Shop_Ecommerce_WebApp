import React,{ useState,useEffect} from 'react';
import classes from './employee.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory } from 'react-router-dom';
import axios from '../api/axios';

const AllOrders = props =>{

        const [allOrders,setAllOrders]=useState([]);

        useEffect(() => {
            axios.get('/orders/users').then(r=>{
                setAllOrders(r.data);
                console.log(r.data,"Orders");
            })
            
        }, [])
        return (
        <div  className={classes.Product}>
            <p>All Oeders</p>
            <table>
            {allOrders.map(data=>{
            return( 
            <tr>
                    <td>{data.Name}</td>
                </tr>
                )
            })}
            </table>
        </div>
        );
    } 

export default AllOrders;





