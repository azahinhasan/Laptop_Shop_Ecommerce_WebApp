import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from 'axios';
import classes from './productsList.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory} from 'react-router-dom';

const Cart = props =>{
    const [cart, setCart] = useState([JSON.parse(localStorage.getItem("CartData"))]);
    let totalSum=0;
     console.log(cart);


        let pageData = '';

        if(cart!=''){
            pageData=( <table  className={classes.customers}>
                    {
                        
                     cart.map(data=>{
                            return(
                                data.map((data,i)=>{
                                    totalSum= (parseInt(data[0].Product.Price.replace(/,/g, '')) * data[1].quantity)+totalSum;
                                    if(data!=null){
                                        return(
                                            <tr key={data[0].ID}>
                                                <td>{data[0].Product.pName}</td>
                                                <td>{data[0].Product.Price}</td>
                                                <td>{data[1].quantity}</td>
                                                <td>
                                                    {
                                                    parseInt(data[0].Product.Price.replace(/,/g, '')) * data[1].quantity
                                                    
                                                    }
                                                </td>
                                                <td>*</td>
                                            </tr>
                                        
                                        )
                                    }
                                })
                            )
                        })
                    }

                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total: </td>
                        <td>{totalSum}</td>
                        <td></td>
                    </tr>
                </table>
            )
        }else{
            pageData=( <p>Cart Is Empty!</p>)
            
        }
        return (
            
          <div className="">

        <p>Cart</p>
                {pageData}
          </div>
        );

       
    } 

export default withRouter(Cart);





