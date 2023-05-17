import React from 'react'
import Card from '@mui/material/Card';
import './CardBank.css';

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


import {CardBankrequest} from '../../Config/ApiUrls';
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
const CardBank = () => {
  
  const navigate = useNavigate();




  const [open,setOpen]=React.useState(false);
  const [banks,setBanks]=useState([{}]);
  const [banks1,setBanks1]=useState([{}]);
 const [banks2,setBanks2]=useState([{}]);
 const [value, setValue] = React.useState(0);
 const [value1, setValue1] = React.useState(false);
 const [id, setId] = React.useState(0);
 const [id1, setId1] = React.useState(0);
 const [id7, setId7] = React.useState(0);
 const [Connections,setConnections]=useState([{}]);
 const [Connections1,setConnections1]=useState([]);
 const [id9, setId9] = React.useState(0);

 const handleClose = () => setOpen(false);

 const [checkedState, setCheckedState] = useState(
  new Array(Connections.length).fill(false)
);

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

  const data1=new Array(
    {
        "id": "2",
        "group_name": "I.T ENGINEERS"
    },
    {
        "id": "3",
        "group_name": "Painters"
    },
    {
        "id": "6",
        "group_name": "Dm"
    },
    {
        "id": "27",
        "group_name": "Test"
    },
    {
        "id": "28",
        "group_name": "Marketing"
    },
    {
        "id": "37",
        "group_name": "Handshake Pune Office"
    }
  )
/* console.log("csk",checkedState)
 const handleChange0 = () => {
  setValue1((prev) => !prev);
}; */

 const handleTabs=(id,val) => {
   setValue1(val);
   setId(id);
   /* getBank(); */
 }

 const handleTabs1=(val) => {
  
  setId9(val);
  /* getBank(); */
}


 const handleTabs5=(bid) => {
  
  setId1(bid);
  
  /* getBank(); */
}

const handleTabs2=(id,val) => {
  setValue(val);
  setId(id);
  /* getBank(); */
}

const handleTabs3=(id,val) => {
  setValue(val);
  setId(id);
  /* getBank(); */
}

const handleTabs7=(bid1) => {
  
  /* setId1(bid); */
  setId7(bid1);
  setOpen(true);

  /* getBank(); */
}


/*  const getConnections1=(id,val) => {
  setValue(val);
  setId(id);
  /* getBank(); */

  




  const handleOnChange = (position,id) => {
    
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

  
 /*    console.log("position",position);
    console.log("id",id);
    setCheckedState(updatedCheckedState);
    console.log("u",updatedCheckedState); */
    
    
    
  /*   else
    {
      var Con3=[]
      Connections1.filter(function (letter) {
        return letter !== 'id';  
    })
  
    
  } */
  setCheckedState(updatedCheckedState);
  
  var check = Connections1.includes(id);
  
  if(check==true)
  {
  console.log("e")
  let index1=Connections1.indexOf(id)
  Connections1.splice(index1, 1);

  }
  else
  {
  Connections1.push(id)

  }
  
setConnections1(Connections1)  
}

  

  
  const deleteConnection1=()=>{

  


  
  var urlencoded = new URLSearchParams();
  urlencoded.append("bankId", id1);
  
  axios
  .delete(deleteConnection, {
    headers:{'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiOTUxMTUwNjIyMSJ9.l01v-lqS8dWvsrqwM073CvU1NaQoy5d7fcac3cS_SXY"},
    data:urlencoded
  }
    
  )
  .then(res => {
  console.log("A");  
  console.log(id1);
  })
  .catch(err => {
    console.log(err);
  });
  };

  useEffect(()=>{
    deleteConnection1();
    
  },[id1])


  

  const getConnections1=()=>{
    
    const param = new URLSearchParams({userId:id7});
      axios.get(getConnections, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response5)=>{
        
        var card5=response5.data.data;
        
        


setConnections(card5);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  console.log("c",Connections.length)

  useEffect(()=>{
    getConnections1();
    
  },[id7])


  const getBank=()=>{
    
    const param = new URLSearchParams({userId:"10005",groupId:id});
      axios.get(CardsBanks, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response)=>{
        
        var card1=response.data.data;
        
        
        card1.forEach(myFunction);

        function myFunction(item,index,arr){
          arr[index]=item.user; 
          }

setBanks(card1);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  

  useEffect(()=>{
    getBank();
    
  },[id])

   const getBank1=()=>{
    
    const param = new URLSearchParams({userId:"10005"});
      axios.get(CardsBanks, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response1)=>{
        
        var card2=response1.data.data;
          

  
        
    

setBanks1(card2);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  

  useEffect(()=>{
    getBank1();
    
  },[]) 


  
  const getBank3=()=>{
    
    const param = new URLSearchParams({userId:"10005"});
      axios.get(CardsBanks2, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response2)=>{
        
        var card3=response2.data.data;
        card3.splice(0,0,{id: "0", group_name: "All"});
        
     

setBanks2(card3);
    

      
         
      
    })
    .catch((err)=>{
      console.log(err)
    });
  
  } 
  

  useEffect(()=>{
    getBank3();
    
  },[])
 


  var arrayOfObject = banks.map(function (value, index){
    return [value, banks1[index]]
 });


console.log(arrayOfObject);
console.log("new");


var result3= "https://cors-anywhere-solai.fly.dev/http://65.2.28.163";
  console.log(id);
  
  console.log(banks);
  /* console.log(banks1); */
  console.log("sachin");
  
  console.log(banks2);

  console.log(banks2.group_name);
  console.log(Connections);
  console.log("a",...Connections1)



  var result3= "https://cors-anywhere-solai.fly.dev/http://65.2.28.163";
  var result5 = result3.concat(banks.avatar);



    return (
    
    <div>
    <header className="Navbar">
          <div className="Toolbar">
           
          <div className="Title"> Card Bank </div>
          <SearchIcon sx={{  }}  fontSize="large"  />
          {/* <div className="Toolbar"/> */}

       
          </div>
        </header>
        <div className="Toolbar"/>
        
        <Dialog 
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            borderRadius: 5,
            position:'relative',
            top:70,
             
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography sx={{ml:2, mt:2,textAlign:'left' ,color:'blue'}} id="modal-modal-title" variant="h6" component="h2">
            Refer to  <button type="button" class="button4"  onClick={() => handleTabs1(el[1].bankId)} >Done</button>
          </Typography>
          </Box>
{
          Connections?.map(function(el,i){
       return(
          <div className="cflex">
          <img  class="face9" src={result3.concat(el.userPhoto)} />
          <Typography sx={{ml:2,textAlign:'left' ,color:'black'}} id="modal-modal-title" variant="h6" component="h2">
            {el.userName}
          </Typography>
          
          <Box sx={{
  
  display:"flex",
  justifyContent:"flex-start"
          }}>
  
   <Checkbox  sx={{ color:'green',}} checked={checkedState[i]} onChange={() => handleOnChange(i,el.userId)} />
    
</Box>    </div>
       )})}
         
         
     
                   
                  
                
              
           
      </Dialog>




<Tabs value={value} /* onChange={handleTabs}  */>
       {
       
       data1.map(function(el,i){
       return(
        <div className='tab'>
         
           <Tab style={{width:"10%",color:"blue",fontSize:"10px"}} label= {el.group_name}  onClick={() => handleTabs(el.id,i)} />
           
           </div>
           
       )})}
        
           </Tabs>    
         
       {
       
       data.map(function(el,i){
       return(
        <div class="flexbox-container">
        <Card sx={{ width: 392,height:320,border:'transparent',m:'auto',mb:'10px',position:'relative',top:100,backgroundColor:'pink',borderRadius:'14px', }}   >
        <Box    fontWeight={500}>
        
        
        <Box   onClick={() => navigate({
      pathname: "/cardview",
      search: createSearchParams({
        id:el[0].userId,
     
      }).toString()
    })}>
        <Typography>
        <Box className='top'>
        <img  className='face' src={result3.concat(el.avatar)} />   
        <div style={{
         position: 'relative',right: '70px'}}>
        <Box  sx={{textAlign:"left",position:"relative",left:"90px"}} fontWeight="fontWeightBold">{el.firstName} { el.lastName}
        </Box> 
        <Box  sx={{textAlign:"left",position:"relative",left:"90px"}} fontWeight="fontWeightLight">{el.designation}
        </Box> 
        <Box  sx={{textAlign:"left",position:"relative",left:"90px"}} mt={1} mb={5} fontWeight="fontWeightLight" fontSize={10}  >Connect @ :{ el.updatedAt }
        </Box></div></Box> 
        <Box  sx={{textAlign:"left",position:"relative",top:"23px"}}  fontWeight="fontWeightLight" fontSize={12}> <div style={{margin:"23px"}}><AiFillMobile />&nbsp;&nbsp;&nbsp;+{el.phoneNo} </div>
        </Box> 
        <Box sx={{textAlign:"left",position:"relative",top:"5px"}}   fontWeight="fontWeightLight" fontSize={12} ><div style={{margin:"23px"}}><FaRegEnvelopeOpen /><span>&nbsp;&nbsp;&nbsp;{el.email}</span>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        <FaIdCard  style={{
        position:"relative",bottom:"21px", marginRight:'10px',textAlign:"right"}}color='red' size="30px"/><HiOutlineShoppingBag style={{  position:"relative",bottom:"21px",
          
          
        }} size="30px" color='red' /></div></div>
        </Box> 
        
        
        
        
        </Typography>
        <Divider variant="middle"sx={{ backgroundColor: 'white'}}/>
        </Box></Box>
        
        
        
        <footer class="footer1">
  
    <div  onClick={() => handleTabs7(el[0].userId)}>
    <AiOutlineUserDelete  />
    <h6>Refer</h6></div>
    <div  onClick={() => navigate({
      pathname: "/chat",
      search: createSearchParams({
        id:el[0].userId,
        name:el[0].firstName+el[0].lastName,
        designation:el[0].designation,
        image:result3.concat(el[0].avatar)
      }).toString()
    })}   ><AiOutlineMessage />
    <h6>Message</h6></div>
    <div><AiOutlineUsergroupAdd/>
    <h6>Assign Group</h6></div>
    <div   onClick={() => handleTabs5(el[1].bankId)}><RiDeleteBin6Line/><h6>Delete</h6></div>
    
</footer>
    </Card>
    </div>  

       )

       } )} 
        
        

    </div>
  )
}

export default CardBank
