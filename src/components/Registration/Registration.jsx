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

import TextField from '@mui/material/TextField';

import countries from 'countries-list';
import countryCodes from 'country-codes-list';






function Registration() {const navigate = useNavigate();

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const [country, setCountry] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');

  const myCountryCodes = Object.values(countryCodes.customList('countryCode', '{countryNameEn} ({countryCode})+{countryCallingCode}'));
  const gender1=['Select Gender','Male','Female','Company'];
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  
  const handleChange1 = (event) => {
    setPhone(event.target.value);
  };

  const handleChange2 = (event) => {
    setFirst(event.target.value);
  };
  
  const handleChange3 = (event) => {
    setLast(event.target.value);
  };

  const handleChange4 = (event) => {
    setGender(event.target.value);
  };
  
  const handleChange5 = (event) => {
    setEmail(event.target.value);
  };

  
  
  
  
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
       

    

<div>
<TextField  sx={{mt:4, ml: 4,mb:1, width: '31ch' }} 
         required
          id="standard-select-currency"
          select
          label="Select"
          
          value={country}
          onChange={handleChange}>
          {myCountryCodes.map((option,i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>




<TextField sx={{mt:4, ml: 4,mb:1, width: '31ch' }} 
        required
        variant="standard"
        id="input-with-icon-textfield"
        label="TextField"
        value={phone}
          onChange={handleChange1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneAndroidTwoToneIcon/>
            </InputAdornment>
          ),
        }}
      />

<TextField sx={{mt:4, ml: 4,mb:1, width: '31ch' }} 
        required
        variant="standard"
        id="input-with-icon-textfield"
        label="TextField"
        value={first}
          onChange={handleChange2}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdOutlinePerson/>
            </InputAdornment>
          ),
        }}
      />

<TextField sx={{mt:4, ml: 4,mb:1, width: '31ch' }} 
        required
        variant="standard"
        id="input-with-icon-textfield"
        label="TextField"
        value={last}
          onChange={handleChange3}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdOutlinePerson/>
            </InputAdornment>
          ),
        }}
      />

<TextField  sx={{mt:4, ml: 4,mb:1, width: '31ch' }} 
         required
         variant="standard"
          id="standard-select-currency"
          select
          label="Select"
          
          value={gender}
          onChange={handleChange4}>
          {gender1.map((option,i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>




<TextField sx={{mt:1, ml: 4,mb:1, width: '31ch' }} 
        required
        variant="standard"
        id="input-with-icon-textfield"
        label="TextField"
        value={email}
          onChange={handleChange5}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineMail/>
            </InputAdornment>
          ),
        }}
      />
    
       

       <Button  variant="contained" size='large' sx={{
   position:"relative",left: '15px',
   width: 310, padding: 1,
   color: 'white',
   backgroundColor:'red',
   borderRadius: '100px',
   margin:'auto',
 }} onClick={() => navigate("/home")}>Continue</Button>

</div>
        </Card>
     
     
    
      
     <p> By clicking sign in you agree with our <a>Terms</a> learn<br/>
      how we proceed your data in <a>Privacy policy</a> and <br/>
       <a>Cookie policy</a></p>
      
</div>
  )
}

export default Registration
