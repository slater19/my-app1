import React from 'react'
import BasicButtons from '../StylingComponents/Editbtn';
import "./ScanCards.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Cards } from '../StylingComponents/Cards';
import BasicTextFields from '../StylingComponents/inputstyle';

import AddCardIcon from '@mui/icons-material/AddCard';
import { useNavigate } from "react-router-dom";
import {Route,Routes} from 'react-router-dom';
import {ScanName} from './ScanName';

export const ScanCards = () => {

const navigate=useNavigate();

const clicked=()=>{
  // alert("clicked")
  navigate("/ScanName")
}

  
  return (
    <div className='_ScanCardmaindiv'>

        <div className='_ScanCardmain'>
            <div>
            <KeyboardBackspaceIcon style={{width:"60px",fontSize:"30px",cursor:"pointer"}}/>
            </div>
            <div>
                <span>
                Scanned Card Store
                </span>
            </div>
        </div>
        
          {/* <Cards width={"40%"} height={"450px"} comp={comp}/> */}
        
        <div className='_ScanCards1'>
          
          <div>Please Add Card</div>
            <BasicButtons borderRadius={"20px"} margin={"auto"} label={"Scan Card"} height={"35px"} backgroundColor={"#21AD5A"} width={"150px"} variant={"contained"}/>
          </div>
        
        <div className='_ScanCard2'>
          <BasicButtons click={clicked}  borderRadius={"50%"} icon={<AddCardIcon/>} height={"60px"} backgroundColor={"#21AD5A"} width={"60px"} variant={"contained"}/>
        </div>
        
    </div>
  )
}
