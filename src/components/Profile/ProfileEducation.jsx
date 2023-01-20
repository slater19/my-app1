import React, { useState } from 'react';
import './ProfileEducation.css';
import BasicButtons from '../StylingComponents/Editbtn';
import { AiOutlinePlus } from "react-icons/ai";
import Education from "../../Images/Education.jpg";
import SelectVariants from '../StylingComponents/DropDownstyle';
import BasicTextFields from '../StylingComponents/inputstyle';
import NativePickers from '../StylingComponents/Calender';

const ProfileEducation = () => {

    const [trigger, settrigger] = useState(false);
    const [study, setstudy] = useState();

    const education = ["Doctorate/Phd", "Post Graduation", "Graduation"]
    const status = ["Pursuing", "Year"];

    const show = () => {
        settrigger(!trigger)
    }

    const checking = (e) => {
        console.log(e)
        if (e == "") {
            setstudy("None")
        }

        else if (e == "Pursuing") {
            setstudy("Pursuing");
        }
        
        else if (e == "Year") {
            setstudy("Year");
        }

    }
    return (
        <div className='_ProfileEducationMaindiv'>
            <div className='_ProfileEducationMain'>
                <div className='_ProfileEducation'>
                    <div>Education Qualification</div>
                    <div onClick={show}>
                        {
                            trigger ? <BasicButtons width={"90px"} label={"Save"} variant={"contained"} backgroundColor={"#004788"} />
                                : <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }} />} width={"90px"} label={"Add"} variant={"contained"} backgroundColor={"#004788"} />
                        }
                    </div>
                </div>
                { trigger?
                    <div className='_ProfileEducationImage'>
                        {/* <img src={Education} /> */}
                        <SelectVariants label={"Select Education Level"} variant={"standard"} data={education} width={"100%"} marginTop={"15px"} />
                        <BasicTextFields width={"100%"} variant={"standard"} marginTop={"15px"} label={"Enter Course"} />    
                        <BasicTextFields width={"100%"} variant={"standard"} marginTop={"15px"} label={"Enter Institution"} />
                        {/* <BasicTextFields width={"100%"} variant={"standard"} marginTop={"15px"} label={"Enter Institution"}/> */}
                        <SelectVariants label={"Completion status"} variant={"standard"} data={status} width={"100%"} marginTop={"15px"} check={checking} />
                        {
                            study == "Pursuing" ?

                            <NativePickers label={"Start Year"} width={"100%"} marginTop={"15px"} defaultValue={"Start Year"} /> 
                            : study == "Year" ?

                                <div>
                                    <NativePickers label={"Start Year"} width={"100%"} marginTop={"15px"} defaultValue={"Start Year"}  />
                                    <NativePickers label={"End Year"} width={"100%"} marginTop={"15px"} defaultValue={"End Year"} />
                                </div> : ""
                        }
                         <BasicButtons width={"100px"} backgroundColor={"#F33449"} label="Submit" variant="contained" marginTop={"15px"} margin={"auto"} />
                    </div>:""
                }
               
            </div>
        </div>
    )
}
export default ProfileEducation