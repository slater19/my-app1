import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {FaRegEnvelopeOpen} from 'react-icons/fa';
import {AiFillMobile} from 'react-icons/ai';
import {FaIdCard} from 'react-icons/fa';


import {CardsBanks} from '../../Config/ApiUrls';
import {useState,useEffect } from "react";
import axios from 'axios';
import { flexbox } from '@mui/system';
import randomColor from "randomcolor";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import {CardsBanks2} from '../../Config/ApiUrls';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import {deleteConnection} from '../../Config/ApiUrls';
import {getConnections} from '../../Config/ApiUrls';
import Checkbox from '@mui/material/Checkbox';
import myImage1 from '../../Images/img_357118.png';
import Grid from '@mui/material/Grid';
import {rgetConnections1} from '../../Config/ApiUrls';



export const Received = () => {const navigate = useNavigate();

  const [Connections,setConnections]=useState([{}]);
  const [Connections30,setConnections30]=useState([{}]);

  var result3="http://65.2.28.163";

  const getConnections=()=>{
    
    const param = new URLSearchParams({userId:"10005"});
      axios.get(rgetConnections1, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response100)=>{
        console.log("b");        
        var card100=response100.data.data;
        
        
        card100.forEach(myFunction);

      function myFunction(item,index,arr){
          arr[index]=item.user; 
          }


setConnections(card100);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  

  useEffect(()=>{
    getConnections();
    
  },[])


  const getConnections27=()=>{
    
    const param = new URLSearchParams({userId:"10005"});
      axios.get(rgetConnections1, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response27)=>{
console.log("a");        
        var card27=response27.data.data;
        
        
   


setConnections30(card27);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  

  useEffect(()=>{
    getConnections27();
    
  },[])




  var rarrayOfObject1 = Connections.map(function (value, index){
    return [value, Connections30[index]]
  });
  

  console.log(Connections);
  console.log(Connections30);

  const data=new Array(
    {
        "bankId": "665",
        "cardId": "734",
        "status": "1",
        "updatedAt": "2021-06-14 09:13:55",
        "createdAt": "2021-06-12 02:37:58",
        "note": "Hi ANIL GADE\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10371",
            "firstName": "ANIL",
            "lastName": "GADE",
            "email": "anilgade70@gmail.com",
            "countryCode": "+91",
            "phoneNo": "9822252002",
            "avatar": "/sync/card/ff0bca357ed0ee7aa1c18c0f17ac3333.jpg",
            "designation": ""
        }
    },
    {
        "bankId": "325",
        "cardId": "253",
        "status": "1",
        "updatedAt": "2021-03-29 10:54:08",
        "createdAt": "2020-12-25 07:21:10",
        "note": "Hi Golden Feather\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10057",
            "firstName": "Golden",
            "lastName": "Feather",
            "email": "aherakash3000@gmail.com",
            "countryCode": "+91",
            "phoneNo": "9730009208",
            "avatar": "/sync/card/af075e3ff64ec3e35e50354215143ec6.jpg",
            "designation": "Family Saloon"
        }
    },
    {
        "bankId": "207",
        "cardId": "88",
        "status": "1",
        "updatedAt": "2021-03-29 10:54:08",
        "createdAt": "2020-11-18 10:14:25",
        "note": "Hi Jessica Gagne\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10099",
            "firstName": "Jessica",
            "lastName": "Gagne",
            "email": "jessica@jessicagagne.ca",
            "countryCode": "+1",
            "phoneNo": "4166165088",
            "avatar": "/sync/card/c177943f9f09716d536a6144e653f089.jpg",
            "designation": null
        }
    },
    {
        "bankId": "358",
        "cardId": "296",
        "status": "1",
        "updatedAt": "2021-03-29 10:54:08",
        "createdAt": "2021-01-09 12:22:03",
        "note": "Hi Kiran Deshmukh\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10048",
            "firstName": "Kiran",
            "lastName": "Deshmukh",
            "email": "kirandeshmukh@hotmail.com",
            "countryCode": "+91",
            "phoneNo": "9049888804",
            "avatar": "/sync/card/f5b170b0d5873b96205e64090986d797.png",
            "designation": "Founder Resonatum Learning Solutions LLP"
        }
    },
    {
        "bankId": "249",
        "cardId": "103",
        "status": "1",
        "updatedAt": "2021-03-29 10:54:08",
        "createdAt": "2020-11-22 01:47:04",
        "note": "Hi Rebecca Carlos\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10103",
            "firstName": "Rebecca",
            "lastName": "Carlos",
            "email": "rebecca.c@opis.com",
            "countryCode": "+36",
            "phoneNo": "3397308986",
            "avatar": "/sync/card/94652383551d0218e0ee10a3384f10fa.png",
            "designation": "Doctor"
        }
    },
    {
        "bankId": "676",
        "cardId": "736",
        "status": "1",
        "updatedAt": "2021-06-17 04:25:26",
        "createdAt": "2021-06-14 03:58:15",
        "note": "Hi Roshan Sakhare\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10322",
            "firstName": "Roshan",
            "lastName": "Sakhare",
            "email": "roshansakhare23@gmail.com",
            "countryCode": "+91",
            "phoneNo": "8793304667",
            "avatar": "",
            "designation": null
        }
    },
    {
        "bankId": "501",
        "cardId": "720",
        "status": "1",
        "updatedAt": "2021-06-10 11:37:15",
        "createdAt": "2021-06-10 11:30:53",
        "note": "Hi Subhadip Ghosh\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10405",
            "firstName": "Subhadip",
            "lastName": "Ghosh",
            "email": "mail.subhadip.ghosh@gmail.com",
            "countryCode": "+91",
            "phoneNo": "8116343650",
            "avatar": "",
            "designation": null
        }
    },
    {
        "bankId": "10",
        "cardId": "255",
        "status": "1",
        "updatedAt": "2021-10-31 11:00:01",
        "createdAt": "2020-08-06 08:02:59",
        "note": "",
        "attachment": "",
        "user": {
            "userId": "10009",
            "firstName": "Vivek",
            "lastName": "Ratnaparkhi",
            "email": "",
            "countryCode": "+91",
            "phoneNo": "8237522225",
            "avatar": "/sync/card/a2771f4c4effd35072c0c24de82f9f8d.jpg",
            "designation": "ENTERPRENURE"
        }
    },
    {
        "bankId": "401",
        "cardId": "461",
        "status": "1",
        "updatedAt": "2021-06-10 11:15:29",
        "createdAt": "2021-02-13 08:24:53",
        "note": "Hi \nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10152",
            "firstName": "Wasim",
            "lastName": "Ul",
            "email": "masoodwasim@outlook.com",
            "countryCode": "+91",
            "phoneNo": "9899552518",
            "avatar": "",
            "designation": ""
        }
    },
    {
        "bankId": "205",
        "cardId": "112",
        "status": "1",
        "updatedAt": "2021-03-29 10:54:08",
        "createdAt": "2020-11-15 07:17:00",
        "note": "Hi We Thai Cuisine\nI'd like to add you to my professional network on HandShake",
        "attachment": "",
        "user": {
            "userId": "10105",
            "firstName": "We",
            "lastName": "Thai Cuisine",
            "email": "",
            "countryCode": "+61",
            "phoneNo": "298095995",
            "avatar": "/sync/card/11b24c252b2adafca3191cb2ba4d49de.jpg",
            "designation": null
        }
  });
  
  data.forEach(myFunction);
  
  function myFunction(item,index,arr){
    arr[index]=item.user; 
    }


  return (


<div>

{
        data.map((el,i)=>{
            return(
                
            <div className='_MessageDiv2'>
            <div className='_MessageDiv12' onClick={() => navigate({
      pathname: "/Inbox1",
      search: createSearchParams({
        id:el.userId,
        image:el.avatar,
        fn:el.firstName,
        note:el.note,
        Request:el.createdAt,
        ln:el.lastName,
        id1:el.bankId
      }).toString()
    })} >
                <div className='_MessageImage'>
                    <img src={result3.concat(el.avatar)} />
                </div>
                <div className='_MessageDiv121'>
                    <div>
                        {el.firstName}{el.lastName}
                    </div>
                    <div>
                        <p>Request @ {el.createdAt}</p>
                    </div>
                    <div >
                        <p>{el.note}</p>
                    </div>
                 
                </div>
            </div>
        </div>
            )
        })
       
}


    </div>
  )
}
