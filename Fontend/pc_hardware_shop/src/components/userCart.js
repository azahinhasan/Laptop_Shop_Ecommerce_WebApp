import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from 'axios';
import classes from './productsList.css';
import {Route,Switch,withRouter,Redirect,Link,useHistory} from 'react-router-dom';

const Cart = props =>{
    const [cart, setCart] = useState([JSON.parse(localStorage.getItem("CartData"))]);
    const [continueOrder,setContinueOrder]=useState(false);
    let totalSum=0;
    console.log(cart);


        const deleteFromCart=(v)=>{
            console.log(v,'ID')

            let val=[...JSON.parse(localStorage.getItem("CartData"))];

            var index = val.findIndex(e=>e[0].ID==v);
            if (index > -1) { 
                val.splice(index, 1);
                console.log('de;eted');
            }
            localStorage.setItem("CartData", JSON.stringify(val));
            //setCart(val);
            window.location.reload(false);
        }



        let pageData = '';
        let userInfo='';

        if(continueOrder==true){
            // userInfo=(
                // <table className={classes.customers}>
                //     <tr >
                //         <td>Phone</td>
                //         <td><input/></td>
                //     </tr>
                //     <tr>
                //         <td>Name</td>
                //         <td><input/></td>
                //     </tr>
                //     <tr>
                //         <td>Address</td>
                //         <td><input/></td>
                //     </tr>
                //     <tr>
                //         <td></td>
                //         <td> <button>Confirm</button></td>
                //     </tr>
                // </table>

            // )

        }
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
                                                <td><button onClick={()=>deleteFromCart(data[0].ID)}>☓</button></td>
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
                        {/* <td><button onClick={()=>setContinueOrder(true)}>Continue</button></td> */}
                        <td><Link to={{pathname:'/user/confirmorderby'}}>Continue</Link></td>
                    </tr>

                </table>

            )
        }else{
            pageData=( <p>Cart Is Empty!</p>)
            
        }
        return (
            
        <div className="">

            <h1>Your Cart</h1>
            <br/>

            <hr/>
            <br/>
            {pageData}
        </div>

        );

       
    } 

export default withRouter(Cart);





