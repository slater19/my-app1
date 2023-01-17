import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(p) {
  return (
    <Stack spacing={0} direction="row">
      <Button onClick={p.click} href={p.href}
      
        style={{
          display: "flex", border: p.border,
          marginLeft: p.marginLeft,
          color: p.color,
          height: p.height,
          width: p.width,
          backgroundColor: p.backgroundColor,
          borderRadius: p.borderRadius,
          margin: p.margin,
          marginTop: p.marginTop,
          marginBottom: p.marginBottom,
          boxSizing: "border-box",
          paddingTop: "7px",
          alignItems: "center",
          justifyContent: "center"
        }}

        size={p.size} variant={p.variant}>

        <div style={{ marginTop: "4px" }}> {p.icon} </div>
        <div> {p.label}</div>
      </Button>
    </Stack>
  );
}
