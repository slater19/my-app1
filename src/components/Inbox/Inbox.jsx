import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './Inbox.css'
import { Received } from './Received';
import { Sent } from './Sent';

export const Inbox  = () => {

  const [change,setchange]=useState(false);
  const [move,setmove]=useState(false);

  const trig=()=>{
setchange(true)
setmove(true)
  }

  const view=()=>{
    setmove(false)
    setchange(false)
  }

  return (
    <div className='_Inboxmaindiv'>
        <div className='_Inboxdiv'>
            <div className='_Inboxicon'>
                <KeyboardBackspaceIcon style={{width:"60px",fontSize:"30px",cursor:"pointer"}}/>
            </div>
            <div className='_Inboxtext'>
                Inbox
            </div>
        </div> 
      <div className='_InboxRequest'>
        
        <div onClick={view} className={move?'_InboxSent':'_InboxSent1'}>
           <div>
              Received Request
           </div>
        </div>

        <div onClick={trig} className={change?'_InboxSent1':'_InboxSent'}>
          <div>
              Sent Request
          </div>
        </div>

      </div>   
      {
        // <Received/>
        move?<Sent/>:<Received/>
      }
    </div>
  )
}
