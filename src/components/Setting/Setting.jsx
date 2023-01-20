import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './Setting.css'
import { SettingDiscovery } from './SettingDiscovery';
import { Cards } from '../StylingComponents/Cards';
export const Setting = () => {

  let arr=[
    <SettingDiscovery/>
  ]
  const styles={
    // border:"1px solid green",
    fontSize: "35px",
    margin: "0px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
  }
  return (
    <div className='_Settingmaindiv'>
        <div className='_Setting'>
            <div className='_Settingicon'>
              <KeyboardBackspaceIcon style={styles}/>
            </div>
            <div className='_Settingheading'>
                Settings
            </div>
        </div>
        <Cards width={"90%"} comp={arr}/>
    </div>
  )
}
