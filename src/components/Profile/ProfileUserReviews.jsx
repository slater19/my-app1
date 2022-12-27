import React, { useState } from 'react'
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicButtons from '../StylingComponents/Editbtn';
import { AiOutlinePlus } from 'react-icons/ai';
import MinHeightTextarea from '../StylingComponents/textarea';
import './ProfileUserReviews.css';

// import { MdEdit } from 'react-icons/md';
export const ProfileUserReviews = () => {
const[trig1,settrig1]=useState(false);

const save=()=>{
settrig1(!trig1)
}
  return (
    <div className='_ProfileUserReviewsmaindiv'>
      <div className='_ProfileUserReviewsdiv'>
      <div className='_ProfileUserReviews'>
        <div>Testimonials</div>
        <div onClick={save}>
          {
            trig1 ? <BasicButtons  height={"30px"} backgroundColor={"#004788"} width={"80px"} label={"Save"} variant={"contained"} /> : <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }}/>} height={"30px"} width={"80px"} label={"ADD"} variant={"contained"} backgroundColor={"#004788"}/>
          }
          </div>
        </div>
          { trig1 ? 
      <div className='_ProfileUserReviewsmaindiv1'>
      <BasicTextFields  marginTop={"15px"} type={"file"} width={"100%"} />
      <BasicTextFields width={"100%"} label={"Client's Name"} marginTop={"15px"}  />
      <BasicTextFields width={"100%"} label={"Client's Designation"} marginTop={"15px"} />
      <MinHeightTextarea placeholder={"Share Your Experience"} width={"99%"}  borderColor={"grey"} marginTop={"15px"} borderRadius={"10px"} height={"50px"}/>
      <BasicButtons width={"100px"} backgroundColor={"#F33449"} label="Submit" variant="contained" marginTop={"15px"} margin={"auto"} marginBottom={"20px"}/>
      </div>:""
      }
       
      </div>
    </div>
  )
}
