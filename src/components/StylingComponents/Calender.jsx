import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
export default function NativePickers(p) 
{ 
  console.log("p",p.width)
  return (
    // <Stack component="form"  spacing={0} >
      
      <TextField
        id="date"
        label={p.label}
        type="date"
        defaultValue={p.defaultValue}
        sx={{ width: p.width ,marginTop:p.marginTop,marginLeft:p.marginLeft}}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
    //  </Stack>
  )
} 
