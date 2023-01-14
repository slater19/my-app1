import React from 'react'
import'./SendCard.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import myImage from '../../Images/Mocks_Profiles_Stephen.jpg';
import myImage1 from '../../Images/Front view.png';
import myImage2 from '../../Images/icons8-red-circle-48.png';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

const SendCard = () => {const navigate = useNavigate();
  return (
    <div>
         <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Send Card </div>
            <ShareOutlinedIcon    sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 
  }} />
          </div>
        </header>
        <div className="Toolbar"/> 
        
        <article class="main">
        <img  class="image1" src={myImage1}/> <br/>
<img  class="image" src={myImage}/> <br/>  

<img  class="image2" src={myImage2}/>
  
   <br/>   
   </article>
  <footer class="footer5">
  <div><NearMeOutlinedIcon   sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 
  }}/>
    <Box fontWeight="fontWeightLight" color='grey'>Send Card</Box></div>
    </footer>
  

    </div>
  )
}

export default SendCard
