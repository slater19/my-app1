import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(p) {
  return (
    <Stack spacing={0} direction="row">
      <Button style={{height:p.height,width:p.width,backgroundColor:p.backgroundColor,borderRadius:p.borderRadius,margin:p.margin,marginTop:p.marginTop,marginBottom:p.marginBottom}} variant={p.variant}> {p.icon}  {p.label}</Button>
    </Stack>
  );
}
