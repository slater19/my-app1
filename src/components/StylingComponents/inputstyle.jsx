import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(p) {
    //console.log(p.id)
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: p.width, height: p.height, marginTop:p.marginTop},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={p.id} label={p.label} variant={p.variant} size={"small"} type={p.type} />
    </Box>
  );
}