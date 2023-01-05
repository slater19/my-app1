import React from 'react';
import BasicButtons from '../StylingComponents/Editbtn';
import BasicTextFields from '../StylingComponents/inputstyle';
import BasicModal from '../StylingComponents/Modal';
import MinHeightTextarea from '../StylingComponents/textarea';
import './Share.css';

export const Share = (p) => {
    console.log("share show",p.show)
    const arr1=[ 
    <MinHeightTextarea fontSize={"18px"} rows={1} borderRadius={"10px"} placeholder={"Share Comment"}
    fontFamily={"sans-serif"} width={"100%"} outline={"none"}  height={"120px"}
    border={"1px solid grey"} />,
    <BasicButtons label={"Submit"}  margin={"auto"} backgroundColor={"#F33449"} variant={"contained"} />
                ]
  return (
    <div>
        <BasicModal show={p.show} width={"200px"} borderRadius={"10px"} height={"200px"} label={"Share Comment"} comp={arr1}/>
    </div>
  )
}
