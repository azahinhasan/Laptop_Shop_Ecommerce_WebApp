import React,{useState,useEffect} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from '../Orders/orders.css';
import axios from '../../api/axios';
import PromoEdit from './promocodeEdit';
import PromoAdd from './promocodeAdd';

const PromoList = props =>{
    
    const [allPromos, setAllPromos]=useState([]);
    const [promoEditBar, setAllPromoEditBar]=useState(-1);
    const [promoAddBar, setAllPromoAddBar]=useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData=()=>{

    axios.get('/pormolist/').then(r=>{
       // console.log(r.data);
        setAllPromos(r.data);
        })
        }

        const prmoEditHandler=(id)=>{
            setAllPromoEditBar(id);
        }


        let promoEdit ='';
        let promoAdd ='';
        if(promoEditBar!=-1){
           // setAllPromoAddBar(false);
            promoEdit=<PromoEdit  hideOption={()=>setAllPromoEditBar(-1)}  promoID={promoEditBar}  reLoad={loadData}/>
        }else{
            promoEdit='';
        }

        if(promoAddBar){
        //setAllPromoEditBar(-1);
        promoAdd=<PromoAdd hideOption={()=>setAllPromoAddBar(false)}  reLoad={loadData}/>
        }else{
            promoAdd='';
        }


    return (
        <div className={''}>
            {promoEdit}
            {promoAdd}
            <br/>
            <table className={classes.table}>
                <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> <button  hidden={promoAddBar?true:false} style={{ fontSize:'15px',width:'80px',height:'35px'}}  onClick={()=>setAllPromoAddBar(true)}>+ADD</button></td>
                    </tr>
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
                            <td><a     onClick={()=>prmoEditHandler(data.ID)} >Edit</a></td>
                        </tr>
                        )
                    })}
            </table>
        

        
        </div>
    );
    } 

export default PromoList;





