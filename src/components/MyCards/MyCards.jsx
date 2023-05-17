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
import {useState} from "react";
import {useEffect} from "react";
import { my } from '../../Config/ApiUrls';
import axios from 'axios';
import ReactPlayer from 'react-player'
import { baseURL } from '../../Config/ApiUrls';


const MyCards = () => {const navigate = useNavigate();



  const [data2,setData2]=useState([{}]);
  const [checked0, setChecked0] = React.useState(false);
    
  const handleChange0 = () => {
      setChecked0((prev) => !prev);
    };
      
  


  const stackapi2=()=>{
   


    const param = new URLSearchParams({userId: 10005});
      axios.get(my, { 
      params:param,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((response50)=>{
      console.log("a");
      const new1=response50.data.data;
      
       setData2(new1);   
       
    })
    .catch((err)=>{
      console.log(err)
    });

  }

  useEffect(()=>{
    stackapi2();
    
  },[])

  console.log(data2)


  
  const data=new Array(
    {
        "frontImage": "/sync/card/be0fb3c4b5a705fb5e462f5567f6714f.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/b9c4db14c9e473c7766a50afee7e656d.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "1",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/746b340070c6977d7ca9ea8005da1d23.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "",
        "backVideo": "/sync/card/325803e7c066bc3e60017e3ebda6d2bc.mp4",
        "backVideoThumbnail": "",
        "cardId": "17",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "",
        "frontVideo": "/sync/card/b22122e30b122ae4b4865b87ed2b47a3.mp4",
        "frontVideoThumbnail": "/sync/card/b22122e30b122ae4b4865b87ed2b47a3.jpg",
        "backImage": "/sync/card/357b9d495546f6a769b218cb67d5b513.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "89",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/cfd79c01807d5fb0b70ac808e623ddd7.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/501adfe2f41d98f46b76846c65e46dcc.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "202",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/a3174d155ab23b8ec7cc953239f383ed.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/c9c63a565453ed3eef65782ced1ea019.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "693",
        "isDefault": "1",
        "userId": "10005"
    },
    {
        "frontImage": "",
        "frontVideo": "/sync/card/7e630f3683a466cef58c8aae401c3e7c.mp4",
        "frontVideoThumbnail": "/sync/card/7e630f3683a466cef58c8aae401c3e7c.jpg",
        "backImage": "/sync/card/299aede861cd03aaa1a40159020723cc.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "704",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "",
        "frontVideo": "/sync/card/58c6b5558fdce16b84980a3bfa78bf69.mp4",
        "frontVideoThumbnail": "/sync/card/58c6b5558fdce16b84980a3bfa78bf69.jpg",
        "backImage": "/sync/card/3ea8521ddd6e54e0bc5eed2354858af4.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "713",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/49b3fadd3f0404d9860383b92b73cb18.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/5d84a23cf8bd41693eb7f44d735508ee.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "751",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/bcd648e97d43e33ac83df5bc439c8dde.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/88410834a05c740376019e5f1b5291d5.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "1060",
        "isDefault": "0",
        "userId": "10005"
    },
    {
        "frontImage": "/sync/card/1bebbaa3ac76b954deb7aa37afb39548.png",
        "frontVideo": "",
        "frontVideoThumbnail": "",
        "backImage": "/sync/card/2ba66d92835d700511e248e5fdd29610.png",
        "backVideo": "",
        "backVideoThumbnail": "",
        "cardId": "2669",
        "isDefault": "0",
        "userId": "10005"
    })
  
  
  
  
    var result3 = data.frontImage;
  var result4 = data.backImage;
  var result8 = data.frontVideo; 
  var result9 = data.backVideo;
  var result10 = result8=="";
  var result11 = result9=="";
  
  
   var result55 = "https://cors-anywhere-solai.fly.dev/http://65.2.28.163".concat(result3); 
  var result6 = "https://cors-anywhere-solai.fly.dev/http://65.2.28.163".concat(result4);
  

  var result5 = "https://cors-anywhere-solai.fly.dev/http://65.2.28.163" 

  return (
    <div>
         <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> My Cards </div>
            
          </div>
        </header>
        
        <div class="flexbox-container1">
        {data.map(user=>{
       return(
        <div class="main99">
       
        
     {/*    <div  id="container" className={checked0 ? "thecard3" : "isflipped3"}>


<div class="thefront3"><img  src={result5} width="370px" height="480px"/></div>






<div class="theback3"> <img src={result6} width="370px" height="480px"/> 
</div>
        

  
   <br/>    */}

<article class="main3">
        <img  class="image3" src={myImage1}   onClick={handleChange0}/> 
        <div  id="container" className={checked0 ? "thecard3" : "isflipped3"}>

        





{user.frontImage==""?<div class="thefront3"> 
{/* <ReactPlayer
          url={result5.concat(user.frontVideo)}
          playing={true}
           width="100%"
          height="100%" 
        /> */}
        <video width="100%" height="100%" >
  <source src={"http://65.2.28.163".concat(user.frontVideo)} type="video/mp4"/>
  
  
</video>
        </div>:
        <div class="thefront3"><img  src={"http://65.2.28.163".concat(user.frontImage)} width="100%" height="100%"/></div> 
}



{user.backImage==""?  

<div class="theback3"> {/* <ReactPlayer
          url="https://cors-anywhere-solai.fly.dev/http://65.2.28.163/sync/card/58c6b5558fdce16b84980a3bfa78bf69.mp4"
          playing={true}
           width="100%"
          height="100%" 
        /> */}
           <video width="100%" height="100%" >
  <source src={"http://65.2.28.163".concat(user.backVideo)} type="video/mp4"/>
  
  
</video>
        </div>:
        <div class="theback3"> <img src={"http://65.2.28.163".concat(user.backImage)} width="100%" height="100%"/> 
        </div> }







</div></article>

   
  
  <footer class="footer1">
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


    </div>
  )
}

export default MyCards
