    import React, { useState,useEffect,useReducer } from 'react';
    import {Route,Switch,withRouter,useParams} from 'react-router-dom';
    import classes from '../productsList.css';
    //import GoogleMapReact from 'google-map-react';
    import axios from '../../api/axios';


    const LEPTOP = props =>{

        const [api, setApi] = useState("http://localhost:3819/api/products");
        const [data, setData] = useState([]);
        const { category,id } = useParams();

        useEffect(() => {
            axios.get('/products/'+category+'/'+id).then(result =>{
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
                            <td>Processor </td>
                            <td>{data.Product.ProductSpecification.Processor}</td>
                        </tr>
                        <tr>
                            <td>Colors </td>
                            <td>{data.Product.ProductSpecification.Colors}</td>
                        </tr>
                        <tr>
                            <td>Display </td>
                            <td>{data.Product.ProductSpecification.Display}</td>
                        </tr>
                        <tr>
                            <td>Memory </td>
                            <td>{data.Product.ProductSpecification.Memory}</td>
                        </tr>
                        <tr>
                            <td>Storage </td>
                            <td>{data.Product.ProductSpecification.Storage}</td>
                        </tr>
                        <tr>
                            <td>Graphics </td>
                            <td>{data.Product.ProductSpecification.Graphics}</td>
                        </tr>
                        <tr>
                            <td>Battery </td>
                            <td>{data.Product.ProductSpecification.Battery}</td>
                        </tr>
                        <tr>
                            <td>Adapter </td>
                            <td>{data.Product.ProductSpecification.Adapter}</td>
                        </tr>
                        <tr>
                            <td>WebCam </td>
                            <td>{data.Product.ProductSpecification.WebCam}</td>
                        </tr>
                    </>
                    )
                    })
                }
            </table>
            
            </div>
        );
    } 

    export default withRouter(LEPTOP);





