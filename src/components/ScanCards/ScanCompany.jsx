import React from 'react'
import './ScanCompany.css'
import {Cards} from "../StylingComponents/Cards"
import Education from "../../Images/Education.jpg"
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicButtons from '../StylingComponents/Editbtn'

export const ScanCompany = () => {
    const comp=[
        Education,
        <BasicTextFields width={"100%"} label={"Company Name"} marginTop={"10px"} variant={"standard"}/>,
      <BasicButtons href={"/ScanWebsite"} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
      <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    ]

  return (
    <div>
        <Cards width={"40%"} height={"450px"} comp={comp}/>
    </div>
  )
}
