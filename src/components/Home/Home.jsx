import './Home.css';



import myImage1 from '../../Images/img_357118.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import Button from '@mui/material/Button';

import axios from 'axios';




import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MessageIcon from '@mui/icons-material/Message';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';

import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from "react-router-dom";




import Switch from '@mui/material/Switch';

import FormControlLabel from '@mui/material/FormControlLabel';


import {useState} from "react";
import { useSwipeable } from "react-swipeable";
import './Homepage';

import Homepage from './Homepage';
import { cardstack } from '../../Config/ApiUrls';
import { hcardview } from '../../Config/ApiUrls';
/* import { cardrequest } from '../../Config/ApiUrls';
import { cardselect } from '../../Config/ApiUrls'; */
import { hCardBankrequest } from '../../Config/ApiUrls';


import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';



import {MdAttachFile} from 'react-icons/md';

import {AiOutlineCloseCircle} from 'react-icons/ai';


import {AiFillStar} from 'react-icons/ai';
import {AiFillGift} from 'react-icons/ai';

import Dialog from '@mui/material/Dialog';
import { useEffect } from 'react';

import ReactPlayer from 'react-player'

import { baseURL } from '../../Config/ApiUrls';

import { createSearchParams, Link  } from "react-router-dom";





function Home() {
 
  const navigate = useNavigate();
  const [hdata,hsetData]=useState([{}]);
  const [card,setCard]=useState({});
  var [count,setCount]=useState(0);
  const [cardrequests,setcardrequests]=useState([{}]);
  
  const [cardBanks,setCardBanks]=useState({});
 
  const data=new Array(
    {
        "userId": "10305",
        "userName": "Logesh D",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "2",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10883",
        "userName": "Mohammad Haris",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10795",
        "userName": "Sagar Kambli",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "2",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10384",
        "userName": "Rohit Kadam",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10722",
        "userName": "Swati Killedar",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10010",
        "userName": "Sghs Suus",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "2",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10985",
        "userName": "CS Swapnil",
        "userPhoto": "",
        "isLogin": "0",
        "designation": "Assistant Company Secretary",
        "status": "1",
        "connections": "0",
        "location": "City Corporation Limited (Amanora Park Town)",
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "11068",
        "userName": "Shailesh Kondhalkar",
        "userPhoto": "/sync/card/5aa62ff3dc86ae3e6dc1fe8798c9df09.jpg",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "11424",
        "userName": "Azhar Ansari",
        "userPhoto": "/sync/card/430aa62a4902a96e2c89158fe723b26f.jpeg",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "5",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "12200",
        "userName": "Abhijit Shinde",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10884",
        "userName": "Siddhant Salve",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "11718",
        "userName": "Satish Phatak",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "3",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10100",
        "userName": "Candace Decker",
        "userPhoto": "/sync/card/d0f6c2a77c2aa58e24b6741c042643c4.png",
        "isLogin": "0",
        "designation": "Real Estate",
        "status": "1",
        "connections": "10",
        "location": "United States",
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10953",
        "userName": "Sunil Shelar",
        "userPhoto": "/sync/card/dd3b9de38d03083fe0e0bb423c878ace.jpg",
        "isLogin": "0",
        "designation": "Admin officer At MCDC",
        "status": "1",
        "connections": "7",
        "location": "Pune",
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "11683",
        "userName": "Prasanna Adawadkar",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10351",
        "userName": "Prasad Kate",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "11757",
        "userName": "Yash Kadam",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "1",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10774",
        "userName": "Vernetta Schafer",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "9771",
        "userName": "Parker Thompson",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    },
    {
        "userId": "10990",
        "userName": "Rohit Khatod",
        "userPhoto": "",
        "isLogin": "0",
        "designation": null,
        "status": "1",
        "connections": "0",
        "location": null,
        "mutuals": [],
        "totalMutuals": 0,
        "rating": "5.0"
    })

  const stackapi=()=>{
   


    const param = new URLSearchParams({userId: 10005,showcase:true});
      axios.get(cardstack, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response50)=>{
      console.log("a");
      
      
       hsetData(response50.data.data);   
       
    })
    .catch((err)=>{
      console.log(err)
    });

  }

  useEffect(()=>{
    stackapi();
    
  },[])
  
/* console.log(data); */


const [home, setHome] = React.useState(true);
const [image, setimage] = React.useState(false);


const [open, setOpen] = React.useState(false);
const handleClose = () => setOpen(false);
const [opens,setOpens]=React.useState(false);

setTimeout(() => {
  setHome(false);
  setimage(true);
      }, 10000);


