import React from 'react'
import Education from '../../Images/Education.jpg';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import { Cards } from '../StylingComponents/Cards';
import countries from 'countries-list'
import SelectVariants from '../StylingComponents/DropDownstyle';
import './Scan.css'
export const ScanCountry = () => {
    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(code => countries.countries[code].name);
    
    const comp=[
        Education,
        <SelectVariants width={"100%"} variant={"standard"} marginTop={"10px"} label={"Countries"} data={countryNames}/>,
        <BasicTextFields width={"100%"} label={"PhoneNumber"} marginTop={"10px"} variant={"standard"}/>,
        <BasicButtons href={"/ScanEmail"}label={"continue"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>,
        <BasicButtons label={"Scan card"} width={"100%"} borderRadius={"20px"} variant={"contained"} margin={"auto"} marginTop={"20px"}/>
    ]
  return (
    <div className='_Scan'>
         <Cards width={"100%"} height={"450px"} comp={comp}/>
    </div>
  )
}
