import React from 'react'
import './ScanCompany.css'
import {Cards} from "../StylingComponents/Cards"
import Education from "../../Images/Education.jpg"
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicButtons from '../StylingComponents/Editbtn'
import "./Scan.css"
import { useNavigate } from 'react-router'
export const ScanEmail = () => {
  const navigate=useNavigate();
  const clicked=()=>{
    navigate("/ScanCountry")
  }
    const comp=[
      <div>
      <div style={{width:"100%"}}>
      <img style ={{objectFit:"contain",width:"100%"}} src={Education}/>
      </div>
        <BasicTextFields width={"100%"} label={"Email"} marginTop={"10px"} variant={"standard"}/>
      <BasicButtons click={clicked} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
      <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    </div>
    ]

  return (
    <div className='_Scan'>
        <Cards width={"100%"} height={"450px"} comp={comp}/>
    </div>
  )
}
