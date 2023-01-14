import React from 'react';
import Education from '../../Images/Education.jpg';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import { Cards } from '../StylingComponents/Cards';
export const ScanDesig = () => {

    const comp=[
        Education,
        <BasicTextFields width={"100%"} label={"Designation"} marginTop={"10px"} variant={"standard"}/>,
        <BasicButtons  href={"/ScanCountry"} label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
        <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    ]
  return (
    <div>
        <Cards width={"40%"} height={"450px"} comp={comp}/>
    </div>
  )
}
