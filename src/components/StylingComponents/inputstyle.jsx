import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(p) {
    // console.log("props",p.id)
  return (
    <Box
      component="form"
      sx={{
         m: 0, width:p.width, height: p.height, marginTop:p.marginTop,marginLeft:p.marginLeft
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth label={p.label} variant={p.variant} size={"small"} type={p.type} />
    </Box>
  );
}