import React from 'react'
import './Chat.css';
import myImage1 from '../../Images/img_357118.png';
import { Box, fontWeight } from '@mui/system';
import Chip from '@mui/material/Chip';
import { MessageList1 } from '../../Config/ApiUrls';
import {useState,useEffect } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

import {AiFillDelete} from 'react-icons/ai';

import {TbArrowRampLeft2} from 'react-icons/tb';
import {TbArrowRampRight2} from 'react-icons/tb';
import { MessageList2 } from '../../Config/ApiUrls';
import { MessageList3 } from '../../Config/ApiUrls';
import {MdSend} from 'react-icons/md';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {IoMdAttach} from 'react-icons/io';

const Chat = () => {
  const [searchparams] = useSearchParams();
  const [Message1,setMessage1]=useState([{}]);
  const [isActive, setIsActive] = useState(true);
  const [Message2,setMessage2]=useState({});
  const [country, setCountry] = React.useState('');
  const [id, setId] = React.useState(0);
  
  const handleTabs5=() => {
    setMessage("");
    getCard2();
    
    
    
  }

const [home, setHome] = React.useState(false);
const [image, setimage] = React.useState(true);
const [message, setMessage] = useState('');

const handleMessageChange = event => {
  
  setMessage(event.target.value);
  console.log(event.target.value);
  
  

};

  const handleChange = (event) => {
    setHome(true);
    setimage(false);
    
  };

 
  const getCard2=()=>{

    /* handleTabs5 */
    

  
      var urlencoded = new URLSearchParams();
      urlencoded.append("sender", 10005);
      urlencoded.append("receiver", searchparams.get("id"));
      urlencoded.append("message",message );
      urlencoded.append("type", 1);
      
      axios.post(MessageList3, urlencoded, 
      {
      
      headers:{
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
  
      }
      }).then((response)=>{
      
      console.log("bc");
      
   
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 

  const data=new Array(
    {
        "date": "2023-02-23",
        "fileUrl": null,
        "msgContent": "Hi",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "11:22:18",
        "messageId": "4302",
        "bRead": "3",
        "dateTime": "2023-02-23 11:22:18",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2023-02-20",
        "fileUrl": null,
        "msgContent": "Namaste Raje.",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "12:33:00",
        "messageId": "4300",
        "bRead": "3",
        "dateTime": "2023-02-20 12:33:00",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2023-02-20",
        "fileUrl": null,
        "msgContent": "Ok.",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "12:32:52",
        "messageId": "4299",
        "bRead": "3",
        "dateTime": "2023-02-20 12:32:52",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "1"
    },
    {
        "date": "2023-02-20",
        "fileUrl": null,
        "msgContent": "digital seva ची सोय असेल तर जमल तर टाकून ठेवा.",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "12:29:32",
        "messageId": "4298",
        "bRead": "3",
        "dateTime": "2023-02-20 12:29:32",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2023-02-20",
        "fileUrl": null,
        "msgContent": "नमस्ते सर",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "12:09:20",
        "messageId": "4297",
        "bRead": "3",
        "dateTime": "2023-02-20 12:09:20",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-12-19",
        "fileUrl": null,
        "msgContent": "Bola",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "07:17:09",
        "messageId": "4218",
        "bRead": "3",
        "dateTime": "2022-12-19 07:17:09",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-09-12",
        "fileUrl": null,
        "msgContent": "Bola",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "08:15:00",
        "messageId": "4010",
        "bRead": "3",
        "dateTime": "2022-09-12 08:15:00",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-08-20",
        "fileUrl": null,
        "msgContent": "मित्राला १ ते २ दिवसापूर्वी कॉल येऊन गेला. Apps च्या संदर्भात",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "09:17:28",
        "messageId": "3989",
        "bRead": "3",
        "dateTime": "2022-08-20 09:17:28",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-21",
        "fileUrl": null,
        "msgContent": "Ok.",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "11:29:52",
        "messageId": "3811",
        "bRead": "3",
        "dateTime": "2022-05-21 11:29:52",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-21",
        "fileUrl": null,
        "msgContent": "Office madhye",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "10:54:08",
        "messageId": "3810",
        "bRead": "3",
        "dateTime": "2022-05-21 10:54:08",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-21",
        "fileUrl": null,
        "msgContent": "Sakali ek jan interview la yeun gela",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "10:52:19",
        "messageId": "3809",
        "bRead": "3",
        "dateTime": "2022-05-21 10:52:19",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-21",
        "fileUrl": null,
        "msgContent": "Bola Raje",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "10:49:32",
        "messageId": "3808",
        "bRead": "3",
        "dateTime": "2022-05-21 10:49:32",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": "/sync/card/17d407a00546a20b1b21c86e5cb6ee57.jpg",
        "msgContent": "",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "03:04:17",
        "messageId": "3798",
        "bRead": "3",
        "dateTime": "2022-05-18 03:04:17",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "7",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": null,
        "msgContent": "Ok\nSir\nThanks",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "01:52:44",
        "messageId": "3797",
        "bRead": "3",
        "dateTime": "2022-05-18 01:52:44",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": null,
        "msgContent": "Call kara kadhi tari mala",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "01:49:22",
        "messageId": "3796",
        "bRead": "3",
        "dateTime": "2022-05-18 01:49:22",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": null,
        "msgContent": "Congrats",
        "userPhoto": "/sync/card/ea489a12a3d6e0c724d92ff6f5a4d219.png",
        "time": "01:48:45",
        "messageId": "3795",
        "bRead": "3",
        "dateTime": "2022-05-18 01:48:45",
        "userName": "Tanmay Ratnaparkhi",
        "userId": "10005",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": null,
        "msgContent": "Naresh Oza आणि त्यांचा भाऊ",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "01:16:53",
        "messageId": "3793",
        "bRead": "3",
        "dateTime": "2022-05-18 01:16:53",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "6",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": "/sync/card/ae72e4cfff9be0811cc7c52e3730d87a.jpg",
        "msgContent": "",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "01:15:02",
        "messageId": "3792",
        "bRead": "3",
        "dateTime": "2022-05-18 01:15:02",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "7",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": "2022-05-18",
        "fileUrl": "/sync/card/ece2d019f12c4c0cd2c88d872a5b283a.jpg",
        "msgContent": "",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": "01:15:01",
        "messageId": "3791",
        "bRead": "3",
        "dateTime": "2022-05-18 01:15:01",
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "7",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    },
    {
        "date": null,
        "fileUrl": "",
        "msgContent": "Hi Tanmay Ratnaparkhi\nI'd like to add you to my professional network on HandShake",
        "userPhoto": "/sync/card/a3e8372c8df1abcb38ac6f0d8c494221.png",
        "time": null,
        "messageId": "3812",
        "bRead": "3",
        "dateTime": null,
        "userName": "Chirag Shende",
        "userId": "11396",
        "mimeType": "0",
        "messageStatus": "3",
        "delReceiver": "0",
        "delSender": "0"
    })



const getMessage1=()=>{



  const param = new URLSearchParams({sender:10005,receiver:searchparams.get("id")});
    axios.get(MessageList1, { 
    params:param,
    
    headers:{
      Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
    }
    }).then((response)=>{
    
    const message1=response.data.data;
    
    setMessage1(message1);   
     console.log(Message1);
  })
  .catch((err)=>{
    console.log(err)
  });

} 

useEffect(()=>{
    getMessage1();
  
},[message])

const delMessage1=()=>{

var formdata = new FormData();
formdata.append("messageId", );
formdata.append("delReceiver", 1);
formdata.append("delSender", 0);

axios
.delete(MessageList2, {
  headers: {
    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
  },
  data: {
    source: formdata
  }
})
.then(res => {
console.log("A");  
})
.catch(err => {
  console.log(err);
});
};
  
  
  
  
  return (
    <div>


{/* <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Meetings </div>
           
          </div>
        </header>
        <div className="Toolbar"/> */}


{home &&     <header className="Navbar">
          <div className="Toolbar">
           
          <div className="Title"> Card Bank </div>
          <TbArrowRampLeft2 fontSize="30px" /><AiFillDelete fontSize="30px"  onClick={delMessage1} /><TbArrowRampRight2 fontSize="30px" />
          <div className="Toolbar"/>

          </div>
        </header>}



        {image &&       <header className="Navbar">
          <div className="Toolbar">
          <div class="circular_image">
  <img  src={searchparams.get("image")}/>
</div>      
            <div className="heading">
            <div className="Title"> {searchparams.get("name")}
            {!searchparams.get("designation") && <Box className="Title1">{searchparams.get("designation")}</Box>}
            </div>
            
            </div>
            
           
          </div>
        </header> }
        <div className="Toolbar"/> 
        
        {
        data.map((el,i)=>{
            return(
        
        <div  className="message"   >
       {el.date && <Box textAlign='center' marginBottom='16px'> <Chip label={el.date} color="primary" variant="outlined" /></Box>}
         <p /* class="chat-bubble msg-in" */ className={el.userId==10005 ? 'chat-bubble msg-in' : 'none'}      onClick={handleChange}>{el.msgContent} </p>
         <p /* class="chat-bubble msg-in" */ className={el.userId==11396 ? 'chat-bubble msg-out' : 'none'}     onClick={handleChange}>{el.msgContent} </p>
        {/* <p class="chat-bubble msg-out">{el.msgContent}</p> */}
        </div>
            )})}


<div class="form-group">
<IoMdAttach style={{position:'relative',top:'34px',left:'25px'}} color='black' size="30px"/><MdSend  onClick={() => handleTabs5()}   style={{position:'relative',top:'34px',float:'right',right:'25px'}}  color='black' size="30px"/>
                <textarea class="form-control" rows="2" cols="14" id="message" name="message"   value={message}
        onChange={handleMessageChange}  placeholder="      Write Message..." tabindex="4"></textarea>
            </div>
    </div>
    
  )
}

export default Chat
