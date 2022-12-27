import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers(p) {
  
  return (
    <Stack component="form" noValidate spacing={1}>
      <TextField
        id="date"
        label={p.label}
        type="date"
        defaultValue={p.defaultValue}
        sx={{ width: p.width ,marginTop:p.marginTop}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
