import React from 'react'
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

function Login() {
  const navigate = useNavigate();
  
  return (
    <div>

<div className='para1'>
<img style={{ height:"100px", width:"100px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage1} alt="yoast seo" /> 
</div>
       <Card variant="outlined" sx={{zIndex:0, width: 350,height:380,m:'auto',mb:'10px',position:'relative',top:73,backgroundColor:'white',borderRadius:'19px', }}>
       

        <FormControl sx={{mt:8, ml: 4, width: '31ch' }} variant="standard">
          
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
     
        

        <Button  variant="contained" size='large' sx={{
    position:"relative",left: '15px',
    width: 310, padding: 1,
    color: 'white',
    backgroundColor:'red',
    borderRadius: '100px',
    margin:'auto',
  }} onClick={() => navigate("/registration")}>Sign in</Button>

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
