import axios from '../../api/axios';
import React, { useState,useEffect } from 'react';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';
import classes from './orders.css';

const UpdatePassword = props =>{

      const [currentPass,setCuttentPass]=useState('0');
      const [newPass,setNewPass]=useState('0');
      const [msg,setMsg]=useState('');

      const updatePass=()=>{
         axios.post('/updatePass/'+currentPass+'/'+newPass+'/'+localStorage.getItem('Email')).
         then(r=>{
            setMsg(r.data);
         })
      }
   return (
      <div className={''}>
         <h3>Update Password</h3>
         <from>
            <table className={classes.tableUpdatePass}>
               <tr>
                  <td>Current Password: </td>
                  <td><input onChange={e=>setCuttentPass(e.target.value)}/></td>
               </tr>
               <tr>
                  <td>New Password: </td>
                  <td><input onChange={e=>setNewPass(e.target.value)}/></td>
               </tr>

            </table>

            <br/>
            <div style={{color:'blue'}}>{msg}</div>
            <br/>
            <button style={{width:'350px',borderRadius:'5px'}}
            onClick={updatePass}

            >SUBMIT</button>
         </from>

      </div>
   );
   } 

export default UpdatePassword;





