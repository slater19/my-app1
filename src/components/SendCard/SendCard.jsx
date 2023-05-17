import React from 'react'
import'./SendCard.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import myImage from '../../Images/Mocks_Profiles_Stephen.jpg';
import myImage1 from '../../Images/Front view.png';
import myImage2 from '../../Images/icons8-red-circle-48.png';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import { send } from '../../Config/ApiUrls';
import axios from 'axios';
import { baseURL } from '../../Config/ApiUrls';
import { useSwipeable } from "react-swipeable";
import {useRef} from 'react';
import ReactPlayer from 'react-player'

const SendCard = () => {const navigate = useNavigate();

  const [data1,setData1]=useState([{}]);
  const [checked0, setChecked0] = React.useState(false);
  var [count,setCount]=useState(0);
  
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
    
  const handleChange0 = () => {
      setChecked0((prev) => !prev);
    };
  
  const stackapi5=()=>{
   


    const param5 = new URLSearchParams({userId: 10005});
      axios.get(send, { 
      params:param5,
      
      headers:{
        Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU5vIjoiODU4Njg5NDk3NSJ9.f_hGOFQrrYeOUR4vXaIC2OnWCd1CORjhNbltSDATDJI"
      }
      }).then((sendresponse)=>{
      console.log("a",sendresponse);
      const new50=sendresponse.data.data;
      
       setData1(new50);   
       
    })
    .catch((err)=>{
      console.log(err)
    });

  }

  useEffect(()=>{
    stackapi5();
    
  },[])
  var result5= "http://65.2.28.163" 
  var l=data1.length-1;
  let count1=1;
  
/*   useEffect(() => {
    const element = document.getElementById('abc');
    element.style.backgroundColor='red';
  }, []); */
  
  
  
  const handlersBox1 = useSwipeable({
    
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      /* getCard(); */
      if(dir==='Right'){
        

        if(count<data1.length-1)
        {setCount(count+1);}
        else
        {setCount(0);} 
         
        /* document.getElementById(`dot${count}`).style.backgroundColor='red'; */
        console.log("right",count) 
       
      }
      
      else if(dir==='Left')
      { 
        if(count>0)
         setCount(count-1);
         else
         setCount(data1.length-1); 

         /* document.getElementById(`dot${count}`).style.backgroundColor='red'; */
         console.log("left",count) 

         
      
  
      }
  
    
  },
  preventDefaultTouchmoveEvent: true
  });
  



  console.log("m",data1);
  console.log("m1",count);
  let count7=data1.length-1
  let items=[];
  
    
    for(let i=0;i<count7;i++){
    items.push(
      <div className={count==i?"nav_dot1":"nav_dot"}></div>
     )}
/* 
     useEffect(()=>{
      document.getElementById(`dot${count}`).style.backgroundColor='red';
      },[count]) */
  
  
  return (
    <div>
         <header class="Navbar">
          <div class="Toolbar">
           
            <div class="Title"> Send Card </div>
            <ShareOutlinedIcon    sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 
  }} />
          </div>
        </header>
        <div class="Toolbar"/> 
        
       
       
{/*         <article class="main1">
        <img  class="image1" src={myImage1}/> <br/>
<img  class="image" src={myImage}/> <br/>  

<img  class="image2" src={myImage2}/>
</article> */}

{/* 
<div class="carousel_container">

  <div class="carousel_items">        
    <ul>
      <li class="carousel_item" id="item_0"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_1.jpg" /></li>
    
    </ul>
  </div> */}
{/* <div class="main99"> */}
       
        
       {/*    <div  id="container" className={checked0 ? "thecard3" : "isflipped3"}>
  
  
  <div class="thefront3"><img  src={result5} width="370px" height="480px"/></div>
  
  
  
  
  
  
  <div class="theback3"> <img src={result6} width="370px" height="480px"/> 
  </div>
          
  
    
     <br/>    */}
  
  <article class="smain3">
          <img  class="simage3" src={myImage1}   onClick={handleChange0}/> 
          <div  id="container" className={checked0 ? "sthecard3" : "sisflipped3"} {...handlersBox1}>
  
          
  
  
  
  
  
  {data[5].frontImage==""?<div class="sthefront3"> 
{/*   <ReactPlayer
            url={result5.concat(data[count].frontVideo)}
            playing={true}
             width="100%"
            height="100%" 
          /> */}
          <video width="100%" height="100%" >
    <source src={result5.concat(data[5].frontVideo)} type="video/mp4"/>
    
    
  </video>
          </div>:
          <div class="sthefront3"><img  src={result5.concat(data[5].frontImage)} width="100%" height="100%"/></div> 
  }
  
  
  
  {data[5].backImage==""?  
  
  <div class="stheback3"> {/* <ReactPlayer
            url="https://cors-anywhere-solai.fly.dev/http://65.2.28.163/sync/card/58c6b5558fdce16b84980a3bfa78bf69.mp4"
            playing={true}
             width="100%"
            height="100%" 
          /> */}
             <video width="100%" height="100%" >
    <source src={result5.concat(data[5].backVideo)} type="video/mp4"/>
    
    
  </video>
          </div>:
          <div class="stheback3"> <img src={result5.concat(data[5].backImage)} width="100%" height="100%"/> 
          </div> }
  
  
  
  
  
  
  
  </div>

  <div class="nav_dots ">
  {items}  


</div>
  
  </article>

  

  
  
  


   
   
  <footer class="sfooter5">
  
  <div><NearMeOutlinedIcon   sx={{ 
    color: "white", 
    backgroundColor: "red", 
    borderRadius: "50%" 
  }}/>
    <Box fontWeight="fontWeightLight" color='grey'>Send Card</Box></div>
    </footer>
   {/* </div> */}
    </div> 
    

    
  )


}

export default SendCard
