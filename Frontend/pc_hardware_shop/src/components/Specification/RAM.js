import React, { useState,useEffect,useReducer } from 'react';
import {Route,Switch,withRouter,useParams} from 'react-router-dom';
import classes from '../productsList.css';
//import GoogleMapReact from 'google-map-react';
import axios from '../../api/axios';


const RAM = props =>{

    const [data, setData] = useState([]);
    const { category,id } = useParams();

    useEffect(() => {
        axios.get('/products/'+category+'/'+id).then(result =>{
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
                        <td>Ram Type </td>
                        <td>{data.Product.ProductSpecification.Ram_Type}</td>
                    </tr>
                    <tr>
                        <td>Ram Capacity </td>
                        <td>{data.Product.ProductSpecification.Ram_Capacity}</td>
                    </tr>
                    <tr>
                        <td>Flash Type </td>
                        <td>{data.Product.ProductSpecification.Flash_Type}</td>
                    </tr>
                    <tr>
                        <td>Ram Frequency </td>
                        <td>{data.Product.ProductSpecification.Ram_Frequency}</td>
                    </tr>
                    <tr>
                        <td>Ram Operating voltage</td>
                        <td>{data.Product.ProductSpecification.Ram_Operating_voltage}</td>
                    </tr>
                    <tr>
                        <td>Ram Latency </td>
                        <td>{data.Product.ProductSpecification.Ram_Latency}</td>
                    </tr>
                    <tr>
                        <td>Ram Pin </td>
                        <td>{data.Product.ProductSpecification.Ram_Pin}</td>
                    </tr>
                    <tr>
                        <td>Warranty </td>
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

export default withRouter(RAM);





