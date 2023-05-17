import React from 'react'
import'./CardView.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import myImage from '../../Images/Mocks_Profiles_Stephen.jpg';
import myImage1 from '../../Images/Front view.png';
import myImage2 from '../../Images/icons8-red-circle-48.png';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { cardview } from '../../Config/ApiUrls';
import {useState,useEffect } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";








const CardView = () => {const navigate = useNavigate();
    const [searchparams] = useSearchParams();
    const [card,setCard]=useState({}); 
    const [checked0, setChecked0] = React.useState(false);
    
const handleChange0 = () => {
    setChecked0((prev) => !prev);
  };
    


    const getCard=()=>{
  
        const param = new URLSearchParams({userId:searchparams.get("id")});
          axios.get(cardview, { 
          params:param,
          
          headers:{
            Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiOTUxMTUwNjIyMSJ9.l01v-lqS8dWvsrqwM073CvU1NaQoy5d7fcac3cS_SXY"
          }
          }).then((response)=>{
          
          const dataCard=response.data.data;
          
           setCard(dataCard);   
           console.log(card);
        })
        .catch((err)=>{
          console.log(err)
        });
      
      } 


      useEffect(()=>{
        getCard();
      
    },[])



      console.log(card);
 
 
      var result3 = card.frontImage;
      var result4 = card.backImage;
      var result8 = card.frontVideo; 
      var result9 = card.backVideo;
      var result10 = result3=="";
      var result11 = result4=="";
      
      
      
      
      
      
      
      
       var result5 = "https://cors-anywhere-solai.fly.dev/http://65.2.28.163".concat(result3); 
      var result6 = "https://cors-anywhere-solai.fly.dev/http://65.2.28.163".concat(result4);
 
 
 
 console.log(checked0);
 
 
 
 
 
    return (
    <div>
         <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> Card  View  </div>
          
          </div>
        </header>
        <div className="Toolbar"/> 
        
        <article class="main3">
        <img  class="image3" src={myImage1}   onClick={handleChange0}/> 
        <div  id="container" className={checked0 ? "thecard3" : "isflipped3"}>


<div class="thefront3"><img  src={result5} width="370px" height="480px"/></div>






<div class="theback3"> <img src={result6} width="370px" height="480px"/> 
</div>


</div></article>




    

    </div>
  )
}

export default CardView
