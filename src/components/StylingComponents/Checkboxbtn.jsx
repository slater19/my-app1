import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Checkboxes(p) {

  const change=(e)=>{
    console.log(e.target.checked)
    p.prop(e.target.checked)
    }
    

  return (
    <div>
      <Checkbox {...label} onChange={change} />
        <span>{p.name}</span>
    </div>
  );

}
