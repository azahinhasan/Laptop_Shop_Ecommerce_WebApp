import React,{ useState,useEffect} from 'react';
import classes from './orders.css';
import {Route,Link,useParams,useHistory } from 'react-router-dom';
import axios from '../../api/axios';
import moment from 'moment'
//npm i moment --save //used for print only time or data

const AllOrders = props =>{

        const [userInfo,setUserInfo]=useState([]);
        const [orders,setOrders]=useState([]);
        const [orderID,setOrderID]=useState('');
        const [currentStatus,setcurrentStatus]=useState('');
        const [comment,setComment]=useState('');
        const {id}= useParams();
        const history = useHistory();

        useEffect(() => {
            loadData();
        }, []);

        const loadData=() => {
            axios.get('/orders/'+id).then(r=>{
                setUserInfo(r.data);
                setOrders(r.data.AllOrders);
                setcurrentStatus(r.data.StatusTables[0]);
                setComment(r.data.StatusTables[0].FailedReason);
                setOrderID(r.data.ID);
                console.log(r.data,"deatils");
            })
            
        };

        const printOrders=()=>{
            history.push('/user/printReceipt/'+orderID);
        }
        

            
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
                    <td>{currentStatus.Status}</td>
                </tr>
                
            </table>

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
                    <th>Status</th>
                </tr>
                
            {orders.map(data=>{
            return( 
                <tr>
                    <td><Link  to={{pathname:'/info/'+data.ProductCategoryLink.Category.cName+'/'+data.ProductCategoryLink.Product.ID}} target="_blank" rel="noopener noreferrer">{data.ProductCategoryLink.Product.pName}</Link></td>
                    <td>{data.ProductCategoryLink.Product.Price}</td>
                    <td>{data.ProductCategoryLink.Product.Brand.bName}</td>
                    <td>{data.ProductCategoryLink.Category.cName}</td>
                    <td>{data.Quantity}</td>
                    <td>{data.ProductCategoryLink.Product.Status}</td>
                </tr>
                )
            })}
            </table>
            <br/>
            <h4>Note</h4>
            <textarea type="text" disabled value={comment} onChange={e=>setComment(e.target.value)}/>
            <br/>
            <button onClick={printOrders}>PRINT</button>
            <button onClick={printOrders} disabled={currentStatus.Status!='none'?true:false}>CANCLE ORDER</button>
            <br/> <br/>
            <p style={{color:'red'}}>You Only Can Cancle your order if Status is : None</p>
        </div>
        );
    } 

export default AllOrders;





