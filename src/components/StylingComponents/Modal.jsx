import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal(p) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: p.width,
        height:p.height,
        borderRadius:p.borderRadius,
        bgcolor: 'background.paper',
        border: '2px solid rgb(243, 52, 73)',
        boxShadow: 24,
        p: 4
      };

  const [open, setOpen] = React.useState(true);

  // const handleOpen = () => setOpen(true);

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
    console.log(open);
  };
//console.log(open)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClick={handleOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <div> {p.label}</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            {
                p.comp.map((el,i)=>{
                        return (
                        <span key={i}>{el}</span>
                        )      
                })
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
