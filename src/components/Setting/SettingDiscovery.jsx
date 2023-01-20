import React from 'react'
import { Cards } from '../StylingComponents/Cards'
import './SettingDiscovery.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export const SettingDiscovery = () => {

    const styles={
        border:"1px solid green",
        fontSize: "25px",
        margin: "0px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
    
  return (
    <div className='_Discoverymaindiv'>
        <div className='_Discoverydiv'>
            <div className='_Discoverydivheading'>
                    Discovery Settings
            </div>
            <div className='_Discoverydivicon'>
                <ChevronRightIcon style={styles}/>
            </div>
        </div>
        <div>
        You can change through Add Location,Allow to global people,and Set distance Range
        </div>
    </div>
  )
}
