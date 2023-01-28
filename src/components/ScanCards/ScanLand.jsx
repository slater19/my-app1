import React from 'react';
import Education from '../../Images/Education.jpg';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import { Cards } from '../StylingComponents/Cards';
import './Scan.css'
export const ScanLand = () => {

    const comp=[
      <div>
      <div style={{width:"100%"}}>
      <img style ={{objectFit:"contain",width:"100%"}} src={Education}/>
      </div>
        <BasicTextFields width={"100%"} label={"Street Address"} marginTop={"10px"} variant={"standard"}/>
        <BasicTextFields width={"100%"} label={"Landmark"} marginTop={"10px"} variant={"standard"}/>
        <BasicTextFields width={"100%"} label={"City"} marginTop={"10px"} variant={"standard"}/>
        <BasicTextFields width={"100%"} label={"State/Province"} marginTop={"10px"} variant={"standard"}/>
        <BasicTextFields width={"100%"} label={"Country"} marginTop={"10px"} variant={"standard"}/>
        <BasicTextFields width={"100%"} label={"Zip Code"} marginTop={"10px"} variant={"standard"}/>
        <BasicButtons label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
        <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
   </div>
    ]
  return (
    <div className='_Scan'>
        <Cards width={"100%"} height={"450px"} comp={comp}/>
    </div>
  )
}
