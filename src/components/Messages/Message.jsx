import React from 'react'
import './Message.css'
import Profile from '../../Images/Profile.png';
import {BsArrowLeft,BsSearch} from 'react-icons/bs';
export const Message = () => {

const arr=[{
    Image:Profile,
    Name:"Tanmay RatnaParkhi",
    Profession:"Founder",
    Message:"Show Message",
    Time:"19:20 PM"
},
{
    Image:Profile,
    Name:"Tanmay",
    Profession:"Founder",
    Message:"Show Message",
    Time:"19:20 PM"
}]

  return (
    <div className='_MessageMainDiv'>
        <div className='_MessageDiv1'>
            <div>
                <BsArrowLeft fontSize={"30px"} />
            </div>
            <div>
                <span>Message</span>
            </div>
            <div>
                <BsSearch fontSize={"30px"}/>
            </div>
        </div>
        {
        arr.map((el,i)=>{
            return(
            <div className='_MessageDiv2'>
            <div className='_MessageDiv12'>
                <div className='_MessageImage'>
                    <img src={el.Image}/>
                </div>
                <div className='_MessageDiv121'>
                    <div>
                        {el.Name}
                    </div>
                    <div>
                        <p>{el.Profession}</p>
                    </div>
                    <div >
                        <p>{el.Message}</p>
                    </div>
                    <div>
                        <p>{el.Time}</p>
                    </div>
                </div>
            </div>
        </div>
            )
        })
       
}
    </div>
  )
}
