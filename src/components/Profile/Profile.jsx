import React, { useState } from 'react';
import './Profile.css';
import profile from "../../Images/profile.png"
import { FaPen } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'
// import { BsFillEnvelopeFill ,BsFillPatchCheckFill} from 'react-icons/BS'
import VerifiedIcon from '@mui/icons-material/Verified';
import { AiFillStar } from 'react-icons/ai'
import { Profilehistory } from './Profilehistory';
import BasicButtons from '../StylingComponents/Editbtn';
import { IoSave } from "react-icons/io5";
import {FaPencilAlt} from "react-icons/fa";
import BasicTextFields from '../StylingComponents/inputstyle';
import BasicModal from '../StylingComponents/Modal';
import EmailIcon from '@mui/icons-material/Email';

export const Profile = () => {

    const close=()=>{
        setmodal(!modal)
        // console.log("checked")
    }

    const components=[
    <BasicTextFields width={"100%"} label={"First Name"} marginTop={"10px"}/>,
    <BasicTextFields width={"100%"} label={"Last Name"} marginTop={"10px"}/>,
    <BasicTextFields width={"100%"} label={"Email Address"} marginTop={"10px"}/>,
    <BasicTextFields width={"100%"} label={"Mobile Number"} marginTop={"10px"}/>,
    <p onClick={close} style={{width:"100px", margin:"auto",marginTop:"2%"}}>
         <BasicButtons  width={"100px"} backgroundColor={"#F33449"} label="Update" variant="contained"  margin={"auto"} marginTop={"-10px"} />
    </p> 
]

    const[display,setdisplay]=useState(false);
    const[modal,setmodal]=useState(false);

    const show=()=>{
            setdisplay(!display)
    }
    const show1=()=>{
        setmodal(!modal)
    }
   
    return (
        <div className='_Profilemaindiv'>
            { modal?<BasicModal label={"Update Profiler"} width={"280px"} height={"300px"} borderRadius={"30px"} comp={components}/>:""}
            <div className='_Profileimg'>
                <img src={profile} />
            </div>

            <div className='_Profileinfo'>
                <div>
                <h1 className='_Profilename' onClick={show1}>Vaibhav Manral <FaPen/> </h1>
                <h3 className='_Profileemail'> 
                <EmailIcon style={{ height: "25", position: "relative", bottom: "-6" }}/>
                        vabmanral@gmail.com 
                        <VerifiedIcon style={{ height: "25", position: "relative", bottom: "-6", }} />
                    {/*  */}
                </h3>
                { display?<div className='_ProfileEdit'>
                        <BasicTextFields label={"Name"} width={"100%"} variant={"standard"} marginTop={"15px"}/>
                        <BasicTextFields label={"Designation"} width={"100%"}  variant={"standard"} marginTop={"15px"}/>
                        <BasicTextFields label={"Location"}  width={"100%"} variant={"standard"} marginTop={"15px"}/>
                    </div>:""}
                <div className='_Profilestat'>
                    <div className='_Profileconnection'>
                        <FaBriefcase style={{ color: "white", height: "20", width: "50", bottom: "-4" }} />
                        <span>02</span>
                        <div className='_Profileconnection1'>Connections</div>
                    </div>
                    <div className='_Profileratings'>
                        <AiFillStar style={{ color: "white", height: "23", width: "30", bottom: "0" }} /> <span>0.0</span>
                        <div>Ratings</div>
                    </div>
                </div>
                <div className='_Profiledetails'>
                    <div>
                        0%
                    </div>
                    <div className='_ProfiledetailsPercentage'>

                    </div>
                    <div>
                        100%
                    </div>
                </div>
                </div>
            </div>
            <div className='_Editbutton' onClick={show}>
                {
                    display ?  <BasicButtons  icon={<IoSave className="_Editbtnicon"/>} width={"50px"} height={"50px"} borderRadius={"50%"} variant={"standard"} backgroundColor={"#16B75E"} /> 
                    :  
                    <BasicButtons icon={<FaPencilAlt className="_Editbtnicon" />} variant={"standard"} width={"50px"} height={"50px"} borderRadius={"50%"} backgroundColor={"#16B75E"} /> 
                }
          
            </div>
            <Profilehistory/>
        </div>
    )
}
