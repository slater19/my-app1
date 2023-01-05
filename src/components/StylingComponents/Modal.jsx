import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal({toggle,func,label,comp,borderRadius,width,height}) {

    const [open, setOpen] = React.useState(toggle);
console.log("t",toggle);

    // console.log("modal",p.show)
    
    useEffect(()=>{
setOpen(toggle)
    },[toggle])
    // console.log(p.comp)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        height:height,
        borderRadius:borderRadius,
        bgcolor: 'background.paper',
        border: '2px solid red',
        boxShadow: 24,
        p: 4,
        // zIndex:0
      };


  // setOpen(p.show)
  const handleOpen = () => {
    setOpen(true);
    console.log(open)
  };

  const handleClose = () => {
    func()
  };
//console.log(open)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{border:"1px solid green"}}
      >
        <div style={{border:"1px solid yellow",zIndex:1}}>
        <Box sx={style} >
        
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <div> {label}</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
                comp.map((el,i)=>{
                        return (
                          <span key={i}>{el}</span>
                        )    
                })
            }
          </Typography>
        </Box>
        </div>
      </Modal>
    </div>
  );
}
