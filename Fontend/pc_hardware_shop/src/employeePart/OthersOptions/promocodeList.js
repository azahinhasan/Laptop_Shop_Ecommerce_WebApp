import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../Orders/orders.css';
import axios from '../../api/axios';
import PromoEdit from './promocodeEdit';


const PromoList = props =>{
    
    const [allPromos, setAllPromos]=useState([]);
    const [promoEditBar, setAllPromoEditBar]=useState(-1);


    useEffect(() => {
        loadData();
    }, []);

    const loadData=()=>{

    axios.get('/pormolist/').then(r=>{
        console.log(r.data);
        setAllPromos(r.data);
        })
        }

        const prmoEditHandler=(id)=>{
            setAllPromoEditBar(id);
        }


        let promoEdit ='';
        if(promoEditBar!=-1){
            promoEdit=<PromoEdit promoID={promoEditBar}/>
        }else{
            promoEdit='';
        }
    return (
        <div className={''}>
            {promoEdit}
            <table className={classes.table}>
                    <tr>
                        <th>PromoCode</th>
                        <th>UsageLeft</th>
                        <th>Offer(%)</th>
                        <th>ExpiryDate</th>
                        <th>Action</th>
                    </tr>
                    {allPromos.map(data=>{
                        console.log(data,'daa')
                        return(
                        <tr>
                            <td>{data.PromoCode1}</td>
                            <td>{data.UsageLeft}</td>
                            <td>{data.OfferInPercentage}</td>
                            <td>{data.ExpiryDate ==null?'none':data.ExpiryDate}</td>
                            <td><a   onClick={()=>prmoEditHandler(data.ID)} >Edit</a></td>
                        </tr>
                        )
                    })}
            </table>
        

        
        </div>
    );
    } 

export default PromoList;





