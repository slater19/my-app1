import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal(p) {
  // const ch=p.m;
  // console.log("chmode",ch.mode)
    const [open, setOpen] = React.useState(true);

    // console.log("pm",p.m)

    const handleClose = () => {
      setOpen(false)
    }

    // useEffect(()=>{
    //   console.log(p.m)
    //   setOpen(p.m)
    // })
// console.log("t",toggle);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: p.width,
        height:p.height,
        borderRadius:p.borderRadius,
        bgcolor: 'background.paper',
        // border: '2px solid red',
        boxShadow: 24,
        p: 4,
        // zIndex:0
      };


  // setOpen(p.show)
  // const handleOpen = () => {
  //   setOpen(true);
  //   console.log("handleopen",open)
  // };

  
//console.log(open)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <div> {p.label}</div>
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 0 }}>
            {
                p.comp.map((el,i)=>{
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
