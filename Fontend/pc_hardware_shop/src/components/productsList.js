import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from 'axios';
import classes from './productsList.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory} from 'react-router-dom';
import ProductInfo from './productInfo';

const ProductsList = props =>{

        const [api, setApi] = useState("http://localhost:3819/api/products");
        const [data, setData] = useState([]);
        const [showInfo, setShowInfo] = useState(false);
        const [storeId, setStoreId] = useState('');
        const {category} = useParams();
        const history = useHistory()
        
        
        useEffect(() => {

          axios.get(api+'/'+category).then(result =>{
              //console.log(result);
              setData(result.data);
          });
          
      },[]);

      useEffect(() => {
        console.log(category);
        axios.get(api+'/'+category).then(result =>{
          //console.log(result);
          setData(result.data);
      });
      
      },[category]);


      function showInfoHandeler(value){
        setShowInfo(!showInfo);
        setStoreId(value);
        localStorage.setItem('productID', value);

      }

      let pageData ='';
      if(showInfo == false){
        pageData = (
          <table className={classes.customers}>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Brand</th>
            </tr>
              {
                data.map(data =>{
                  return(
                    <tr key={data.Product.id}>
                      <td><a onClick={()=>showInfoHandeler(data.ID)}>{data.Product.pName}</a></td>
                      <td>{data.Product.Price}</td>
                      <td>{data.Product.Status}</td>
                      <td>{data.Product.Brand.bName}</td>
                    </tr>
                  )
                })
              }
          </table>
        )
      }else{
        //setShowInfo(false);
        const link = "/info/"+category+"/"+storeId;
        //const link = "/info/"+storeId;
        pageData = (
          <Switch>
              <Redirect to={link}/> 
          </Switch>
        )
     
      }

        return (
          <div className="">
              <p>ProductsList</p>
              {pageData}
      
          </div>
        );
    } 

export default withRouter(ProductsList);





