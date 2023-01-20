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
import users from '../Data/data';
import { useNavigate } from "react-router-dom";

const CardBank = () => {
  
  const navigate = useNavigate();
    return (
    
    <div>
    <header className="Navbar">
          <div className="Toolbar">
           
          <div className="Title"> Card Bank </div>
          <SearchIcon sx={{  }}  fontSize="large"  />
          <div className="Toolbar"/>

          </div>
        </header>
       {users.map(user=>{
       return(
        <div class="flexbox-container">
        <Card sx={{ width: 350,height:410,border:'transparent',m:'auto',mb:'10px',position:'relative',top:100,backgroundColor:'pink',borderRadius:'10px', }}>
        <Box    fontWeight={500}>
        
        
        <Box>
        <Typography>
        <Box className='top'>
        <img  className='face' src="https://images.unsplash.com/photo-1563805042-7684c019e1cb" />   
        <div style={{
         position: 'relative',right: '70px'}}>
        <Box  sx={{textAlign:"left",position:"relative",left:"90px"}} fontWeight="fontWeightBold">Sachin Aggarwal
        </Box> 
        <Box  sx={{textAlign:"left",position:"relative",left:"90px"}} mt={1} mb={5} fontWeight="fontWeightLight" fontSize={10}  >Connect @ :
        </Box></div></Box> 
        <Box  sx={{textAlign:"left",position:"relative",top:"70px"}}  fontWeight="fontWeightLight" fontSize={12}> <div style={{margin:"30px"}}><AiFillMobile />&nbsp;&nbsp;&nbsp;+7838679330</div>
        </Box> 
        <Box sx={{textAlign:"left",position:"relative",top:"50px"}}   fontWeight="fontWeightLight" fontSize={12} ><div style={{margin:"30px"}}><FaRegEnvelopeOpen /><span>&nbsp;&nbsp;&nbsp;sachinaggarwal19@gmail.com</span>
        <FaIdCard  style={{
         position: 'relative',left: '50px',marginRight:'10px'}}color='red' size="30px"/><HiOutlineShoppingBag style={{
          position: 'relative',
          left: '50px',
        }} size="30px" color='red' /></div>
        </Box> 
        
        
        
        
        </Typography>
        </Box></Box>
        <br/><br/><br/><br/><br/>
        <Divider variant="middle"sx={{ backgroundColor: 'white'}}/>
        
        <footer class="footer1">
  {/*  <div class="navigation"> */}
    <div>
    <AiOutlineUserDelete/>
    <h6>Refers</h6></div>
    <div><AiOutlineMessage/>
    <h6>Messages</h6></div>
    <div><AiOutlineUsergroupAdd/>
    <h6>Assign Group</h6></div>
    <div><RiDeleteBin6Line/><h6>Delete</h6></div>
    
</footer>
    </Card>
    </div>  

       )

       })}
        
        

    </div>
  )
}

export default CardBank
