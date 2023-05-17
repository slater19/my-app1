import React, { useEffect } from 'react'
import './Login.css';
import myImage1 from '../../Images/Artboard.png';
import {SiAddthis} from 'react-icons/si';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BsPerson} from 'react-icons/bs';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import CardMedia from '@mui/material/CardMedia';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import { useNavigate } from "react-router-dom";
import { loginURL } from '../../Config/ApiUrls';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import countries from 'countries-list';
import countryCodes from 'country-codes-list';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {check} from '../../Store/Slices/LoginSlice.jsx';

function Login() {
  const navigate = useNavigate();
  const [country, setCountry] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [input,setinput]=React.useState(false);
  // const [pin,setpin]=React.useState(false);
  const [change,setchange]=React.useState(false);
  // const [apidata,setapidata]=React.useState('');
  // const [Password,setpassword]=React.useState('');
  // const [encrypt,setencrypt]=React.useState('');
  const myCountryCodes = Object.values(countryCodes.customList('countryCode', '{countryNameEn} ({countryCode})+{countryCallingCode}'));
  // const info =useSelector((store)=>{store.LoggedIns})
  
  const dispatch =useDispatch();


    const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleChange1 = (event) => {
    setPhone(event.target.value);   
  }

  // useEffect(()=>{
  //   setpin(country.split("+")[1]);
  //   setchange(!change)
  // },[country])

//   useEffect(()=>{
// setapidata(pin+phone)
//   },[change])
  
// useEffect(()=>{
// setpassword(window.btoa(window.btoa(apidata)))
// },[input])

// console.log("pin",pin)
// console.log("passout",Password)

// console.log("apidata",apidata)
//  console.log("pass",password) 

  const SignIn=(e)=>{
    e.preventDefault();
    const pin =country.split("+")[1]
    // setinput(!input)
    const Password =window.btoa(window.btoa(pin+phone))
    let urlencoded = new URLSearchParams();
urlencoded.append("countryCode", pin);
urlencoded.append("phoneNo", phone);
urlencoded.append("password", Password);
urlencoded.append("appVersion", "2.0");
console.log("passin",Password)
axios.post(loginURL,
  urlencoded,{
headers:{
    key: "Content-Type",
    value: "application/x-www-form-urlencoded"
  }
}
).then((data)=>{
  dispatch(check(data))
  console.log("data",data)
  console.log("info",pin,phone,Password)
// console.log("info",info)
}).catch((err)=>{
console.log("error",err)
})
  }
 
  
  return (
    <div>

<div className='para1'>
<img style={{ height:"100px", width:"100px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage1} alt="yoast seo" /> 
</div>
       <Card variant="outlined" sx={{zIndex:0, width: 350,height:380,m:'auto',mb:'10px',position:'relative',top:73,backgroundColor:'white',borderRadius:'19px', }}>
       

     
        <form method="POST" autoComplete="off" >
<div>
<TextField  sx={{mt:4, ml: 4,mb:5, width: '31ch' }} 
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
      
        <Button type='submit' variant="contained" size='large' sx={{
    position:"relative",left: '15px',
    width: 310, padding: 1,
    color: 'white',
    backgroundColor:'red',
    borderRadius: '100px',
    margin:'auto',
  }} onClick={(e) =>{SignIn(e)}}>Sign in</Button>
  </div>
  </form>

<p class="para1" > Or with social</p>
<div class="para1" >
<a href="#" class="fa fa-facebook" onClick={() => navigate("/redirect")}></a>  
<a href="#" class="fa fa-twitter" onClick={() => navigate("/redirect")}></a>  
<a href="#" class="fa fa-google" onClick={() => navigate("/redirect")}> </a>   
<a href="#" class="fa fa-linkedin" onClick={() => navigate("/redirect")}></a>  
</div>        
         </Card><br/>
         <Typography sx={{textAlign: "center",
    position: 'relative',
    top: '50px',
    color:'black',
    fontSize:13,
    
  }}> By clicking sign in you agree with our <a>Terms</a> Learn<br/>
      how we proceed your data in <a>Privacy policy</a> and <br/>
       <a>Cookie policy</a></Typography>
</div >
  )
}

export default Login
