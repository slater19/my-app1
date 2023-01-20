import React from 'react'
import './ScanCompany.css'
import {Cards} from "../StylingComponents/Cards"
import Education from "../../Images/Education.jpg"
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicButtons from '../StylingComponents/Editbtn'
import "./Scan.css"
export const ScanEmail = () => {
    const comp=[
        Education,
        <BasicTextFields width={"100%"} label={"Email"} marginTop={"10px"} variant={"standard"}/>,
      <BasicButtons href={"/ScanLand"} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
      <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    ]

  return (
    <div className='_Scan'>
        <Cards width={"100%"} height={"450px"} comp={comp}/>
    </div>
  )
}
