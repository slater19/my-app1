import React from 'react'
import Education from '../../Images/Education.jpg';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import { Cards } from '../StylingComponents/Cards';
import countries from 'countries-list'
import SelectVariants from '../StylingComponents/DropDownstyle';
import './Scan.css'
import { useNavigate } from 'react-router';
export const ScanCountry = () => {
  const navigate=useNavigate();
    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(code => countries.countries[code].name);
    const clicked=()=>{
navigate("/ScanLand")
}    
const comp=[
      <div>
      <div style={{width:"100%"}}>
      <img style ={{objectFit:"contain",width:"100%"}} src={Education}/>
      </div>
        <SelectVariants width={"100%"} variant={"standard"} marginTop={"10px"} label={"Countries"} data={countryNames}/>
        <BasicTextFields width={"100%"} label={"PhoneNumber"} marginTop={"10px"} variant={"standard"}/>
        <BasicButtons click={clicked}label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
        <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
   </div>
    ]
  return (
    <div className='_Scan'>
         <Cards width={"100%"} height={"450px"} comp={comp}/>
    </div>
  )
}
