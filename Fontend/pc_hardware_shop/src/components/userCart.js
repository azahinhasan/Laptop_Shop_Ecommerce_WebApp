import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from 'axios';
import classes from './productsList.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory} from 'react-router-dom';

const Cart = props =>{
    const [cart, setCart] = useState([JSON.parse(localStorage.getItem("CartData"))]);


     console.log(cart);


        let pageData = '';

        if(cart!=''){
            pageData=( <table>
                    {
                     cart.map(data=>{
                            return(
                                data.map((data,i)=>{
                                    
                                    if(data!=null){
                                        console.log(data, 'dddd');
                                        return(
                                        
                                            <tr>
                                                <td>{data[0].Product.pName}</td>
                                                <td>{data[0].Product.Price}</td>
                                                <td>{data[1].quantity}</td>
                                                
                                            </tr>
                                                
                                        
                                                
                                        
                                        )
                                    }
                                })
                            )
                        })
                    }
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





