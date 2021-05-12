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

          <div className={classes.productLists}>
            {
              data.map(data =>{
                return(
                  <div key={data.Product.id} onClick={()=>showInfoHandeler(data.ID)}  className={classes.productListData}>
                    
                    <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                    <div>{data.Product.pName}</div>
                    <div>{data.Product.Price}</div>
                    <div>{data.Product.Status}</div>
                    <div>{data.Product.Brand.bName}</div>
                  </div>
                )
              })
            }
        </div>
        )
      }else{
        const link = "/info/"+category+"/"+storeId;
        pageData = (
          <Switch>
              <Redirect to={link}/> 
          </Switch>
        )
     
      }

        return (
          <div className="">
              <h2>Result of : {category} </h2>
              {pageData}
      
          </div>
        );
    } 

export default withRouter(ProductsList);





