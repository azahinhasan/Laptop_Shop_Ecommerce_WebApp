import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from '../api/axios';
import Classes from './productsList.css';
import {withRouter,Link,useParams,useHistory} from 'react-router-dom';

const PageNumber = props => {
    const {category} = useParams();
    const [data,setData]=useState(); 

    let pageNumbers=[];

        useEffect(() => {

            axios.post('/pagenumber/'+category).then(result =>{
                console.log(result.data);
                setData(result.data);
            });
        
        },[]);


        for(let i=1;i<data+1;i++){
            pageNumbers.push(i);
        }

        return (
        
        <div className="">
            <br/> <br/>
            {pageNumbers.map(number=>{
                return (
                    <span className={Classes.PageNumber} onClick={()=>props.loadPage(number)}>{number}</span>
                )
            })}
        </div>

        );

       
    } 

export default PageNumber;





