import React, { useState,useEffect,useReducer } from 'react';
import {Route,Switch,withRouter,useParams} from 'react-router-dom';
import axios from 'axios';
import classes from '../productsList.css';
//import GoogleMapReact from 'google-map-react';



const SSD = props =>{

    const [api, setApi] = useState("http://localhost:3819/api/products");
    const [data, setData] = useState([]);
    const { category,id } = useParams();

    useEffect(() => {
        axios.get(api+'/'+category+'/'+id).then(result =>{
        console.log(result);
        setData(result.data);
        });
    },[]);

    return (
        <div className="">
        <table className={classes.customers}>
            {
                data.map(data =>{
                return(
                <>
                    <tr>
                        <td>Capacity </td>
                        <td>{data.Product.ProductSpecification.Capacity}</td>
                    </tr>
                    <tr>
                        <td>Form Factor </td>
                        <td>{data.Product.ProductSpecification.Form_Factor}</td>
                    </tr>
                    <tr>
                        <td>Flash Type </td>
                        <td>{data.Product.ProductSpecification.Flash_Type}</td>
                    </tr>
                    <tr>
                        <td>Interface </td>
                        <td>{data.Product.ProductSpecification.Interface}</td>
                    </tr>
                    <tr>
                        <td>Sequential R/W </td>
                        <td>{data.Product.ProductSpecification.Sequential_R_W}</td>
                    </tr>
                    <tr>
                        <td>MTBF </td>
                        <td>{data.Product.ProductSpecification.MTBF}</td>
                    </tr>
                    <tr>
                        <td>Operating Temperature </td>
                        <td>{data.Product.ProductSpecification.Operating_Temperature}</td>
                    </tr>
                    <tr>
                        <td>Storage Temperature </td>
                        <td>{data.Product.ProductSpecification.Storage_Temperature}</td>
                    </tr>
                    <tr>
                        <td>Manufacturing Warranty </td>
                        <td>{data.Product.ProductSpecification.Manufacturing_Warranty}</td>
                    </tr>
                </>
                )
                })
            }
        </table>
        
        </div>
    );
} 

export default withRouter(SSD);





