import React, { useState } from 'react'
import './ProfileWandH.css'
import SelectVariants from '../StylingComponents/DropDownstyle';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import MinHeightTextarea from '../StylingComponents/textarea';
import {AiOutlinePlus} from "react-icons/ai"
import ControlledCheckbox from '../StylingComponents/Checkboxbtn';
import CheckboxLabels from '../StylingComponents/Checkboxbtn';
import Checkboxes from '../StylingComponents/Checkboxbtn';
import NativePickers from '../StylingComponents/Calender';

export const ProfileWandH = (p) => {
  console.log(p.prop)
  const days=["Sun","Monday","Tuesday","Wednesday","Thrusday","friday","Saturday"];

  const months=["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

  const work=["Employment Type","Part-time","Full-time","Self-employed","Freelance","Contract","Internship","Apprenticeship"]

  const  To=[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const From=To;

  const[move,setmove]=useState(true);
  const[move1,setmove1]=useState(true);
  const[move2,setmove2]=useState(true);
  const[move3,setmove3]=useState(true);
  const[move4,setmove4]=useState(false);
  
  let currentYear = (new Date()).getFullYear();
  let years=[];

  for(let i=1950;i<=currentYear;i++){
    years.push(i)
  }
const click=()=>{
  setmove(!move)
}
const click1=()=>{
  setmove1(!move1)
}
const click2=()=>{
  setmove2(!move2)
}
const click3=()=>{
  setmove3(!move3)
}
const click4=(e)=>{
  setmove4(e)
  setmove3(true)
}
  return (
    <div className='_WorkandHistory'>
      <div className="_WorkandHistorymaindiv">
        <div className='_WorkandHistorymain'>
        <div>
          <div>Achievements</div>
          <div onClick={click}> 
          {move ? 
          <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }}/>} height={"30px"} backgroundColor={"#004788"} width={"80px"} label={"ADD"} variant={"contained"} /> 
          : 
          <BasicButtons height={"30px"} width={"80px"} label={"Save"} variant={"contained"} backgroundColor={"#004788"}/>}
          </div>
        </div>
        { 
        move?"":
        <div>
        <BasicTextFields  marginTop={"15px"} type={"file"} variant={"standard"}  width={"100%"}/>
        <BasicTextFields label={"Title"} marginTop={"15px"} variant={"standard"} width={"100%"}/>
        {/* <BasicTextFields label={"Description"} marginTop={"15px"}/> */}
        <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"12px"} placeholder={"Description"}
                            fontFamily={"sans-serif"}  width={"100%"} outline={"none"} marginTop={"15px"} height={"50px"}
                            border={"1px solid grey"} />
                            
        <SelectVariants label={"Select Month"} data={months} marginTop={"15px"} width={"100%"}/>
        <SelectVariants label={"Years"} data={years} width={"100%"} marginTop={"15px"}/>
        <BasicButtons width={"100px"} backgroundColor={"#F33449"} label="Submit" variant="contained" marginTop={"15px"} margin={"auto"}/>
        </div>
}
      </div>
      </div>
      <div className="_WorkandHistorymaindiv">
        <div className='_WorkandHistorymain'>
        <div>
          <div>Awards and Recognition</div>
          <div onClick={click1}> 
          {move1 ? <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }}/>} height={"30px"} backgroundColor={"#004788"} width={"80px"} label={"ADD"} variant={"contained"} /> 
          :
           <BasicButtons height={"30px"} width={"80px"} label={"Save"} variant={"contained"} backgroundColor={"#004788"}/>}
          </div>
        </div>
        { 
        move1?"":
        <div>
        <BasicTextFields  marginTop={"15px"} type={"file"} variant={"standard"} width={"100%"}/>
        <BasicTextFields label={"Title"} marginTop={"15px"} variant={"standard"}  width={"100%"}/>
        {/* <BasicTextFields label={"Description"} marginTop={"15px"}/> */}
        <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"12px"} placeholder={"Description"}
                            fontFamily={"sans-serif"}  width={"100%"} outline={"none"} marginTop={"15px"} height={"50px"}
                            border={"1px solid grey"} />
        <SelectVariants label={"Select Month"} data={months} marginTop={"15px"} width={"100%"}/>
        <SelectVariants label={"Years"} data={years} width={"100%"} marginTop={"15px"}/>
        <BasicButtons width={"100px"} backgroundColor={"#F33449"} label="Submit" variant="contained" marginTop={"15px"} margin={"auto"}/>
        </div>
}
      </div>
      </div>

      <div className="_WorkandHistorymaindiv">
        <div className='_WorkandHistorymain'>
        <div>
          <div>Work And Experience</div>
          <div onClick={click2}> 
          {move2 ? <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }}/>} height={"30px"} backgroundColor={"#004788"} width={"80px"} label={"ADD"} variant={"contained"} /> : <BasicButtons height={"30px"} width={"80px"} label={"Save"} variant={"contained"} backgroundColor={"#004788"}/>}
          </div>
        </div>
        { 
        move2?"":
        <div style={{width:"100%"}}>
        <BasicTextFields label={"Title"} variant={"standard"} marginTop={"15px"}  width={"100%"}/>
        {/* <BasicTextFields label={"Description"} marginTop={"15px"}/> */}
        <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"12px"} placeholder={"Description"}
                            fontFamily={"sans-serif"}  width={"100%"} outline={"none"} marginTop={"15px"} height={"50px"}
                            border={"1px solid grey"} />
        <BasicTextFields label={"Work Pace"} variant={"standard"} marginTop={"15px"}  width={"100%"}/>
        <BasicTextFields label={"Location"} variant={"standard"} marginTop={"15px"}  width={"100%"}/>
        <SelectVariants label={"Employment Type"} data={work} marginTop={"15px"} width={"100%"}/>
        <Checkboxes name={"I am currently work in this role"} prop={click4}/>
        <NativePickers label={"Start Date"}  marginTop={"15px"} width={"100%"}/>
        <NativePickers label={"End Date"}  marginTop={"15px"} width={"100%"}/>

        
      {
        move4?<div className='_WorkAndHistoryAvailability'>
          <div>
            Availability
          </div>
          <div onClick={click3}>
        { 
        move3 ? 
        <BasicButtons icon={<AiOutlinePlus style={{ fontSize: "20px" }}/>} height={"30px"} backgroundColor={"#004788"} width={"80px"} label={"ADD"} variant={"contained"} /> 
        : 
        <BasicButtons height={"30px"} width={"80px"} label={"SAVE"} variant={"contained"} backgroundColor={"#004788"}/>
        }
          </div>
        </div>:""
      }
      {
        move3?"": 
        <div className='_WorkandHistorydropdown'>
          <div> <SelectVariants label={"Days"} data={days} width={"100%"} marginTop={"15px"}/></div>
          <div> <SelectVariants label={"To"} data={To} width={"100%"} marginTop={"15px"}/></div>
          <div> <SelectVariants label={"From"} data={From} width={"100%"} marginTop={"15px"}/></div>
         
        </div>
  
      }
        <BasicButtons width={"100px"} backgroundColor={"#F33449"} label="Submit" variant="contained" marginTop={"15px"} margin={"auto"} marginBottom={"20px"}/>
        </div>
}
      </div>
      </div>
    </div>
  )
}
