import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './Inbox1.css'
import { Received } from './Received';
import { Sent } from './Sent';
import Divider from '@mui/material/Divider';
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {FaIdCard} from 'react-icons/fa';

import { CardBankrequest1 } from '../../Config/ApiUrls';
import { CardBankrequest2 } from '../../Config/ApiUrls';
import axios from 'axios';

import Button from '@mui/material/Button';
export const Inbox1  = () => {const navigate = useNavigate();

  const [searchparams] = useSearchParams();
  
  var image=searchparams.get("image")
  var fn=searchparams.get("fn")
  var note=searchparams.get("note")
  var Request=searchparams.get("Request")
  var ln=searchparams.get("ln")
  var id=searchparams.get("id")
  var id1=searchparams.get("id1")


  const handleTabs=() => {
    
    
    getCard();
  }

  const handleTabs1=() => {
    
    
    getCard1();
  }

  const getCard=()=>{

  
    var urlencoded = new URLSearchParams();
    urlencoded.append("userId", id);
    urlencoded.append("bankId", id1);
    
      axios.post(CardBankrequest1, urlencoded, 
      {
      
      headers:{
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
  
      }
      }).then((response)=>{
    console.log("a");    
      
      
   
    })
    .catch((err)=>{
      console.log(err)
    });
    } 




const getCard1=()=>{

  
  var urlencoded = new URLSearchParams();
  urlencoded.append("userId", id);
  urlencoded.append("bankId", id1);
  
    axios.post(CardBankrequest2, urlencoded, 
    {
    
    headers:{
      Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"

    }
    }).then((response)=>{
    
    
    
 
  })
  .catch((err)=>{
    console.log(err)
  });

} 




  var result3= "https://cors-anywhere-solai.fly.dev/http://65.2.28.163";
  return (
    <div className='_Inboxmaindiv'>
        <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Inbox </div>
           
          </div>
        </header>
        <div className="Toolbar"/>
        <div className="flex">
        <div className='iMessageDiv2new'>
            <div className='iMessageDiv12new'/* onClick={() => navigate({
      pathname: "/chat",
      search: createSearchParams({
        id:el.userId,
        name:el.userName,
        designation:el.designation,
        image:result3.concat(el.userPhoto)
      }).toString()
    })} */>    
                <div className='iMessageImagenew'>
                    <img src={image} />
                </div>
                <div className='iMessageDiv121new'>
                    <div style={{color:'black'}}>
                        {fn}{ln}
                    </div>
                    <div>
                        <p>Request @ {Request}</p>
                    </div>
                    <div >
                        <p>{note}</p>
                    </div>
                 
                </div>
            </div>
        </div>
        <Divider/> 
        <div className="item"><button type="button" class="button1"   onClick={() => navigate({
      pathname: "/cardview",
      search: createSearchParams({
        id:id,
     
      }).toString()
    })}>  <FaIdCard  style={{
        position:"relative", marginRight:'10px',textAlign:"right"}}color='red' size="30px"/>
          
          
          View Card</button></div><br/>
        <Divider/> 
        <div className="item1">

        <Button type='submit' variant="contained" size='large' sx={{
    position:"relative",left: '15px',
    width: 180, padding: 1,
    color: 'white',
    backgroundColor:'#f43449',
    borderRadius: '100px',
    margin:'auto',
    marginRight:'10px',
        }}    onClick={() => handleTabs1()} >Decline</Button>
    <Button type='submit' variant="contained" size='large' sx={{
    position:"relative",left: '15px',
    width: 180, padding: 1,
    color: 'white',
    backgroundColor:'rgba(99,208,104,255)',
    borderRadius: '100px',
    margin:'auto',
  }}  onClick={() => handleTabs()} > Accept</Button>
        </div>
        </div>
        
    </div>
  )
}

