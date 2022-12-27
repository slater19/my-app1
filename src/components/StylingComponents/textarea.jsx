import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function MinHeightTextarea(p) {
    // console.log(p)
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={p.rows}
      placeholder={p.placeholder}
      style={{ 
        width: p.width,borderRadius:p.borderRadius,fontSize:p.fontSize,
        fontFamily:p.fontFamily,outline:p.outline,
        color:p.color,marginTop:p.marginTop,height:p.height,
        borderColor:p.borderColor
    }}
    />
  );
}
