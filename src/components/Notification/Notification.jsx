import React from 'react';
import { Profile } from '../Profile/Profile';
import './Notification.css';
import {BsArrowLeft} from 'react-icons/bs';
import Profileimage from '../../Images/Profile.png'
import Education from '../../Images/Education.jpg'
import BasicButtons from '../StylingComponents/Editbtn';
import {MdDeleteOutline} from 'react-icons/md'
export const Notification = () => {

const currentTime=  new Date().toLocaleTimeString();
//notification
    const list=[
{   Name:"Tanmay RatnaParkhi",
    face: Profileimage,
    heading:"show heading",
    image:Education,
    time:currentTime,
},
{   
    Name:"Tanmay ",
    face:Profileimage,
    heading:"show heading",
    image:Education,
    time:currentTime,
}
    ]
  return (
    <div>
        <div className='_Notificationbar'> 
            <div> <span>< BsArrowLeft className='_arrowicon'/> </span></div>
            <div>Notification</div>
        </div>
<div className='_Notification'>
      {
        list.map((el,i)=>{
            return(
            <div key={i} className='_Notificationmaindiv'>
                <div>
                </div>
                <div className='_NotificationInfo'>
                    <div>
                        <div className='_Notificationimagediv'><img src={el.face}/></div>
                        <div className='_NotificationNamediv'>{el.Name} liked a post.</div>
                    </div>

                    <div className='_Notificationpostimg'>
                        <div>{el.heading}</div>
                        <div><img src={Education}/></div>
                        <div className='_NotificationDateandTime1'>
                            <div><BasicButtons variant={"outlined"} marginLeft={"70px"} color={"#F33449"} border={"1px solid #F33449"} borderRadius={"10px"}  backgroundColor={"White"} height={"25px"}  size={"small"} label={"Delete"} icon={<MdDeleteOutline marginTop={"-50px"} fontSize={"18px"} />}/></div>
                            <div>{el.time}</div>
                       </div>
                    </div>
                </div>
            </div>
            )
        })
       
      }
        
       

</div>
    </div>
  )
}
