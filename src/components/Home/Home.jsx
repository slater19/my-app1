import './Home.css';
import myImage from '../../Images/Mocks_Profiles_Stephen.jpg';
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
import myImage5 from '../../Images/O4YINS0.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  { Component } from 'react';



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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
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

import { CSSTransition } from 'react-transition-group';


import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { red } from '@mui/material/colors';



function Home() {

  const [opens,setOpens]=React.useState(false);
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    checkedA: true,
  });
  
  
  
  
  
  
  const container = () => 
    document.getElementById('container');
  
  
  const [checked, setChecked] = React.useState(false);
  const [checked0, setChecked0] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  
  const handleChange = () => {
    
    setChecked((prev) => !prev);
  };
  
  const handleChange0 = () => {
    setChecked0((prev) => !prev);
  };
  
  const handleChange1 = () => {
    /* container.classList.toggle('is-flipped'); */
    setChecked1((prev) => !prev);
  };
  
  
  
  return (
  
  <div>
  
  
  <div>
  <Drawer
            
            
           
            
            PaperProps={{
              sx: { width: "66%" },
            }}
              
             open={opens} onClose={()=>setOpens(false)}>
          <Box display="flex" p={4} mt={3}   fontWeight={500}>
          
          <img  class="face5" src={myImage1} />
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
                <DocumentScannerOutlinedIcon onClick={() => navigate("/scannedcard")}/>  
                </ListItemIcon>
                <ListItemText primary="Scanned Card" />
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
   
   
    <div><img  class="newImage" src={myImage1} onClick={() => navigate("/profile")}/></div> 
    
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
  
  
      <article class="main" >
    {/*  <img  class="image" src={myImage}/> */}
  
      
      <img  class="image" src={myImage} /> 
      {checked1&&<FormControlLabel sx={{margin:'auto',zIndex:0,position:'relative',textAlign:'center',bottom:100}}
        value={"yes"} control={<Switch size='medium' color='error' checked={checked1}  onChange={handleChange1}  />}
     />}
     
      {/* <Card class="image" >abcd</Card> */}
        
         
  {/*       {checked1 &&  <Card class="card">
        <FormControlLabel sx={{margin:'auto',zIndex:1,position:'relative',}}
      control={<Switch size='medium' color='error' checked={checked1}  onChange={handleChange1}  />}
     />
           </Card>} */}
           {checked1&&<FormControlLabel sx={{margin:'auto',zIndex:2,position:'relative',textAlign:'right',bottom:500,left:100}}
        value={"yes"} control={<Switch size='medium' color='error' checked={checked0}  onChange={handleChange0}  />}
     />}    
           <div  id="container" className={checked0 ? "thecard" : "isflipped"}>
  {/* {checked1 &&  <Card class="card"></Card>} */}
  
  {checked1 &&<div class="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>
  }
  {checked1 &&
  <div class="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
  </div>}
  </div>
  <FormControlLabel sx={{margin:'auto',zIndex:2,position:'relative',bottom:100}}
     control={<Switch size='medium' color='error' checked={checked1}  onChange={handleChange1}  />}
     />
          </article>
  
      
   
    
    
   
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{
      height: 120,
      
    
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
  