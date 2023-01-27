import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StyledEngineProvider>
    <CssVarsProvider>
    <App />
    </CssVarsProvider>
  </StyledEngineProvider>
 
  </BrowserRouter>
   
    

)
