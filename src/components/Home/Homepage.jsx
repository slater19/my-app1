import React from 'react'
import './Homepage.css';
import myImage from '../../Images/Education Qualification Empty Screen.png';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { useNavigate } from "react-router-dom";



const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
    <div>
    <img  class="images" src={myImage}/> <br/></div>
    <div><Box fontWeight="fontWeightLight" color='grey' sx={{position:'relative',top:4}}>No Result Found </Box></div>
    <div> <Box fontWeight="fontWeightLight" color='grey' sx={{position:'relative',top:4}}> Please try again</Box></div>
    
    <div><Button variant="contained" style={{minWidth: '193px', minHeight: '20px', padding: "13px 0px" ,borderRadius:'10px'}} sx={{ position:'relative',top:13,color: 'white', backgroundColor: '#009669', borderColor: 'green'}} onClick={() => navigate("/search")}>
  Search Now
</Button></div>
</div>

  )
}

export default Homepage
