import React, { useState,useEffect} from 'react';
import classes from './productsList.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory } from 'react-router-dom';
import ProductInfo from './productInfo';
import axios from '../api/axios';

const ProductsList = props =>{

       // const [api, setApi] = useState("http://localhost:3819/api/products");
        const [data, setData] = useState([]);
        const [showInfo, setShowInfo] = useState(false);
        const [storeId, setStoreId] = useState('');
        const [filterByBrand, setFilterByBrand] = useState('ALL');
        const [filterByStatus, setFilterByStatus] = useState('ALL');
        const [filterByMaxPrice, setFilterByMaxPrice] = useState(500000);
        const [filterByMinPrice, setFilterByMinPrice] = useState(0);
        const {category} = useParams();
        const history = useHistory();
        
        useEffect(() => {

          // axios.get(api+'/'+category).then(result =>{
          //     //console.log(result);
          //     setData(result.data);
          // });

          axios.get('/products/'+category).then(result =>{
            //console.log(result);
            setData(result.data);

        });
          
      },[]);

      

      const routeChange = (id) =>{ 

        const link = "/info/"+category+"/"+id;
        console.log(link)

        history.push(link);
      }

      useEffect(() => {
        console.log(category,' category');
        axios.get('/products/'+category).then(result =>{
          //console.log(result);
          setData(result.data);
      });
      
      },[category]);


      function showInfoHandeler(value){
        setShowInfo(!showInfo);
        setStoreId(value);
        localStorage.setItem('productID', value);

      }

      const FinterByBrand=(e)=>{
        setFilterByBrand(e);
      }
      const FinterByStatus=(e)=>{
        setFilterByStatus(e);
      }
      const FinterByMinPrice=(e)=>{
        
        if(e!=''){
          setFilterByMinPrice(e);
        }else{
          setFilterByMinPrice(0);
        }
        
      }
      const FinterByMaxPrice=(e)=>{
        if(e!=''){
          setFilterByMaxPrice(e);
        }else{
          setFilterByMaxPrice(5000000);
        }
      }

      let pageData ='';
      if(showInfo == false){
        pageData = (

          <div className={classes.productLists}>
            {
              //&& filterByMaxPrice < parseInt(data.Product.Price.replace(/,/g, ''))   filterByMinPrice < parseFloat(data.Product.Price.replace(/,/g, '')) &&
              data.map(data =>{ 
                if(filterByMinPrice <= parseFloat(data.Product.Price.replace(/,/g, '')) && filterByMaxPrice >= parseInt(data.Product.Price.replace(/,/g, ''))){

                  if(filterByBrand==data.Product.Brand.bName && filterByStatus==data.Product.Status){
                    return(
                      <div key={data.Product.id} onClick={()=>routeChange(data.ID)} className={classes.productListData}>
                        <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                        <div>{data.Product.pName}</div>
                        <div>{data.Product.Price} BDT</div>
                        <div>{data.Product.Status}</div>
                        <div>{data.Product.Brand.bName}</div>
                      </div>
                    )
                  }else if(filterByBrand=='ALL' && filterByStatus=='ALL'){
                    return(
                      // <div key={data.Product.id} onClick={()=>showInfoHandeler(data.ID)}  className={classes.productListData}>
                      <div key={data.Product.id} onClick={()=>routeChange(data.ID)}  className={classes.productListData}>
                        <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                        <div>{data.Product.pName}</div>
                        <div>{data.Product.Price} BDT</div>
                        <div>{data.Product.Status}</div>
                        <div>{data.Product.Brand.bName}</div>
                      </div>
                    )
                  }else if(filterByBrand=='ALL' && filterByStatus==data.Product.Status){
                    return(
                      <div key={data.Product.id} onClick={()=>routeChange(data.ID)} className={classes.productListData}>
                        <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                        <div>{data.Product.pName}</div>
                        <div>{data.Product.Price} BDT</div>
                        <div>{data.Product.Status}</div>
                        <div>{data.Product.Brand.bName}</div>
                      </div>
                    )
                  }else if(filterByBrand==data.Product.Brand.bName && filterByStatus=='ALL'){
                    return(
                      <div key={data.Product.id} onClick={()=>routeChange(data.ID)} className={classes.productListData}>
                        <img className={classes.mainImage} src={require('../Content/LeptopImg/'+data.Product.MainPic).default} />
                        <div>{data.Product.pName}</div>
                        <div>{data.Product.Price} BDT</div>
                        <div>{data.Product.Status}</div>
                        <div>{data.Product.Brand.bName}</div>
                      </div>
                    )
                  }
                }
              

              })
            }
        </div>
        )
      }
      else{
        // const link = "/info/"+category+"/"+storeId;
        // pageData = (
        //   <Switch>
        //       <Redirect to={{pathname:link}}/> 
        //   </Switch>
        // )
      }

        return (
          <div className="">
              <h2>Result of : {category} </h2>

            <div className={classes.FilterLIst}>
              <div>Filter</div>
              <span>Brand </span>
              <select name="Brand" id="Brand" onChange={(event)=>FinterByBrand(event.target.value)}>
              <option value="ALL">ALL</option>
                <option value="RAZER">RAZER</option>
                <option value="HP">HP</option>
                <option value="ASUS">ASUS</option>
                <option value="APPLE">APPLE</option>
                <option value="DELL">DELL</option>
                <option value="MSI">MSI</option>
                <option value="LENOVO">LENOVO</option>
                <option value="ACER">ACER</option>
                <option value="Team">Team</option>
                <option value="WESTERN_DIGITAL">WESTERN DIGITAL</option>
                <option value="Antec">Antec</option>
              </select>

              
              <span>Status </span>
              <select name="Brand" id="Brand" onChange={(event)=>FinterByStatus(event.target.value)}>
                <option value="ALL">ALL</option>
                <option value="In Stock">In Stock</option>
                <option value="Out Stock">Out Stock</option>
                <option value="Up Coming">Up Coming</option>
              </select>
              <br/>
              <span>Price Range </span>
              <input type="number" placeholder='Min'  onChange={(event)=>FinterByMinPrice(event.target.value)}/>-
              <input type="number" placeholder='Max'  onChange={(event)=>FinterByMaxPrice(event.target.value)}/>
            </div>


            {/* <Link to={{pathname:'/info/'+'SSD'+'/'+storeId}}>  */}
              {pageData}
            {/* </Link> */}
           
          </div>
        );
    } 

export default withRouter(ProductsList);
























