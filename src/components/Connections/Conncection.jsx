import React from 'react'
import'./Connection.css';
import { baseURL, con } from '../../Config/ApiUrls';
import {useState} from "react";
import {useEffect} from "react";
import axios from 'axios';
import Divider from '@mui/material/Divider';
import {AiFillGift} from 'react-icons/ai';
import { useSearchParams } from "react-router-dom";


const Conncection = () => {
    const [searchparams] = useSearchParams();
    const [data5,setData5]=useState([{}]);
    const [checked0, setChecked0] = React.useState(false);
    var [count,setCount]=useState(0);
    
    
      
    const handleChange0 = () => {
        setChecked0((prev) => !prev);
      };
    
    const cstackapi5=()=>{
     
  
  
      const param5 = new URLSearchParams({userId: searchparams.get("id5")});
        axios.get(con, { 
        params:param5,
        
        headers:{
          Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
        }
        }).then((csendresponse)=>{
        console.log("a",csendresponse);
        const new52=csendresponse.data.data;
        
         setData5(new52);   
         
      })
      .catch((err)=>{
        console.log(err)
      });
  
    }
  
    useEffect(()=>{
      cstackapi5();
      
    },[]) 
  
  console.log(data5);
  
  
  
  
  
  
  
  
  
  
    return (
    <div>
           <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title">Connections</div>
           
          </div>
        </header>
        <div className="Toolbar"/>
    
        <div class="cflexbox-container1">
  {
  data5?.map((el,i)=>{
    return(
        <div className='ImageAndNamemaindiv'>
        <div className='ImageAndNameimage'>
            <div className='ImageAndNameimage1'>
                <img src={baseURL+el.userPhoto} alt=""/>
            </div>
        </div>
        <div>
            <div className="ImageAndNameName">
                {el.userName}
            </div>
            <div className="ImageAndNameProfession">
                {el.designation}
            </div>
            <div className="ImageAndNameConnection">
                <AiFillGift   color='blue'/>{el.connections}
            </div>
            <div className="ImageAndNameName1">
            Connections
            </div>
        </div>
    
    </div>
    
    )
})}</div>
    <Divider/>
</div>)}

export default Conncection
