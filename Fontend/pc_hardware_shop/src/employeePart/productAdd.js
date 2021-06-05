import React, { useState } from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from './employee.css';

const ProductAdd = props =>{
    

    const [spacification,setSpacificationData]=useState('Leptop');
    const [pName,setpName]=useState('');
    const [Price,setPrice]=useState('');
    const [Status,setStatus]=useState('');
    const [BrandID,setBrandID]=useState('');
    const [SpecificationID,setSpecificationID]=useState('');
    const [MainPic,setMainPic]=useState('');
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

    let spacificationData='';

    if(spacification === "Leptop"){
        spacificationData=(
            <div>
                <table  className={classes.Form}>
                    <tr>
                        <td>Processor </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Colors </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Display </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Memory </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Storage </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Graphics </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Battery </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>Adapter </td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td>WebCam </td>
                        <td><input></input></td>
                    </tr>
                </table>
            </div>
        )
    }
    else if(spacification === "RAM"){
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
            <td><input></input></td>
            </tr>
            <tr>
                <td> <label>Price</label></td>
                <td><input type="number"></input></td>
            </tr>
            <tr>
                <td><label>Status</label></td>
                <td>
                    <select>
                        <option value="In Stock">In Stock</option>
                        <option value="Out Stock">Out Stock</option>
                        <option value="Up Coming">Up Coming</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Brand</label></td>
                <td>
                    <select>
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
            <option value="Leptop">Leptop</option>
            <option value="RAM">RAM</option>
            <option value="SSD">SSD</option>
        </select>
        <button>LOAD</button>
        <br/>
        {spacificationData}
        </div>
    );
    } 

export default ProductAdd;





