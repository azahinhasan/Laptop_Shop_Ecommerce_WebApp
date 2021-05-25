import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
import axios from 'axios';
//import GoogleMapReact from 'google-map-react';
import classes from './productsList.css';


const SignUp = props =>{

        const [ipAddress, setIpAddress] = useState("");
        const [ipAddressDetails, setIpAddressDetails] = useState("");
        const [Name,setName]=useState('');
        const [Phone,setPhone]=useState('');
        const [City,setCity]=useState('');
        const [State,setState]=useState('');
        const [Country,setCountry]=useState('');
        const [PostCode,setPostCode]=useState('');
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [gender, setGender] = useState("");

        return (
            <div className="">
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
                            <td><input onChange={(event)=>setGender(event.target.value)}/></td>
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
                            <td><button>Submit</button></td>
                        </tr>
                </table>
            </div>
        );
    } 

export default SignUp;