const getCard=()=>{
  
  const param = new URLSearchParams({userId: +hdata[count].userId});
    axios.get(hcardview, { 
    params:param,
    
    headers:{
      Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiOTUxMTUwNjIyMSJ9.l01v-lqS8dWvsrqwM073CvU1NaQoy5d7fcac3cS_SXY"
    }
    }).then((response)=>{
    
    const dataCard=response.data.data;
    
     setCard(dataCard);   
     console.log(card);
  })
  .catch((err)=>{
    console.log(err)
  });

} 


 if(count>0)
 var result30=hdata[count-1].userId;

  const hpostcardbank=()=>{
    let formData = new FormData();    //formdata object
    
    formData.append('cardId', card.cardId);   //append the values with key, value pair
    formData.append('fromUser', 10005);
    formData.append('toUser', hdata[count-1].userId);
    formData.append('cardType', 1);
    
    
    axios.post(hCardBankrequest, formData,{
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiOTUxMTUwNjIyMSJ9.l01v-lqS8dWvsrqwM073CvU1NaQoy5d7fcac3cS_SXY"
      }
      })
        .then(response => {
          console.log("b"); 
          const dataCard2=response.data.data;
          setCardBanks(dataCard2);  
           
          console.log(cardBanks);
        })
        .catch(error => {
          console.log("error",err)
        });
      }


const handlersBox = useSwipeable({
    
  onSwiped: ({ dir, event }) => {
    // NOTE: this stops the propagation of the event
    // from reaching the document swipe listeners
    event.stopPropagation();
    /* getCard(); */
    if(dir==='Right'){
      
      /* postcardselect(); */
       
       setOpen(true);
       setCount(count+1);
       
  
    }
    
    else if(dir==='Left')
    { 
       /* postcardselect();  */
      setCount(count+1);  
    

    }

  
},
preventDefaultTouchmoveEvent: true
});

const [checked, setChecked] = React.useState(false);
const [checked0, setChecked0] = React.useState(false);
const [checked1, setChecked1] = React.useState(false);


const handleChange = () => {
  
  setChecked((prev) => !prev);
  navigate("/feed");
};

const handleChange0 = () => {
  setChecked0((prev) => !prev);
};

const handleChange1 = () => {
  
  getCard();
  
  
  setChecked1((prev) => !prev);
 /*  setImage7(result7);
  setImage8(result8); */



};

const Submit=(e)=>{

hpostcardbank();
setOpen(false);

}

var count=7;
var result0 =String(data[count].userName)
var result1 = String(data[count].rating)
var result2 = String(data[count].connections)
var res =data[count].userId
var resultimage = String(data[count].userPhoto);


var result16=`${(data[count-1].userName)}`;
var result17 =" I'd like to add you to my professional network on HandShake";
var result19 ="Hi ";
var result20 =result19+(result16);
var result18 =result20+(result17);
var result3 = `${card.frontImage}`;
var result4 = `${card.backImage}`;
var result8 = `${card.frontVideo}`; 
var result9 =`${card.backVideo}`;
var result10 = result3=="";
var result11 = result4=="";








var result5 =  baseURL.concat(result3)
var result6 = baseURL.concat(result4)

var result12 =  baseURL.concat(result8)
var result13 = baseURL.concat(result9)

var result70 =baseURL+resultimage






