import React, { useState } from 'react'
import './Profilehistory.css'
import { ProfileOverview } from './ProfileOverview'
import { ProfileUserReviews } from './ProfileUserReviews'
import { ProfileWandH } from './ProfileWandH'

export const Profilehistory = () => {
  const [i,seti]=useState(0);
  const arr=[<ProfileOverview/>,<ProfileWandH/>,<ProfileUserReviews/>];
// let i;
  const show=(p)=>{
    seti(p)
  }
  return (
    <div className='_Profilehistorymaindiv'>
      <div className='_Profilehistorymenu'>
        <div onClick={()=>show(0)}> Overview</div>
        <div onClick={()=>show(1)}> Work & History</div>
        <div onClick={()=>show(2)}> User Reviews</div>
      </div>
      <div className='_Profilehistoryinfo'>
        {
          arr[i]
        }
      </div>
    </div>
  )
}
