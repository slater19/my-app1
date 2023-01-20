import React from 'react'
import'./MyCards.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import myImage from '../../Images/Mocks_Profiles_Stephen.jpg';
import myImage1 from '../../Images/Front view.png';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Box } from '@mui/system';
import myImage2 from '../../Images/pencil.png';
import myImage3 from '../../Images/pencil.png';
import users from '../Data/data';
import {HiOutlineKey} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";


const MyCards = () => {const navigate = useNavigate();
  return (
    <div>
         <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> My Cards </div>
            
          </div>
        </header>
        
        <div class="flexbox-container">
        {users.map(user=>{
       return(
        <div class="main">
       
        <img  class="image1" src={myImage1}/> <br/>
        <img  class="image" src={myImage}/> <br/>  
        

  
   <br/>   

   
  
  <footer class="footer">
  <div class="circletag">
    <img   src={myImage2}/> 
    </div>
    <div><HiOutlineKey class="circle-icon" size={37}/></div>
    <div>         <DeleteOutlinedIcon    sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 

  }} fontSize="large"/>
    </div>
    </footer>
    
   </div>
  
  
  
  )})}
   </div>
{/*   <div class="flexbox-container">
  {users.map(user=>{
       return(
  <footer class="footer">
  <div class="circletag">
    <img   src={myImage2}/> 
    </div>
    <div><HiOutlineKey class="circle-icon" size={37}/></div>
    <div>         <DeleteOutlinedIcon    sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 

  }} fontSize="large"/>
    </div>
    </footer>)})}
    </div>  */}

    </div>
  )
}

export default MyCards