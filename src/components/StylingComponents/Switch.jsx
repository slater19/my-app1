import * as React from 'react';
/* import Switch from '@mui/joy/Switch'; */
import Typography from '@mui/joy/Typography';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
export default function ExampleTrackChild() {
  return (
    <StyledEngineProvider>
        <CssVarsProvider>
    <Switch
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                On
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                Off
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumb-size': '30px',
        '--Switch-track-width': '64px',
        '--Switch-track-height': '31px',
      }}
    />
    </CssVarsProvider>
    </StyledEngineProvider>
  );
}
