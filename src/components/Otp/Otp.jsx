import React from 'react'
import './Otp.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';



const Otp = () => {

const navigate = useNavigate();   
  return (
    <div>
    
    <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Verify Mobile Number </div>
           
          </div>
        </header>
        <div className="Toolbar"/>

        <h2> Verification</h2>
    <p>A six digit Otp has been sent to</p>

        <Card variant="outlined" sx={{zIndex:0, width: 350,height:340,m:'auto',mb:'16px',position:'relative',backgroundColor:'white',borderRadius:'19px', }}>
       
        <div class="otp-page-wrapper">
  

<form class="otp" autocomplete="off" novalidate>
    <fieldset>
      <input maxlength="1"/>
      <input maxlength="1"/>
      <input maxlength="1"/>
      <input maxlength="1"/>
      <input maxlength="1"/>
      <input maxlength="1"/>
    </fieldset>
  </form>

</div> 

      
    
       

       <Button  variant="contained" size='large' sx={{
   position:"relative",left: '15px',
   width: 310, padding: 1,
   color: 'white',
   backgroundColor:'red',
   borderRadius: '100px',
   margin:'auto',
   mt:7,
 }} onClick={() => navigate("/home")}>Continue</Button>


        </Card>
     
        <div class="center">
 
 </div>
    
      
     <p class='para'> By clicking sign in you agree with our <a>Terms</a> learn<br/>
      how we proceed your data in <a>Privacy policy</a> and <br/>
       <a>Cookie policy</a></p>
     
    </div>
  )
}

export default Otp
