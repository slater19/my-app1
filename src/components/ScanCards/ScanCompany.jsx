import React from 'react'
import './ScanCompany.css'
import {Cards} from "../StylingComponents/Cards"
import Education from "../../Images/Education.jpg"
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicButtons from '../StylingComponents/Editbtn'
import { useNavigate } from 'react-router'

export const ScanCompany = () => {
  const navigate=useNavigate();
  const clicked=()=>{
  navigate("/ScanWebsite")
  }
    const comp=[
      <div>
      <div style={{width:"100%"}}>
      <img style ={{objectFit:"contain",width:"100%"}} src={Education}/>
      </div>
      <BasicTextFields width={"100%"} label={"Company Name"} marginTop={"10px"} variant={"standard"}/>
      <BasicButtons click={clicked} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
      <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    </div>
    ]

  return (
    <div>
        <Cards width={"40%"} height={"450px"} comp={comp}/>
    </div>
  )
}
