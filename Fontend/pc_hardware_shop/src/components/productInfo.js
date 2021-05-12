import React, { useState,useEffect,useReducer } from 'react';
import {Route,Switch,withRouter,useParams} from 'react-router-dom';
import axios from 'axios';
import classes from './productsList.css';
import LeptopSpacification from './Specification/laptop';


const ProductsInfo = props =>{

        const [api, setApi] = useState("http://localhost:3819/api/products");
        const [data, setData] = useState([]);
        const [imageName, setImageName] = useState('a.jpg');
        const { category,id } = useParams();
       // const {category} = useParams();
//props.match.params.id

        useEffect(() => { 
        console.log(id);
        //const ID = localStorage.getItem('productID');
          axios.get(api+'/'+category+'/'+id).then(result =>{
            //console.log(result);
            setData(result.data);
            setImageName(result.data[0].Product.MainPic);
            console.log(imageName,'dcddddddd');
          });
      },[]);

        return (
          <div className={classes.productInfo}>
              <h1>Product Information</h1>
              <br/>
              
              <img className={classes.mainImage} src={require('../Content/LeptopImg/'+imageName).default} />
            <table className={classes.customers}>
              {/* <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Brand</th>
              </tr> */}
                {
                  data.map(data =>{
                    return(
                      <>
                   
            
                      {/* <tr>
                          <td> </td>
                          <td>
                            <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                          </td>
                        </tr> */}
                        <tr>
                          <td>Name </td>
                          <td>{data.Product.pName}</td>
                        </tr>
                        <tr>
                          <td>Price </td>
                          <td>{data.Product.Price}</td>
                        </tr>
                        <tr>
                          <td>Status </td>
                          <td>{data.Product.Status}</td>
                        </tr>
                        <tr>
                          <td>Brand </td>
                          <td>{data.Product.Brand.bName}</td>
                        </tr>
                      </>
                    )
                  })
                }
            </table>
            <br/>
            <h2>Specification</h2>
            <br/>
              <LeptopSpacification />
              <br/>
          </div>
        );
    } 

export default withRouter(ProductsInfo);





