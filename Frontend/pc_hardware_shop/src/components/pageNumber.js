import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
import axios from '../api/axios';
import Classes from './productsList.css';
import {withRouter,Link,useParams,useHistory} from 'react-router-dom';

const PageNumber = props => {
    const {category} = useParams();
    const [data,setData]=useState(); 
    let letmsInSnglePage=4;

    let pageNumbers=[];

        useEffect(() => {

            axios.post('/pagenumber/'+category).then(result =>{
                console.log(result.data);
                setData(result.data);
            });
        
        },[]);


        for(let i=1;i<(data)/letmsInSnglePage;i++){
            pageNumbers.push(i);
        }

        if((pageNumbers[pageNumbers.length - 1]*letmsInSnglePage)-data!=0){
            pageNumbers.push(pageNumbers.length+1);
        }


        return (
        
        <div className="">
            <br/> <br/>
            {pageNumbers.map(number=>{
                return (
                    <span className={Classes.pageNumber} onClick={()=>props.loadPage(number)}>{number}</span>
                )
            })}
        </div>

        );

       
    } 

export default PageNumber;





