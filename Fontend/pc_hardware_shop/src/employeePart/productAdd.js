import axios from '../api/axios';
import React, { useState } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from './employee.css';

const ProductAdd = props =>{
    

    const [spacification,setSpacificationData]=useState('1');
    const [pName,setpName]=useState('');
    const [Price,setPrice]=useState('');
    const [Status,setStatus]=useState('');
    const [BrandID,setBrandID]=useState('');
    const [SpecificationID,setSpecificationID]=useState('');
    const [MainPic,setMainPic]=useState('fx505dt-03-500x500.jpg');
    const [Pic2,setPic2]=useState('');
    const [Pic3,setPic3]=useState('');

    const [Manufacturing_Warranty,setManufacturing_Warranty]=useState('');
    const [Processor,setProcessor]=useState('');
    const [Colors,setColors]=useState('');
    const [Display,setDisplay]=useState('');
    const [Memory,setMemory]=useState('');
    const [Storage,setStorage]=useState('');
    const [Graphics,setGraphics]=useState('');
    const [OS,setOS]=useState('');
    const [Battery,setBattery]=useState('');
    const [Adapter,setAdapter]=useState('');
    const [Audio,setAudio]=useState('');
    const [Keyboard,setKeyboard]=useState('');
    const [WebCam,setWebCam]=useState('');
    const [Capacity,setCapacity]=useState('');
    const [Form_Factor,setForm_Factor]=useState('');
    const [Flash_Type,setFlash_Type]=useState('');
    const [Interface,setInterface]=useState('');


    const addProductCatagoryLink=(pID)=>{
        axios.post('/products',{
            pID,BrandID
        })
        .then(r=>{
            addProduct(r.data);
            console.log(r.data);
        }).catch(e=>{
            console.log(e);
        })
    }

    const addProduct=(SpecificationID)=>{
        axios.post('/products',{
            pName,Price,Status,BrandID,SpecificationID,MainPic,Pic2,Pic3
        })
        .then(r=>{
            //addProductCatagoryLink(r.data);
            console.log(r.data);
        }).catch(e=>{
            console.log(e);
        })
    }

    const addProductSpacification=()=>{
        axios.post('/products/spacification',{
            Processor,
            Colors,Display,Memory,Storage,Graphics,OS,Battery,Adapter,Audio,Keyboard,WebCam
        })
        .then(r=>{
            addProduct(r.data);
            console.log(r.data);
        }).catch(e=>{
            console.log(e);
        })
    }

    let spacificationData='';

    if(spacification === "1"){ //Laptop
        spacificationData=(
            <div>
                <table  className={classes.Form}>
                    <tr>
                        <td>Processor </td>
                        <td><input onChange={(event)=>{setProcessor(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Colors </td>
                        <td><input onChange={(event)=>{setColors(event.target.value)}} ></input></td>
                    </tr>
                    <tr>
                        <td>Display </td>
                        <td><input onChange={(event)=>{setDisplay(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Memory </td>
                        <td><input onChange={(event)=>{setMemory(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Storage </td>
                        <td><input onChange={(event)=>{setStorage(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Graphics </td>
                        <td><input onChange={(event)=>{setGraphics(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>OS </td>
                        <td><input onChange={(event)=>{setOS(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Battery </td>
                        <td><input onChange={(event)=>{setBattery(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Adapter </td>
                        <td><input onChange={(event)=>{setAdapter(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Audio </td>
                        <td><input onChange={(event)=>{setAudio(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Keyboard </td>
                        <td><input onChange={(event)=>{setKeyboard(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>WebCam </td>
                        <td><input onChange={(event)=>{setWebCam(event.target.value)}}></input></td>
                    </tr>
                </table>
            </div>
        )
    }
    else if(spacification === "2"){ //RAM
        spacificationData=(
            <div>
                <table className={classes.Form}>
                    <tr>
                        <td>Ram Type </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Ram Capacity </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Flash Type </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Ram Frequency </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Ram Operating voltage</td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Ram Latency </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Ram Pin </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Warranty </td>
                        <td><input></input></td>
                    </tr>
                </table>
            </div>
        )

    }



    return (
        <div className={classes.Product}>
        <table  className={classes.Form}> 
            <tr>
            <td>Name</td>
            <td><input  onChange={(event)=>{setpName(event.target.value)}}></input></td>
            </tr>
            <tr>
                <td> <label>Price</label></td>
                <td><input type="number" onChange={(event)=>{setPrice(event.target.value)}}></input></td>
            </tr>
            <tr>
                <td><label>Status</label></td>
                <td>
                    <select onChange={(event)=>{setStatus(event.target.value)}}>
                        <option value="In Stock">In Stock</option>
                        <option value="Out Stock">Out Stock</option>
                        <option value="Up Coming">Up Coming</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Brand</label></td>
                <td>
                    <select onChange={(event)=>{setBrandID(event.target.value)}}>
                        <option value="1">RAZER</option>
                        <option value="2">HP</option>
                        <option value="3">ASUS</option>
                        <option value="4">APPLE</option>
                        <option value="5">DELL</option>
                        <option value="6">MSI</option>
                        <option value="7">LENOVO</option>
                        <option value="8">ACER</option>
                        <option value="9">Team</option>
                        <option value="10">WESTERN DIGITAL</option>
                        <option value="11">Antec</option>
                    </select>
                </td>
            </tr>
        </table>
        <br/>
        <label>Spacification For </label>
        <select onChange={(event)=>setSpacificationData(event.target.value)}>
            <option value="1">Leptop</option>
            <option value="2">RAM</option>
            <option value="3">SSD</option>
        </select>
        <button>LOAD</button>
        <br/>
        {spacificationData}
        <button onClick={addProductSpacification}>ADD</button>
        </div>
    );
    } 

export default ProductAdd;





