import React from 'react'
import'./Meeting.css';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';









import Box from '@mui/material/Box';

function Meetings() {
  const [value, setValue] = React.useState(0);

  const handleTabs=(e,val) => {
    setValue(val);
  }
 
  return (
    <div>
     <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title">Meetings</div>
           
          </div>
        </header>
        <div className="Toolbar"/>
       
        
        
        <Tabs value={value} onChange={handleTabs} >
           
            <Tab style={{minWidth:"50%",color:"blue"}} label="Upcoming Meetings"/>
            <Tab style={{minWidth:"50%",color:"blue"}} label="Past Meetings" />
            </Tabs>    
          
        
        
            {!value &&<div  style={{display: "flex",justifyContent:"center",alignItems:"center"}}><Typography /* sx={{position:"fixed", top:"50%",left:"50%"}} */>No Upcoming Meetings</Typography></div>}
        
        
            {value==1 && <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}><Typography /* sx={{position:"fixed", top:"50%",left:"50%"}} */>No Past Meetings</Typography></div>}
        
        

     
        
    
        </div> 
)
}



export default Meetings




  


