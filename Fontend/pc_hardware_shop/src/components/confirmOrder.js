import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import classes from './productsList.css';
import {Link,Redirect} from 'react-router-dom';
//useContext in the header
import axios from 'axios';
//import GoogleMapReact from 'google-map-react';



const ConfirmOrder = props =>{
    const [cart, setCart] = useState([JSON.parse(localStorage.getItem("CartData"))]);
    const [continueOrder,setContinueOrder]=useState(false);
    let totalSum=0;
    const [Name,setName]=useState('');
    const [Phone,setPhone]=useState('');
    const [City,setCity]=useState('');
    const [State,setState]=useState('');
    const [Country,setCountry]=useState('');
    const [PostCode,setPostCode]=useState('');
    const [OrderInProgress,setOrderInProgress]=useState(false);
    const [OrderDone,setOrderDone]=useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const [promoErrorMsg,setPromoErrorMsg]=useState('');
    const [prmoCode,setPromoCode]=useState('');
    const [prmoCodeOffer,setPromoCodeOffer]=useState(0);
    const [orderUserId,setOrderUserId]=useState(0);



    useEffect(()=>{
        if(Boolean(localStorage.getItem("UserVerified"))){
           // axios.get('http://localhost:3819/api/loadCustomerInfo/'+Number(localStorage.getItem("LoginID"))+'/'+localStorage.getItem("Email")).then(r=>{
            axios.get('http://localhost:3819/api/loadCustomerInfo/'+1+'/'+'a').then(r=>{
                //console.log(r.data);
                var temp = r.data;
                setName(temp.Name);
                setPhone(temp.Phone);
                setCity(temp.City);
                setPostCode(temp.PostCode);
                setState(temp.State);
                setCountry(temp.Country);
                
            })
        }
    },[])


    const confirmOrderHandler=()=>{
        if (window.confirm('Do you Want to Confirm the ORDER?')) {

            if(Name===''||Phone===''||City===''||State===''||Country===''||PostCode===''){
                setErrorMsg('Fill UP All Text Box');
            }else{

            if(prmoCodeOffer!==0){
                promoCodeVerify(1);
            }
            setErrorMsg('');
            setPromoErrorMsg('');
            setOrderInProgress(true);
            axios.post('http://localhost:3819/api/orderconfirm',{
                Name:Name,
                Phone:Phone,
                City:City,
                State:State,
                Country:Country,
                PostCode:PostCode,
                PrmoCodeOffer:prmoCodeOffer
            }).then(result =>{
                console.log(result);

                if(result.data!= null){
                    setOrderUserId(result.data);
                    for (var i = 0; i < cart[0].length; i++) {
                        let temp = cart[0][i];
                        let id=temp[0].ID;
                        let quantity=Number(temp[1].quantity);
                        let orderUserId=result.data;

                        axios.post('http://localhost:3819/api/orderconfirm/productlist',{
                            OrderdUserID:orderUserId,
                            Quantity:quantity,
                            ProductCatagoryLinkedID:id
                        })
                    }
                }
                setOrderInProgress(false);
                setOrderDone(true);
                
            }).catch((err)=>{
                console.log(err);
            });
        }}
    }

    

    const promoCodeVerify=(action)=>{
        axios.get('http://localhost:3819/api/promocodeverify/'+prmoCode+'/'+action,{
        }).then(r=>{
           //console.log(r.data);
            if(r.data!=='NotValid' && r.data!=='AlreadyUsed'){
                setPromoErrorMsg('');
                setPromoCodeOffer(Number(r.data));
                setPromoErrorMsg('PromoCode Applied');
            }else if(r.data=='AlreadyUsed'){
                setPromoErrorMsg('PromoCode Already Used!');
            }else if(r.data=='TimeExpired'){
                setPromoErrorMsg('PromoCode Time Expired!');
            }else{
                setPromoErrorMsg('PromoCode is not Valid!');
            }
            
        }).catch(e=>{
            console.log(e);
        })
    }
        let pageData="";
        if(!OrderDone){
            pageData=(
                <div>
                    <h2>Your InforMation</h2>

                    <table className={classes.table}>
                        <tr>
                            <td>Name</td>
                            <td><input value={Name} onChange={(event)=>setName(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input value={Phone}  onChange={(event)=>setPhone(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input value={City}  onChange={(event)=>setCity(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td><input value={State}  onChange={(event)=>setState(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><input value={Country}  onChange={(event)=>setCountry(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>PostCode</td>
                            <td><input value={PostCode}  onChange={(event)=>setPostCode(event.target.value)}/></td>
                        </tr>
                    </table>

                    <br/>
                    <p style={{color:'red'}}>{errorMsg}</p>
                    <br/>
                    <h2>Your Orders</h2>
                    <table  className={classes.table}>
                    {cart.map(data=>{
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
                                                {parseInt(data[0].Product.Price.replace(/,/g, '')) * data[1].quantity}
                                            </td>
                                        </tr>
                            )}}))})}
                        
                        {
                            prmoCodeOffer==0?null:
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Offer: </td>
                                <td>{(totalSum*prmoCodeOffer)/100}</td>
                            </tr>
                        }
                        <tr>
                            <td></td>
                            <td><p style={{color:'red'}}>{promoErrorMsg}</p></td>
                            <td>Total: </td>
                            <td>{totalSum-(totalSum*prmoCodeOffer)/100}</td>
                        </tr>
                    </table>



                    <br/>
                    <Link to={{pathname:'/user/cart'}}>Edit Orders</Link>
                    <br/>
                    <br/>
                    <input placeholder="Promo Code" disabled={prmoCodeOffer!=0?true:false} onChange={(event)=>setPromoCode(event.target.value)}/>
                    <button onClick={()=>promoCodeVerify(0)} disabled={prmoCodeOffer!=0?true:false}>Save</button>
                    <br/>
                    {OrderInProgress?<p>Sending...</p>:<button onClick={confirmOrderHandler}>Confirm Order</button>}
                </div>
            )
        }else{
            window.localStorage.removeItem("CartData");
            pageData=(
                <Redirect to={"/user/printReceipt/"+orderUserId}/>
            )
        }

        return (
        <div className="">
           
            {cart!=''? pageData:<h3>You Donn't have any Item in your Cart!</h3>}
           
        </div>
        );
    } 
export default ConfirmOrder;