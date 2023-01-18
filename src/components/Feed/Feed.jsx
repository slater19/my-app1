import React, { useState } from 'react';
import './Feed.css';
import Education from '../../Images/Education.jpg';
import Profile from '../../Images/Profile.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Groups3Icon from '@mui/icons-material/Groups3';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import MobileScreenShareSharpIcon from '@mui/icons-material/MobileScreenShareSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { Share } from '../Share/Share';
import BasicModal from '../StylingComponents/Modal';
import MinHeightTextarea from '../StylingComponents/textarea';
import BasicButtons from '../StylingComponents/Editbtn';
import { Comment } from '../Comment/Comment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const Feed = () => {

    const [show, setshow] = useState(false);
    const [share, setshare] = useState(false);
    const [comment, setcomment] = useState(false);
    const [num, setnum] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const arr1 = [
        <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"10px"} placeholder={"Enter Comment"}
            fontFamily={"sans-serif"} width={"100%"} outline={"none"} height={"120px"}
            border={"1px solid grey"} />,
        <BasicButtons label={"Share"} margin={"auto"} backgroundColor={"#F33449"} variant={"contained"} />
    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #F33449',
        boxShadow: 24,
        p: 4,
        borderRadius:"10px"
    };
    const trig = () => { // for options
        setshow(!show)
        // console.log(show)
    }

    const display = (i) => { //for comment
        console.log(i)
        setnum(i)
        if (num == i) {
            setcomment(!comment)
        }
        else {
            setcomment(true)
        }
    }
    const change = () => {
        setshare(!share)
        console.log("share", share)
    }
    const arr = [
        {
            Image: Profile,
            Name: "Tanmay RatnaParkhi",
            Profession: "Founder",
            Time: "19:12 PM",
            heading: "Show Heading",
            contentImage: Education,
        },
        {
            Image: Profile,
            Name: "Tanmay RatnaParkhi",
            Profession: "Founder",
            Time: "19:12 PM",
            heading: "Show Heading",
            contentImage: Education,
        },
        {
            Image: Profile,
            Name: "Tanmay RatnaParkhi",
            Profession: "Founder",
            Time: "19:12 PM",
            heading: "Show Heading",
            contentImage: Education,
        }
    ]

    return (
        <div>
            {
                arr.map((el, i) => {
                    return (
                        <div key={i} className='_Feed1'>
                            <div className='_Feedheader'>
                                <div className='_Feedproimage'>
                                    <img src={el.Image} />
                                </div>
                                <div className='_Feedname'>
                                    <div>{el.Name}</div>
                                    <div>{el.Profession}</div>
                                    <div>{el.Time}</div>
                                </div>
                                <div className='_Feedoption'>
                                    {/* <BsThreeDotsVertical onClick={trig} style={{ fontSize: "30px", width: "30px" }} /> */}
                                    <MoreVertIcon onClick={trig} />
                                    <div className={show ? '_Feedoption1' : '_Feedoption2'} >
                                        <div className='_Feedoptionlist'>
                                            <div><CreditCardIcon /></div>
                                            <div>Visiting Card</div>
                                        </div>
                                        <div>
                                            <div><AccountCircleIcon /></div>
                                            <div>Profile</div>
                                        </div>
                                        <div>
                                            <div><Groups3Icon /></div>
                                            <div>Set Meetings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p style={{paddingLeft:"2%",textAlign:"left"}}>
                                    {el.heading}
                                </p>
                            </div>
                            <div className='_Feedimage'>
                                <img src={el.contentImage} />
                            </div>
                            <div className='_FeedReaction'>
                                <div className='_Feedstats'>
                                    <span>Like : 2</span>
                                    <span>0 Comment</span>
                                </div>
                                <div className='_FeedLikes'>
                                    <div>
                                        <div className='_FeedLikes11' >
                                            <ThumbUpOffAltIcon />
                                            <div >Like</div>
                                        </div>
                                    </div>
                                    <div onClick={() => display(i)}>
                                        <div className='_FeedLikes11'>
                                            <CommentIcon />
                                            <div>Comment</div>
                                        </div>
                                    </div>
                                    <div >
                                        {/* modal click for opening */}
                                        <div onClick={handleOpen} className='_FeedLikes11'>
                                            <MobileScreenShareSharpIcon />
                                            <div>Share</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='_FeedLikes11'>
                                            {/* <GrSend style={{ fontSize: "22px", marginBottom: "5px" }} /> */}
                                            <SendSharpIcon />
                                            <div>Send</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                comment && num === i ? <Comment /> : ""
                            }
{
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
                arr1.map((el,i)=>{
                        return(
                            <div>
                                {el}
                            </div>
                        )
                })
            }
        </Typography>
    </Box>
</Modal>
}
                        </div>
                    )
                })

            }
        </div>
    )
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
