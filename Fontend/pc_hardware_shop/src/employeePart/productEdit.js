import axios from '../api/axios';
import React, { useState } from 'react';
import {Route,Switch,withRouter,Redirect,Link} from 'react-router-dom';
import classes from './employee.css';
import EmptyImage from '../Content/no_blog.jpg';

const ProductEdit = props =>{
    const [dataUpaded,setDataUpdated]=useState('');
    const [Search,setSearch]=useState('None');
    const [T,setT]=useState('None');
    const [spacification,setSpacificationData]=useState(null);
    const [pName,setpName]=useState('None');
    const [Price,setPrice]=useState('0');
    const [Status,setStatus]=useState('In Stock');
    const [BrandID,setBrandID]=useState('1');
    const [MainPic,setMainPic]=useState('fx505dt-03-500x500.jpg');
    const [Pic2,setPic2]=useState('');
    const [Pic3,setPic3]=useState('');
    const [MainPicSrc,setMainImageSrc]=useState('../Content/LeptopImg/');
    const [Pic2Src,setPic2Src]=useState(EmptyImage);
    const [Pic3Src,setPic3Src]=useState(EmptyImage);
    //ID
    const [SpecificationID,setSpecificationID]=useState('');
    const [pID,setpID]=useState('');
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
    //uploadData
    const [UploadedID,setUploadedID]=useState(-5);



    // const loadSpacification=(data)=>{
    //     console.log("Yooo",T.Processor)
    //     setManufacturing_Warranty(data.Manufacturing_Warranty);
    //     if(spacification === 1){ //leptop
    //         setProcessor(T.Processor);
    //         setColors(data.Colors);
    //         setDisplay(data.Display);
    //         setMemory(data.Memory);
    //         setStorage(data.Storage);
    //         setGraphics(data.Graphics);
    //         setOS(data.OS);
    //         setBattery(data.Battery);
    //         setAdapter(data.Adapter);
    //         setAudio(data.Audio);
    //         setKeyboard(data.Keyboard);
    //         setWebCam(data.WebCam);
    //     }else if(spacification === 2){ //ssd

    //     }else if(spacification ===3){
    //         setRam_Type(data.Ram_Type);
    //         setRam_Capacity(data.Ram_Capacity);
    //         setRam_Operating_voltage(data.Ram_Frequency);
    //         setRam_Latency(data.Ram_Operating_voltage);
    //         setRam_Pin(data.Ram_Latency);
    //         setRam_Frequency(data.Ram_Pin);
    //     }
    // }

    const saveData=()=>{
        axios.put('/products/'+pID,{
            pName,Price,Status,BrandID,MainPic,Pic2,Pic3,SpecificationID
        })
        .then(r=>{

            axios.put('/products/spacification/'+SpecificationID,{
                Manufacturing_Warranty,Processor,Colors,Display,Memory,Storage,Graphics,
                OS,Battery,Adapter,Audio,Keyboard,WebCam,Ram_Type,Ram_Capacity,Ram_Operating_voltage,
                Ram_Latency,Ram_Pin,Ram_Frequency
            }).then(r=>{
                console.log("Data Updated!");
                setDataUpdated(true);
            })
        }).catch(e=>{
            console.log(e);
            setDataUpdated(false);
        })
    }


    const loadData=()=>{
        axios.get('/products/load/'+Search)
        .then(r=>{
            setT(r.data.Product.ProductSpecification)
            //loadSpacification(r.data.Product.ProductSpecification);
            console.log(r.data);
            setSpacificationData(r.data.Category.ID);
            setpName(r.data.Product.pName);
            setPrice(r.data.Product.Price);
            setStatus(r.data.Product.Status);
            setBrandID(r.data.Product.BrandID);
            setMainPic(r.data.Product.MainPic);
            setPic3(r.data.Product.Pic2);
            setPic2(r.data.Product.MainPic);
            setProcessor(r.data.Product.ProductSpecification.Manufacturing_Warranty);
            console.log(pName);

            setpID(r.data.pID);
            setSpecificationID(r.data.Product.SpecificationID);
           // setpID(r.data.pID);
        

            let data = r.data.Product.ProductSpecification;
            setManufacturing_Warranty(data.Manufacturing_Warranty);
                setProcessor(data.Processor);
                setColors(data.Colors);
                setDisplay(data.Display);
                setMemory(data.Memory);
                setStorage(data.Storage);
                setGraphics(data.Graphics);
                setOS(data.OS);
                setBattery(data.Battery);
                setAdapter(data.Adapter);
                setAudio(data.Audio);
                setKeyboard(data.Keyboard);
                setWebCam(data.WebCam);
                setRam_Type(data.Ram_Type);
                setRam_Capacity(data.Ram_Capacity);
                setRam_Operating_voltage(data.Ram_Frequency);
                setRam_Latency(data.Ram_Operating_voltage);
                setRam_Pin(data.Ram_Latency);
                setRam_Frequency(data.Ram_Pin);
            
            
        }).catch(e=>{

        })
    }

    const uploadMainImage=(e,type)=>{
    
        try{
            if(type==="MainPic"){
                console.log(e.target.files[0].name);
                setMainPic(e.target.files[0].name);
            }else if(type==="Pic2"){
                console.log(e.target.files[0].name);
                setPic2(e.target.files[0].name);
            }else if(type==="Pic3"){
                console.log(e.target.files[0].name);
                setPic3(e.target.files[0].name);
            }
    
    
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload=x=>{
                if(type==="MainPic"){
                    setMainImageSrc(x.target.result);
                }else if(type==="Pic2"){
                    setPic2Src(x.target.result);
                }else if(type==="Pic3"){
                    setPic3Src(x.target.result);
                }
                
            }
            reader.readAsDataURL(imageFile);
        }catch{
            if(type==="MainPic"){
                setMainImageSrc(EmptyImage);
                setMainPic(null);
            }else if(type==="Pic2"){
                setPic2Src(EmptyImage);
                setPic2(null);
            }else if(type==="Pic3"){
                setPic3Src(EmptyImage);
                setPic3(null);
            }

        }


    }

    let spacificationData='';

    if(spacification === 1){ //Laptop
        spacificationData=(
            <div>
                <table  className={classes.Form}>
                    <tr>
                        <td>Processor </td>
                        <td><input value={Processor} onChange={(event)=>{setProcessor(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Colors </td>
                        <td><input value={Colors} onChange={(event)=>{setColors(event.target.value)}} ></input></td>
                    </tr>
                    <tr>
                        <td>Display </td>
                        <td><input value={Display} onChange={(event)=>{setDisplay(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Memory </td>
                        <td><input value={Memory} onChange={(event)=>{setMemory(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Storage </td>
                        <td><input value={Storage} onChange={(event)=>{setStorage(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Graphics </td>
                        <td><input value={Graphics} onChange={(event)=>{setGraphics(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>OS </td>
                        <td><input value={OS} onChange={(event)=>{setOS(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Battery </td>
                        <td><input value={Battery} onChange={(event)=>{setBattery(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Adapter </td>
                        <td><input value={Adapter} onChange={(event)=>{setAdapter(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Audio </td>
                        <td><input value={Audio} onChange={(event)=>{setAudio(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Keyboard </td>
                        <td><input value={Keyboard} onChange={(event)=>{setKeyboard(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>WebCam </td>
                        <td><input value={WebCam} onChange={(event)=>{setWebCam(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Warranty </td>
                        <td><input value={Manufacturing_Warranty} onChange={(event)=>{setManufacturing_Warranty(event.target.value)}}></input></td>
                    </tr>
                </table>
                <br/>
            </div>
        )
    }
    else if(spacification === 3){ //RAM
        spacificationData=(
            <div>
                <table className={classes.Form}>
                    <tr>
                        <td>Ram Type </td>
                        <td><input value={Ram_Type}  onChange={(event)=>{setRam_Type(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Capacity </td>
                        <td><input value={Ram_Capacity} onChange={(event)=>{setRam_Capacity(event.target.value)}}></input></td>
                    </tr>
                    {/* <tr>
                        <td>Flash Type </td>
                        <td><input onChange={(event)=>{setRam_Operating_voltage(event.target.value)}}></input></td>
                    </tr> */}
                    <tr>
                        <td>Ram Frequency </td>
                        <td><input value={Ram_Frequency} onChange={(event)=>{setRam_Frequency(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Operating voltage</td>
                        <td><input value={Ram_Operating_voltage} onChange={(event)=>{setRam_Operating_voltage(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Latency </td>
                        <td><input value={Ram_Latency} onChange={(event)=>{setRam_Latency(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Ram Pin </td>
                        <td><input value={Ram_Pin} onChange={(event)=>{setRam_Pin(event.target.value)}}></input></td>
                    </tr>
                    <tr>
                        <td>Warranty </td>
                        <td><input value={Manufacturing_Warranty} onChange={(event)=>{setManufacturing_Warranty(event.target.value)}}></input></td>
                    </tr>
                </table>
                <br/>
            </div>
        )

    }

    return (
        <div className={classes.Product}>
    
        <label>Search</label>
        <input type="" onChange={e=>setSearch(e.target.value)}></input>
        <button onClick={loadData}>LOAD</button>
        <br/>
        {dataUpaded?<p style={{color:'green'}}>Data Updated!</p>:null}
        {!dataUpaded?<p style={{color:'red'}}>Data is not Updated!</p>:null}
        <br/>
        {spacification==null?null:
            <table  className={classes.Form}> 
            <tr>
            <td>Name</td>
            <td><input value={pName} onChange={(event)=>{setpName(event.target.value)}}></input></td>
            </tr>
            <tr>
                <td> 
                    <label>Price</label>
                    
                </td>
                <td><input value={Price} type="" onChange={(event)=>{setPrice(event.target.value)}}></input></td>
            </tr>
            <tr>
                <td><label>Status</label></td>
                <td>
                    <select onChange={(event)=>{setStatus(event.target.value)}} value={Status}>
                        <option value="In Stock">In Stock</option>
                        <option value="Out Stock">Out Stock</option>
                        <option value="Up Coming">Up Coming</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Brand</label></td>
                <td>
                    <select onChange={(event)=>{setBrandID(event.target.value)}} value={BrandID}>
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
            <tr>
                <td> 
                    <label>Main Pic</label>
                    <br/>
                    {/* <img src={require(MainPicSrc+MainPic)} width='140px' height='140px'/> */}
                </td>
                <td><input type="file" accept="image/*" onChange={(event)=>{uploadMainImage(event,"MainPic")}}></input></td>
            </tr>
            <tr>
                <td> 
                    <label>
                        Pic 2
                        <br/>
                        <img src={Pic2Src} width='140px' height='140px'/>
                    </label></td>
                <td><input type="file" accept="image/*" onChange={(event)=>{uploadMainImage(event,"Pic2")}}></input></td>
            </tr>
            <tr>
            <td> 
                <label>
                    Pic 3
                    <br/>
                    <img src={Pic3Src} width='140px' height='140px'/>
                </label></td>
            <td><input type="file" accept="image/*" onChange={(event)=>{uploadMainImage(event,"Pic3")}}></input></td>
            </tr>
        </table>
        
        }

        <br/>
        {spacificationData}
        <br/>
        <button onClick={saveData}>SAVE</button>
        </div>
    );
    } 

export default ProductEdit;





