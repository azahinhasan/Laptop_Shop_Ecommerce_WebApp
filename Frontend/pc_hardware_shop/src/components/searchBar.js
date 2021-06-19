import React,{ useState} from 'react';
import classes from './homePage.css';
import {Route,Switch,withRouter,Redirect,useParams,useHistory } from 'react-router-dom';

const SearchBar = props =>{

    const [searchData,setSearchData]=useState('');
    const {category} = useParams();
    const history = useHistory()

      const routeToSearchResult=()=>{
        let link = "/product/search?q="+searchData;
        history.push(link);
      }
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          routeToSearchResult();
        }
      }

        return (
          <div className={classes.homePage}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <input onKeyDown={handleKeyDown}  onChange={e=>setSearchData(e.target.value)}></input>
            <button  onClick={routeToSearchResult}><i class="fa fa-search"></i></button>

        </div>
        );
    } 

export default SearchBar;





