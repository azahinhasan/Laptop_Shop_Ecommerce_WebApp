import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../Orders/orders.css';
import axios from '../../api/axios';
import moment from 'moment'



const PromoAdd = props =>{
    
    const [allPromos, setAllPromos]=useState([]);
    const [PromoCode1, setPromoCode1]=useState();
    const [UsageLeft, setUsageLeft]=useState();
    const [OfferInPercentage, setOfferInPercentage]=useState();
    const [ExpiryDate, setExpiryDate]=useState(null);
    const [msg, setMsg]=useState();


  const resetFild =()=>{
    setPromoCode1('');
    setUsageLeft('');
    setOfferInPercentage('');
    setExpiryDate('');

  }


     const prmoEditHandler =()=>{
      axios.post('/pormolist/',{
            PromoCode1,UsageLeft,OfferInPercentage,ExpiryDate
      }).then(r=>{
              setMsg(r.data);
                props.reLoad();
            
      }).catch(e=>{
        setMsg('PROMO ADDING FAILED!');
        console.log(e);
      })
     }

    return (
        <div style={{backgroundColor:'#F6DDCC ' , borderRadius:'5px',marginBottom:'5%'}}>
            <button onClick={props.hideOption} style={{float:'right',width:'30px',height:'25px'}}>X</button>
              <p>ADD DATA </p>
  
            <p style={{color:'blue'}}>{msg}</p>
            <table className={classes.table}>
                    <tr>
                            <td><input value={PromoCode1}  onChange={e=>setPromoCode1(e.target.value)}/></td>
                            <td><input value={UsageLeft}  onChange={e=>setUsageLeft(e.target.value)}/></td>
                            <td><input value={OfferInPercentage}  onChange={e=>setOfferInPercentage(e.target.value)}/></td>
                            <td><input type="date" value={moment(ExpiryDate).format('YYYY-MM-DD')}  onChange={e=>setExpiryDate(e.target.value)}/></td>
                            <td>
                              <input type="submit"  onClick={()=>prmoEditHandler()}  value="ADD"/ >
                                <br/>
                                <input type="submit"  onClick={()=>resetFild()}  value="RESET"/ >
                              </td>
                        </tr>
            </table>
        

        
        </div>
    );
    } 

export default PromoAdd;





