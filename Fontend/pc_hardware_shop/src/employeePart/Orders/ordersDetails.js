import React,{ useState,useEffect} from 'react';
import classes from './orders.css';
import {Route,Switch,Link,Redirect,useParams,useHistory } from 'react-router-dom';
import axios from '../../api/axios';
import moment from 'moment'
//npm i moment --save //used for print only time or data

const AllOrders = props =>{

        const [userInfo,setSetUserInfo]=useState([]);
        const [orders,setOrders]=useState([]);
        const [status,setStatus]=useState('');
        const {id}= useParams();

        useEffect(() => {
            loadData();
        }, []);

        const loadData=() => {
            axios.get('/orders/'+id).then(r=>{
                setSetUserInfo(r.data);
                setOrders(r.data.AllOrders);
               // console.log(r.data,"deatils");
            })
            
        };
        
        const changeStatus=(status) => {
            axios.post('/changeStatus/'+id+'/'+status).then(r=>{
                //console.log(r.data);
                setStatus(r.data);
                loadData();
                
            })
            
        };


            
        return (
        <div  className={''}>
            <h4>User Information</h4>
            <table className={classes.table}>
                <tr>
                    <td>OrderID</td>
                    <td>{userInfo.ID}</td>
                    <td>Name</td>
                    <td>{userInfo.Name}</td>
                    <td>Phone</td>
                    <td>{userInfo.Phone}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{userInfo.Country}</td>
                    <td>City</td>
                    <td>{userInfo.City}</td>
                    <td>PostCode</td>
                    <td>{userInfo.PostCode}</td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>{userInfo.State}</td>
                    <td>OrderedData</td>
                    <td>{userInfo.OrderedData}</td>
                    <td>Status</td>
                    <td>{userInfo.Status}</td>
                </tr>
                
            </table>
            <br/>
            <p style={{color:'blue',fontWeight:'bold'}}>{status!=''?'Status Chnage to '+status:null}</p>
            <br/>
            <button onClick={()=>changeStatus('none')} className={classes.button}>NO ACTION</button>
            <button onClick={()=>changeStatus('done')} className={classes.button+" "+classes.buttonGreen}>DONE</button>
            <br/>
            <button onClick={()=>changeStatus('inprogress')} className={classes.button+" "+classes.buttonYellow}>IN PROGRESS</button>
            <button onClick={()=>changeStatus('failed')} className={classes.button+" "+classes.buttonRed}>FAIED</button>
            <br/>
            <h4>Orders Information</h4>
            <br/>
            <table className={classes.table}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Quantity</th>
                </tr>
                
            {orders.map(data=>{
            return( 
                <tr>
                    <td>{data.ProductCategoryLink.Product.pName}</td>
                    <td>{data.ProductCategoryLink.Product.Price}</td>
                    <td>{data.ProductCategoryLink.Product.Brand.bName}</td>
                    <td>{data.ProductCategoryLink.Category.cName}</td>
                    <td>{data.Quantity}</td>
                </tr>
                )
            })}
            </table>
        </div>
        );
    } 

export default AllOrders;