return (

<div>

<div>
<Drawer
          PaperProps={{
            sx: { width: "66%",height:"100%" },
          }}
            
           open={opens} onClose={()=>setOpens(false)}>
        <Box display="flex" p={4} mt={3}   fontWeight={500}>
        
        <img  class="face5" src={myImage1} onClick={() => navigate("/profile")}/>
        <Box display="flex" sx={{ flexDirection: 'column' }}>
        <Typography>
        <Box   fontWeight="fontWeightBold">Sachin Aggarwal
        </Box> 
        <Box mt={2} mb={5} fontWeight="fontWeightLight" fontSize={12} >Your Designation Here
        </Box> 
        </Typography>
        <Button variant="contained" sx={{
    width: '100',
    
    color: 'white',
    backgroundColor:'red',
    borderRadius: '100px',
    margin:'auto',
  }}>Logout</Button>
        </Box></Box>
        <Divider/>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeOutlinedIcon onClick={() => navigate("/home")}/>  
              </ListItemIcon>
              <ListItemText primary="Home" onClick={() => navigate("/home")}/>   

            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <CardGiftcardTwoToneIcon onClick={() => navigate("/feed")}/>
              </ListItemIcon>
              <ListItemText primary="Feed" onClick={() => navigate("/feed")}/>   
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <CardGiftcardTwoToneIcon onClick={() => navigate("/myshop")}/>  
              </ListItemIcon>
              <ListItemText primary="My Shop" onClick={() => navigate("/myshop")}/>   
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <CardGiftcardTwoToneIcon onClick={() => navigate("/myenqueries")}/>  
              </ListItemIcon>
              <ListItemText primary="My Enqueries" onClick={() => navigate("/myenqueries")}/>   
            </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <DesignServicesOutlinedIcon onClick={() => navigate("/design")}/>  
              </ListItemIcon>
              <ListItemText primary="Design" onClick={() => navigate("/design")}/>  
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <CreditCardIcon onClick={() => navigate("/cardwizard")} />
              </ListItemIcon>
              <ListItemText primary="Card Wizard" onClick={() => navigate("/cardwizard")}/>  
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <InboxIcon onClick={() => navigate("/templates")}/>
              </ListItemIcon>
              <ListItemText primary="Templates" onClick={() => navigate("/templates")}/>  
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MailOutlinedIcon onClick={() => navigate("/inbox")}/>  
              </ListItemIcon>
              <ListItemText primary="Inbox" onClick={() => navigate("/inbox")}/>   
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <NearMeOutlinedIcon onClick={() => navigate("/sendcard")}/>
               
 


              </ListItemIcon>
              <ListItemText primary="Send Card" onClick={() => navigate("/sendcard")}/> 
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Groups3OutlinedIcon onClick={() => navigate("/meetings")}/>  
              </ListItemIcon>
              <ListItemText primary="Meetings" onClick={() => navigate("/meetings")}/>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <PaymentOutlinedIcon onClick={() => navigate("/cardbank")}/>  
              </ListItemIcon>
              <ListItemText primary="Card Bank" onClick={() => navigate("/cardbank")}/>  
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MessageIcon onClick={() => navigate("/message")}/>  
              </ListItemIcon>
              <ListItemText primary="Message" onClick={() => navigate("/message")}/>  
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <WysiwygRoundedIcon onClick={() => navigate("/mycards")}/>    
              </ListItemIcon>
              <ListItemText primary="My Cards" onClick={() => navigate("/mycards")}/>    
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <DocumentScannerOutlinedIcon onClick={() => navigate("/scancards")}/>  
              </ListItemIcon>
              <ListItemText primary="Scanned Card" onClick={() => navigate("/scancards")} />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <QrCodeScannerIcon onClick={() => navigate("/qrscanner")}/>
                
              </ListItemIcon>
              <ListItemText primary="QR Scanner" onClick={() => navigate("/qrscanner")}/> 
            </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <SettingsApplicationsIcon onClick={() => navigate("/settings")}/>  
              </ListItemIcon>
              <ListItemText primary="Settings" onClick={() => navigate("/settings")}/>  
            </ListItemButton>
            </ListItem>

           
    
                
              
        </List>
        
          
        </Drawer>

        </div>      
        <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{
    height: 75,
    width:'100%',
    
    
  
  }}  color="default" position="static">
        <Toolbar>
        <MenuOpenIcon  sx={{
    width: 30,
    position:'relative',
  
  }} 
  edge="start"
  fontSize='large' htmlColor="black" onClick={()=>setOpens(true)}/> 
  
  
  <header class="header1">
  
  <div>
   
      <FormControlLabel
        control={<Switch color='error' size='medium' checked={checked} onChange={handleChange} />}
      />
     
    </div>
 
 
  <div><img  class="newImage" src={myImage1} onClick={() => navigate("/profile")} /></div> 
  
  <div><SearchIcon  onClick={() => navigate("/search")} sx={{
    width: 30/* ,position:'relative',left:400, */
    
  }} fontSize='large'/> </div> 
    
    <div> <NotificationsNoneIcon  onClick={() => navigate("/notification")}  sx={{
    width: 30/* ,position:'relative',left:200, */
    
  }}fontSize='large' htmlColor="black"/></div> 
    
    <div><ForumOutlinedIcon  onClick={() => navigate("/message")} sx={{
    width: 30,
    
  }} fontSize='large' htmlColor="black" /> </div> 

  </header>
          
       </Toolbar> 
      </AppBar>
    </Box>
   {home && <Homepage/>}
   
   {image&& <div class="hmain5" {...handlersBox}>
   <img class="himage5" src={result70}/>
    <Dialog 
        PaperProps={{
          sx: {
            width: "90%",
            height: "50%",
            borderRadius: 5,
            position:'relative',
            bottom:140,
            
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography sx={{ml:2, mt:2,textAlign:'left' }} id="modal-modal-title" variant="h6" component="h2">
            Send Card <AiOutlineCloseCircle  style={{
            top:'2px',color:'red',position:'relative',left:'154px'}}size='30px' onClick={() => setOpen(false)}/>
          </Typography>
          
          <Typography sx={{ ml:2,mt:2,textAlign:'left' }} id="modal-modal-description" variant="h6" component="h2" >
            Message
          </Typography>

          <TextField  defaultValue= {result18} multiline={true}
         rows={3}
        sx={{marginLeft:3,
      width:"84%",
      marginTop:1,
      borderRadius:5,
      height:100
      
        
    }}
    InputProps={{
        style: {
            color: "black",
            
            
            
        }
    }}
/>

<TextField defaultValue="Attachment: " multiline={true}
         rows={1}
        sx={{marginLeft:3,
      width:"84%",
      marginTop:3,
      borderRadius:5,
      
      
        
    }}
    InputProps={{ endAdornment: (
      <InputAdornment position="end">
        <MdAttachFile size='30px'
         />
      </InputAdornment>
    ),
        style: {
            color: "black",
            
            
            
        }
    }}
    endAdornment={
      <InputAdornment position="end">
        <MdAttachFile/></InputAdornment>
         
        
      
    }
/>

<Button variant="contained" sx={{
    width: '300px',
    color: 'white',
    backgroundColor:'red',
    borderRadius: '100px',
    margin:'auto',
    height:'48px',mt:3,ml:3
  }}  onClick={(e) =>{Submit(e)}}>Submit</Button>
         
        </Box>
     
                   
                  
                
              
           
      </Dialog>
      <div className="himage_overlay5">
        <div className="himage_title5" onClick={() => navigate({
      pathname: "/profile",
      search: createSearchParams({
        id1:res,
       }).toString()
    })}>{result0}</div>
        <div className="himage_description5"><AiFillStar color='yellow' size="17px"/>&nbsp;{result1}&nbsp;Ratings&nbsp;&nbsp;&nbsp;<span onClick={() => navigate({
      pathname: "/conncection",
      search: createSearchParams({
        id5:res,
       }).toString()
    })} ><AiFillGift color='white' size="17px"/>&nbsp;{result2}&nbsp;Connection(s)</span></div>
        
        <FormControlLabel sx={{margin:'auto',zIndex:0,position:'relative'}}
   control={<Switch size='medium' color='error' checked={checked1}  onChange={handleChange1}  />}
   />
        </div> 

      {checked1 &&   <div  className={checked0 ? "hthecard5" : "hisflipped5"}>
{checked1 && (!result10) &&<div class="hthefront5"><img  src={result5} width="100%" height="100%"/></div>
}

{checked1 && result10 &&<div class="hthefront5"><ReactPlayer
          url={result12}
          playing={true}
           width="100%"
          height="100%" 
        /></div>
}


{checked1 && (!result11) &&
<div class="htheback5"> <img src={result6} width="100%" height="100%"/> 
</div>}

{checked1 && result11 && 
<div class="htheback5"> <ReactPlayer
          url={result13}
          playing={true}
           width="100%"
          height="100%" 
        />
</div>}



</div>}


{checked1 && <FormControlLabel sx={{margin:'auto',zIndex:2,position:'relative',textAlign:'center',left:160,top:404}}
      value={"yes"} control={<Switch size='medium' color='error' checked={checked1}  onChange={handleChange1}  />}
   />}
   {checked1&&<FormControlLabel sx={{margin:'auto',zIndex:2,position:'relative',textAlign:'right',left:200}}
      value={"yes"} control={<Switch size='medium' color='error' checked={checked0}  onChange={handleChange0}  />}
   />}     
       
        </div>}

    
 
  
  
 
  
  <Box /* sx={{ flexGrow: 1 }} */>
  <AppBar sx={{
    height: 75,
    width:'100%',
    
    position:'absolute',
    /* bottom:'2px' */  
  
  }} color="default" position="static">
        <Toolbar>
 {/*  <div class="navigation"> */}
  <Groups3OutlinedIcon  onClick={() => navigate("/meetings")} sx={{
    width: 75,
    
    }} fontSize='large' htmlColor="black"/> 
    
    <MailOutlinedIcon  onClick={() => navigate("/inbox")} sx={{
    width: 75,
    
    }} fontSize='large'/>
    
    <DesignServicesOutlinedIcon onClick={() => navigate("/design")}   sx={{
    width: 75,
    
    }} fontSize='large' htmlColor="black"/>  
    
    <NearMeOutlinedIcon onClick={() => navigate("/sendcard")}  sx={{
    width: 75,
    
  }} fontSize='large' htmlColor="black"/> 
    <AddCardOutlinedIcon onClick={() => navigate("/cardbank")} sx={{
    width: 75,
    
  }} fontSize='large' htmlColor="black"/> 
        
{/* </div> */}
</Toolbar></AppBar></Box>
  </div>
  
)
}

export default Home
