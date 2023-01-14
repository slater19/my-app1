import React from 'react';
import { Profile } from '../Profile/Profile';
import './Notification.css';
import {BsArrowLeft} from 'react-icons/bs';
import Profileimage from '../../Images/Profile.png'
import Education from '../../Images/Education.jpg'
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
    <div style={{border:"1px solid yellow"}}>
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
                        <div><img src={el.image}/></div>
                        <div>
                            <div></div>
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
