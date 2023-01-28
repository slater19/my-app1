import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './Setting.css'
import { SettingDiscovery } from './SettingDiscovery';
import { Cards } from '../StylingComponents/Cards';
import { SettingNotification } from './SettingNotification';
import { SettingSwipe } from './SettingSwipe';
import { SettingLogout } from './SettingLogout';
export const Setting = () => {

  let arr=[
    <SettingDiscovery/>,
    <SettingNotification/>,
    <SettingSwipe/>,
    <SettingLogout/>
  ]

  const styles={
    // border:"1px solid green",
    fontSize: "35px",
    margin: "0px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor:"pointer"
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
        <Cards width={"95%"} comp={arr}/>
    </div>
  )
}
