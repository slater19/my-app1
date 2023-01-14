import React from 'react'
import './ScanName.css'
import Education from '../../Images/Education.jpg';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import { Cards } from '../StylingComponents/Cards';
export const ScanName = () => {
  const comp=[
    Education,
      <BasicTextFields width={"100%"} label={"First Name"} marginTop={"10px"} variant={"standard"}/>,
      <BasicTextFields width={"100%"} label={"Last Name"} marginTop={"10px"} variant={"standard"}/>,
      <BasicButtons href={"/ScanCompany"} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
      <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
    ]
  return (
    <div className='_ScanN'>
        <Cards width={"40%"} height={"450px"} comp={comp}/>
    </div>
  )
}
