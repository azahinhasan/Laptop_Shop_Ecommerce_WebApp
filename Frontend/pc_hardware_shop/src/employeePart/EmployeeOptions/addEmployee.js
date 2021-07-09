import axios from '../../api/axios';
import React, { useState } from 'react';
import {Route,Switch,useHistory,Redirect,Link} from 'react-router-dom';
import classes from './employee.css';


const EmployeeAdd = props =>{

   const history = useHistory();

   const [spacification,setSpacificationData]=useState('1');
   const [Name,setName]=useState('');
   const [Email,setEmail]=useState('');
   const [Phone,setPhone]=useState('');
   const [Gender,setGender]=useState('male');
   const [Rank,setRank]=useState('admin');
   const [UploadedID,setUploadedID]=useState('0');
   const [msg,setmsg]=useState('');



   const addEmployee=()=>{
      axios.post('/addEmployee/'+Rank,{
         Name,Email,Phone,Gender
      })
      .then(r=>{
            setmsg(r.data);

            if(r.data!='Please Fill Up All InputBox!' && r.data!='Email Already Taken!'){
               history.push('/user/EmployeeHome/NewEmployeeInfo/'+r.data);
            }
            console.log(r.data);
      }).catch(e=>{
            setmsg('Please Fill Up All InputBox!');
            console.log(e);
      })
   }

   return (
      <div className={''}>
      <h2>ADD Employee PAGE</h2>
      <br/>
         <span style={{color:'red'}}>{msg}</span>
      <br/>

      <br/>
      <table className={classes.tableAddEmployee}> 
            <tr>
               <td>Name: </td>
               <td><input type='name'  onChange={(event)=>{setName(event.target.value)}}></input></td>
            </tr>
            <tr>
               <td> 
                  <label>Email: </label>
               </td>
               <td><input type="text" onChange={(event)=>{setEmail(event.target.value)}}></input></td>
            </tr>
            <tr>
               <td> 
                  <label>Phone: </label>
               </td>
               <td><input type="text" onChange={(event)=>{setPhone(event.target.value)}}></input></td>
            </tr>
            <tr>
               <td> 
                  <label>Gender: </label>
               </td>
               <td>
                  <select onChange={(event)=>{setGender(event.target.value)}}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                  </select>
               </td>
            </tr>
            <tr>
               <td><label>Rank: </label></td>
               <td>
                  <select onChange={(event)=>{setRank(event.target.value)}}>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="deliveryIncharge">Delivery Incharge</option>
                  </select>
               </td>
            </tr>
      </table>
      <br/>
      <button onClick={addEmployee} style={{width:'450px',borderRadius:'5px'}}>SAVE</button>
      </div>
   );
   } 

export default EmployeeAdd;





