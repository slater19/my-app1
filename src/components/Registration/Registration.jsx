import React from 'react'
import'./Registration.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';

import {MdOutlinePerson} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';




function Registration() {const navigate = useNavigate();
  return (
    <div>
     <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Create Account </div>
           
          </div>
        </header>
        <div className="Toolbar"/>

        <h2>Join Handshake</h2>
    <p>Fill the details & create your account</p>

        <Card variant="outlined" sx={{zIndex:0, width: 350,height:616,m:'auto',mb:'10px',position:'relative',top:4,backgroundColor:'white',borderRadius:'19px', }}>
       

       <FormControl sx={{mt:4, ml: 4, width: '31ch' }} variant="standard">
         
         <Input
           placeholder=""
           id="standard-adornment-password"
           type='text'
           startAdornment={
             <InputAdornment position="start">
              
                
               
             </InputAdornment>
           }
         />
       </FormControl>

       <FormControl sx={{mt:4, ml: 4,mb:5, width: '31ch' }} variant="standard">
         
         <Input
           placeholder="Phone Number"
           id="standard-adornment-password"
           type='text'
           startAdornment={
             <InputAdornment position="start">
               <PhoneAndroidTwoToneIcon/></InputAdornment>
                
               
             
           }
         />
       </FormControl>

       <FormControl sx={{mt:4, ml: 4,mb:5, width: '31ch' }} variant="standard">
         
         <Input
           placeholder="First Name"
           id="standard-adornment-password"
           type='text'
           startAdornment={
             <InputAdornment position="start">
               <MdOutlinePerson/></InputAdornment>
                
               
             
           }
         />
       </FormControl>

       <FormControl sx={{mt:4, ml: 4, width: '31ch' }} variant="standard">
         
         <Input
           placeholder="Last Name"
           id="standard-adornment-password"
           type='text'
           startAdornment={
             <InputAdornment position="start">
               <MdOutlinePerson/></InputAdornment>
                
               
             
           }
         />
       </FormControl>

       <FormControl sx={{ ml: 4,mb:5, width: '31ch' }} variant="standard">
       
       <InputLabel id="demo-simple-select-standard-label" 
                
               
             
           ><MdOutlinePerson/> <b>Select Gender</b></InputLabel>
     <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         
          label="Age"
        > 
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> 
       </FormControl>

       <FormControl sx={{mt:4, ml: 4,mb:5, width: '31ch' }} variant="standard">
         
         <Input
           placeholder="Email Address"
           id="standard-adornment-password"
           type='text'
           startAdornment={
             <InputAdornment position="start">
               <AiOutlineMail/></InputAdornment>
                
               
             
           }
         />
       </FormControl>
    
       

       <Button  variant="contained" size='large' sx={{
   position:"relative",left: '15px',
   width: 310, padding: 1,
   color: 'white',
   backgroundColor:'red',
   borderRadius: '100px',
   margin:'auto',
 }} onClick={() => navigate("/home")}>Continue</Button>


        </Card>
     
     
    
      
     <p> By clicking sign in you agree with our <a>Terms</a> learn<br/>
      how we proceed your data in <a>Privacy policy</a> and <br/>
       <a>Cookie policy</a></p>
      
</div>
  )
}

export default Registration
