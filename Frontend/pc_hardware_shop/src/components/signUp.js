import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
//import axios from 'axios';
//import GoogleMapReact from 'google-map-react';
import classes from './productsList.css';
import axios from '../api/axios';

const SignUp = props =>{

        const [sucessMsg, setSucessMsg] = useState("");
        const [errorMsg, setErrorMsg] = useState("");
        const [errorMsgEmail, setErrorMsgEmail] = useState("");
        const [ipAddressDetails, setIpAddressDetails] = useState("");
        const [Name,setName]=useState('');
        const [Phone,setPhone]=useState('');
        const [City,setCity]=useState('');
        const [State,setState]=useState('');
        const [Country,setCountry]=useState('');
        const [PostCode,setPostCode]=useState('');
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [Gender, setGender] = useState("Male");

        const FormValidation=()=>{
            if(Name==''||Phone==''||City==''||State==''||Country==''||PostCode==''||email==''){
                setErrorMsg('Fill UP All Text Box');
                return false;
            }else{
                setErrorMsg('');
                return true;
            }
        }
        const SignUpHandler=()=>{
            if(FormValidation()){
                axios.post('/signup',{
                    Email:email,
                    Password:password,
                    Type:'Customer'
                }).then(r=>{
                    //console.log(r.data);
                    if(r.data == 0){
                        setErrorMsgEmail('Email Already Exist!');
                    }else{
                        setErrorMsgEmail('');
                        axios.post('/signup/customer',{
                            Name:Name,
                            Email:email,
                            Phone:Phone,
                            Gender:Gender,
                            City:City,
                            State:State,
                            Country:Country,
                            PostCode:PostCode,
                            LoginTableID:r.data
                        }).then(s=>{
                            if(s.data=='OK'){
                                setSucessMsg("SignUp Success. Please Login In Now...");
                            }
                        })
                    }
                })
        }
    }
        return (
            <div className="">
                <br/>
                <h2>SignUp Page</h2>
                <br/>
                <p style={{color:'red'}}>{errorMsg}</p>
                <p style={{color:'red'}}>{errorMsgEmail}</p>
                <p style={{color:'green'}}>{sucessMsg}</p>
                <br/>
                <table className={classes.table}>
                        <tr>
                            <td>Email</td>
                            <td><input onChange={(event)=>setEmail(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input onChange={(event)=>setPassword(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input onChange={(event)=>setName(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input  onChange={(event)=>setPhone(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <select onChange={(event)=>setGender(event.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input  onChange={(event)=>setCity(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td><input  onChange={(event)=>setState(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><input  onChange={(event)=>setCountry(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>PostCode</td>
                            <td><input  onChange={(event)=>setPostCode(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={SignUpHandler}>Submit</button></td>
                        </tr>
                </table>
            </div>
        );
    } 

export default SignUp;





