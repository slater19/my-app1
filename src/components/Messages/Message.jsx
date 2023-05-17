import React from 'react'
import './Message.css'
import Profile from '../../Images/profile.png';
import {BsArrowLeft,BsSearch} from 'react-icons/bs';
import { MessageList } from '../../Config/ApiUrls';
import {useState,useEffect } from "react";
import axios from 'axios';
import { createSearchParams, Link, useNavigate } from "react-router-dom";

import { baseURL } from '../../Config/ApiUrls';

export const Message = () => {
    const navigate = useNavigate();
    const [Message,setMessage]=useState([{}]);
   const data=new Array(
        {
            "messageId": "4388",
            "lastMessage": "Qty: 1\nPlease quote",
            "fileUrl": "",
            "lastMessageTime": "2023-04-15 11:46:35",
            "status": "3",
            "msgType": "received",
            "userId": "11186",
            "userName": "Nachiket Bhurke",
            "userPhoto": "/sync/card/e9886cfdcea827b7e6bd34262832edf1.png",
            "isLogin": "0",
            "designation": "Owner At ARB Jwellers"
        },
        {
            "messageId": "4380",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJBcnZpbmQgR2FkZ2lsIiwiYWdlbmRhIjoiVHQiLCJtZWV0aW5nSWQiOiJjaXAtYmRwLWJkcyIsImRhdGVGb3JtYXR0ZWQiOiJBcHIgMTIsIDIwMjMiLCJkYXRlIjoiMjAyMy0wNC0xMiIsInRpbWUiOiIxMjo0MCJ9",
            "fileUrl": "",
            "lastMessageTime": "2023-04-12 09:49:59",
            "status": "3",
            "msgType": "sent",
            "userId": "10766",
            "userName": "Arvind Gadgil",
            "userPhoto": "/sync/card/c49ceff671b992854ac07024c6bd55da.png",
            "isLogin": "0",
            "designation": "Founder at SG Digitech"
        },
        {
            "messageId": "4379",
            "lastMessage": "eyJpc0ZlZWQiOnRydWUsImZlZWRfaWQiOiI2NzcwIiwidGV4dCI6IuKAmE91ciBob3RlbCBjb3VudCBpbiBJbmRpYSB3aWxsIGJlIHNhbWUgYXMgQ2hpbmEgc29vbuKAmSB8IFRoZSBGaW5hbmNpYWwgRXhwcmVzcyBodHRwczpcL1wvd3d3LmZpbmFuY2lhbGV4cHJlc3MuY29tXC9pbmR1c3RyeVwvb3VyLWhvdGVsLWNvdW50LWluLWluZGlhLXdpbGwtYmUtc2FtZS1hcy1jaGluYS1zb29uXC8zMDM5MDIyXC8iLCJpbWFnZXMiOiJcL3N5bmNcL2NhcmRcLzNkNTYwODUyNGNjNTkxMWRhZWFlNzYwYmFlODUwYzFlLnBuZyIsInZpZGVvcyI6IiIsInRvdGFsX2xpa2VzIjoiMCIsInRvdGFsX2NvbW1lbnRzIjoiMiIsImZlZWRfZGF0ZSI6IjIwMjMtMDQtMTAgMTQ6MzE6MzYiLCJmZWVkX3Zpc2liaWxpdHkiOiIxIiwidXNlcl9pZCI6IjEwMDA1IiwidXNlcl9uYW1lIjoiVGFubWF5IFJhdG5hcGFya2hpIiwiYXZhdGFyIjoiXC9zeW5jXC9jYXJkXC9lYTQ4OWExMmEzZDZlMGM3MjRkOTJmZjZmNWE0ZDIxOS5wbmciLCJob3N0X2Rlc2lnbmF0aW9uIjoiRm91bmRlciIsImhhc19saWtlZCI6Ik5vIiwidG90YWxfcHJvZHVjdHMiOiIzIn0=",
            "fileUrl": "",
            "lastMessageTime": "2023-04-11 15:21:40",
            "status": "3",
            "msgType": "received",
            "userId": "12240",
            "userName": "Vaibhav Manral",
            "userPhoto": "",
            "isLogin": "0",
            "designation": "Software Developer"
        },
        {
            "messageId": "4371",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJUYW5tYXkgUmF0bmFwYXJraGkiLCJhZ2VuZGEiOiJCc2pzanNqc2oiLCJtZWV0aW5nSWQiOiJ4emEtaHJ0LWp3bSIsImRhdGVGb3JtYXR0ZWQiOiJBcHIgMDYsIDIwMjMiLCJkYXRlIjoiMjAyMy0wNC0wNiIsInRpbWUiOiIxODoyOSJ9",
            "fileUrl": "",
            "lastMessageTime": "2023-04-06 07:38:14",
            "status": "3",
            "msgType": "received",
            "userId": "10070",
            "userName": "Raju Painter",
            "userPhoto": "/sync/card/9453261e6fc8ce4a56498c0732f1a954.jpg",
            "isLogin": "0",
            "designation": "Painter"
        },
        {
            "messageId": "4370",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJUYW5tYXkgUmF0bmFwYXJraGkiLCJhZ2VuZGEiOiJCc2pzanNqc2oiLCJtZWV0aW5nSWQiOiJ4emEtaHJ0LWp3bSIsImRhdGVGb3JtYXR0ZWQiOiJBcHIgMDYsIDIwMjMiLCJkYXRlIjoiMjAyMy0wNC0wNiIsInRpbWUiOiIxODoyOSJ9",
            "fileUrl": "",
            "lastMessageTime": "2023-04-06 07:38:14",
            "status": "1",
            "msgType": "sent",
            "userId": "10105",
            "userName": "We Thai Cuisine",
            "userPhoto": "/sync/card/11b24c252b2adafca3191cb2ba4d49de.jpg",
            "isLogin": "0",
            "designation": null
        },
        {
            "messageId": "4369",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJUYW5tYXkgUmF0bmFwYXJraGkiLCJhZ2VuZGEiOiJCc2pzanNqc2oiLCJtZWV0aW5nSWQiOiJ4emEtaHJ0LWp3bSIsImRhdGVGb3JtYXR0ZWQiOiJBcHIgMDYsIDIwMjMiLCJkYXRlIjoiMjAyMy0wNC0wNiIsInRpbWUiOiIxODoyOSJ9",
            "fileUrl": "",
            "lastMessageTime": "2023-04-06 07:38:14",
            "status": "1",
            "msgType": "sent",
            "userId": "10099",
            "userName": "Jessica Gagne",
            "userPhoto": "/sync/card/c177943f9f09716d536a6144e653f089.jpg",
            "isLogin": "0",
            "designation": null
        },
        {
            "messageId": "4368",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJUYW5tYXkgUmF0bmFwYXJraGkiLCJhZ2VuZGEiOiJCc2pzanNqc2oiLCJtZWV0aW5nSWQiOiJ4emEtaHJ0LWp3bSIsImRhdGVGb3JtYXR0ZWQiOiJBcHIgMDYsIDIwMjMiLCJkYXRlIjoiMjAyMy0wNC0wNiIsInRpbWUiOiIxODoyOSJ9",
            "fileUrl": null,
            "lastMessageTime": "2023-04-06 07:38:16",
            "status": "3",
            "msgType": "sent",
            "userId": "10009",
            "userName": "Vivek Ratnaparkhi",
            "userPhoto": "/sync/card/a2771f4c4effd35072c0c24de82f9f8d.jpg",
            "isLogin": "0",
            "designation": "ENTERPRENURE"
        },
        {
            "messageId": "4359",
            "lastMessage": "vaibhav\n",
            "fileUrl": null,
            "lastMessageTime": "2023-03-21 08:22:36",
            "status": "3",
            "msgType": "received",
            "userId": "12242",
            "userName": "Sachin Aggarwal",
            "userPhoto": "",
            "isLogin": "0",
            "designation": null
        },
        {
            "messageId": "4337",
            "lastMessage": "hi Ankita this message is from testing team we are on a road to improve our product so please give us feedback and don't forget too rate us on google store your feedback is valuable for us\n",
            "fileUrl": "",
            "lastMessageTime": "2023-03-10 14:00:20",
            "status": "1",
            "msgType": "sent",
            "userId": "10882",
            "userName": "Ankita Thorat",
            "userPhoto": "/sync/card/36aeed1de9ee559f1559e9ae92a96c1e.png",
            "isLogin": "1",
            "designation": null
        },
        {
            "messageId": "4312",
            "lastMessage": "eyJpc01lZXRpbmciOnRydWUsInNjaGRldWxlQnkiOiJUYW5tYXkgUmF0bmFwYXJraGkiLCJhZ2VuZGEiOiJVcGRhdGUiLCJtZWV0aW5nSWQiOiJhdW4tY3drLXJxbyIsImRhdGVGb3JtYXR0ZWQiOiJNYXIgMDIsIDIwMjMiLCJkYXRlIjoiMjAyMy0wMy0wMiIsInRpbWUiOiIxODoyMyJ9",
            "fileUrl": "",
            "lastMessageTime": "2023-03-02 09:53:36",
            "status": "3",
            "msgType": "sent",
            "userId": "10057",
            "userName": "Golden Feather",
            "userPhoto": "/sync/card/af075e3ff64ec3e35e50354215143ec6.jpg",
            "isLogin": "0",
            "designation": "Family Saloon"
        }
    )


    const getMessage=()=>{
    
      const param = new URLSearchParams({userId:10005});
        axios.get(MessageList, { 
        params:param,
        
        headers:{
          Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiOTUxMTUwNjIyMSJ9.l01v-lqS8dWvsrqwM073CvU1NaQoy5d7fcac3cS_SXY"
        }
        }).then((response)=>{
        
        const message=response.data.data;
        
        setMessage(message);   
         console.log(Message);
      })
      .catch((err)=>{
        console.log(err)
      });
    
    } 
  
    useEffect(()=>{
        getMessage();
      
    },[])




var result3 = "http://65.2.28.163";
var result5 = result3.concat(Message.userPhoto); 
console.log(result5);

  return (
    <div className='messageMainDiv'>
        <div className='messageDiv1'>
            <div>
                <BsArrowLeft fontSize={"30px"} />
            </div>
            <div>
                <span>Message</span>
            </div>
            <div>
                <BsSearch fontSize={"30px"}/>
            </div>
        </div>
        {
        data.map((el,i)=>{
            return(
                
            <div className='messageDiv2'>
            <div className='messageDiv12 'onClick={() => navigate({
      pathname: "/chat",
      search: createSearchParams({
        id:el.userId,
        name:el.userName,
        designation:el.designation,
        image:result3.concat(el.userPhoto)
      }).toString()
    })}>
                <div className='NmessageImage'>
                    <img src={result3.concat(el.userPhoto)} />
                </div>
                <div className='messageDiv121'>
                    <div>
                        {el.userName}
                    </div>
                    <div>
                        <p>{el.designation}</p>
                    </div>
                    <div >
                        <p>{el.lastMessage}</p>
                    </div>
                    <div>
                        <p>{el.lastMessageTime}</p>
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
