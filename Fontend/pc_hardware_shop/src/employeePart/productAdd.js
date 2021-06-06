import axios from '../api/axios';
import React, { useState } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from './employee.css';

const ProductAdd = props =>{
    

    const [spacification,setSpacificationData]=useState('1');
    const [pName,setpName]=useState('');
    const [Price,setPrice]=useState('');
    const [Status,setStatus]=useState('In Stock');
    const [BrandID,setBrandID]=useState('');
    const [SpecificationID,setSpecificationID]=useState('');
    const [MainPic,setMainPic]=useState('fx505dt-03-500x500.jpg');
    const [Pic2,setPic2]=useState('');
    const [Pic3,setPic3]=useState('');
    //LepTop
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
    //RAM
    const [Ram_Type,setRam_Type]=useState('');
    const [Ram_Capacity,setRam_Capacity]=useState('');
    const [Ram_Operating_voltage,setRam_Operating_voltage]=useState('');
    const [Ram_Latency,setRam_Latency]=useState('');
    const [Ram_Pin,setRam_Pin]=useState('');
    const [Ram_Frequency,setRam_Frequency]=useState('');


    const addProductCatagoryLink=(pID)=>{
        axios.post('/productsConnectWithBrand',{
            pID,
            pCategory:Number(spacification)
        })
        .then(r=>{
            console.log(r.data,"dta");
        }).catch(e=>{
            console.log(e);
        })
    }

    const addProduct=(SpecificationID)=>{
        console.log('addProduct')
        axios.post('/products',{
            pName,Price,Status,BrandID,SpecificationID,MainPic,Pic2,Pic3
        })
        .then(r=>{
            addProductCatagoryLink(r.data);
            console.log(r.data);
        }).catch(e=>{
            console.log(e);
        })
    }

    const addProductSpacification=()=>{
        console.log('addProductSpacification')
        if(spacification === "1"){
            axios.post('/products/spacification',{
                Processor,
                Colors,Display,Memory,Storage,Graphics,OS,Battery,Adapter,Audio,Keyboard,WebCam,Manufacturing_Warranty
            })
            .then(r=>{
                addProduct(r.data);
                console.log(r.data);
            }).catch(e=>{
                console.log(e);
            })
        }else if(spacification === "3"){
            axios.post('/products/spacification',{
                Ram_Type, Ram_Capacity, Ram_Operating_voltage, Ram_Latency, Ram_Pin, Ram_Frequency,Manufacturing_Warranty
            })
            .then(r=>{
                addProduct(r.data);
                console.log(r.data);
            }).catch(e=>{
                console.log(e);
            })

        }else if(spacification === "3"){

        }

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
                    <tr>
                        <td>Warranty </td>
                        <td><input onChange={(event)=>{setManufacturing_Warranty(event.target.value)}}></input></td>
                    </tr>
                </table>
                <br/>
            </div>
        )
    }
    else if(spacification === "3"){ //RAM
        spacificationData=(
            <div>
                <table className={classes.Form}>
                    <tr>
                        <td>Ram Type </td>
                        <td><input  onChange={(event)=>{setRam_Type(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Capacity </td>
                        <td><input onChange={(event)=>{setRam_Capacity(event.target.value)}}></input></td>
                    </tr>
                    {/* <tr>
                        <td>Flash Type </td>
                        <td><input onChange={(event)=>{setRam_Operating_voltage(event.target.value)}}></input></td>
                    </tr> */}
                    <tr>
                        <td>Ram Frequency </td>
                        <td><input onChange={(event)=>{setRam_Frequency(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Operating voltage</td>
                        <td><input onChange={(event)=>{setRam_Operating_voltage(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Latency </td>
                        <td><input onChange={(event)=>{setRam_Latency(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Pin </td>
                        <td><input onChange={(event)=>{setRam_Pin(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Warranty </td>
                        <td><input onChange={(event)=>{setManufacturing_Warranty(event.target.value)}}></input></td>
                    </tr>
                </table>
                <br/>
               
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
            <option value="3">RAM</option>
            <option value="2">SSD</option>
        </select>
        <button>LOAD</button>
        <br/>
        {spacificationData}
        <button onClick={addProductSpacification}>ADD</button>
        </div>
    );
    } 

export default ProductAdd;





