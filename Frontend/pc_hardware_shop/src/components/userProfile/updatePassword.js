import axios from '../../api/axios';
import React, { useState,useEffect } from 'react';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';


const UpdatePassword = props =>{

      const [currentPass,setCuttentPass]=useState('');
      const [newPass,setNewPass]=useState('');
   return (
      <div className={''}>
         <h3>UpdatePassword</h3>
         <from>
            <table>
               <tr>
                  <td>Current Password: </td>
                  <td><input onChange={e=>setCuttentPass(e.target.value)}/></td>
               </tr>
               <tr>
                  <td>New Password: </td>
                  <td><input onChange={e=>setNewPass(e.target.value)}/></td>
               </tr>
            </table>
         </from>

      </div>
   );
   } 

export default UpdatePassword;





