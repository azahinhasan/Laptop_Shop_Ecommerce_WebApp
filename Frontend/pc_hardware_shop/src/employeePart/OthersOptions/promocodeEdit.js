import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../Orders/orders.css';
import axios from '../../api/axios';
import moment from 'moment'



const PromoEdit = props =>{
    
    const [allPromos, setAllPromos]=useState([]);
    const [PromoCode1, setPromoCode1]=useState([]);
    const [UsageLeft, setUsageLeft]=useState([]);
    const [OfferInPercentage, setOfferInPercentage]=useState([]);
    const [ExpiryDate, setExpiryDate]=useState([]);
    const [msg, setMsg]=useState([]);
    const [deleted, setDeleted]=useState(false);

    useEffect(() => {
        loadData();
    }, []);

   const loadData=()=>{

    axios.get('/pormolist/'+props.promoID).then(r=>{
        console.log(r.data);
        setPromoCode1(r.data.PromoCode1);
        setUsageLeft(r.data.UsageLeft);
        setOfferInPercentage(r.data.OfferInPercentage);
        setExpiryDate(r.data.ExpiryDate);
        setAllPromos(r.data);
        })
     }
   
     const prmoDeleteHandler =()=>{
      axios.delete('/pormolist/'+props.promoID).then(r=>{
              console.log('Deleted');
              setDeleted(true);
              props.reLoad();
      }).catch(e=>{
          console.log(e)
      })

      

    }
  
     const prmoEditHandler =()=>{
      axios.put('/pormolist/'+props.promoID,{
            ID:props.promoID,PromoCode1,UsageLeft,OfferInPercentage,ExpiryDate
      }).then(r=>{
            if(r.data=='OK'){
              setMsg('UPDATE DONE!');
               props.reLoad();
            }
      }).catch(e=>{
        setMsg('UPDATE FAILED!');
      })
     }

     let pageData = '';
     if(!deleted){
      pageData=(
        <div>
              <p style={{color:'blue'}}>{msg}</p>
            <table className={classes.table}>
                    <tr>
                            <td><input disabled value={PromoCode1}  onChange={e=>setPromoCode1(e.target.value)}/></td>
                            <td><input value={UsageLeft}  onChange={e=>setUsageLeft(e.target.value)}/></td>
                            <td><input value={OfferInPercentage}  onChange={e=>setOfferInPercentage(e.target.value)}/></td>
                            <td><input type="date" value={moment(ExpiryDate).format('YYYY-MM-DD')}  onChange={e=>setExpiryDate(e.target.value)}/></td>
                            <td>
                              <input type="submit"  onClick={()=>prmoEditHandler()}  value="UPDATE"/ >
                                <br/>
                                <input type="submit"  onClick={()=>prmoDeleteHandler()}  value="DELETE"/ >
                            </td>
                        </tr>
            </table>
        </div>
      )
     }
     else{
       pageData=<h3>PROMO DELETED!</h3>
     }

    return (
        <div style={{backgroundColor:'#F6DDCC ' , borderRadius:'5px',marginBottom:'5%'}}>
        <button onClick={props.hideOption} style={{float:'right',width:'30px',height:'25px'}}>X</button>
            <h2>UPDATE DATA </h2>

          {pageData}
        
        </div>
    );
    } 

export default PromoEdit;





