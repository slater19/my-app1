import React from 'react'
import './Cards.css'

export const Cards = (p) => {

    const styles={
// border:"1px solid red",
width:p.width,
// height:p.height,
borderRadius:"20px",
margin:"auto",
marginTop:"20px",
marginBottom:"20px",
boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
display:"flex",
alignItems:"center",
justifyContent:"center"   
}

const styles1={
    // border:"1px solid green",
    width:"95%",
    marginBottom:"20px",
    marginTop:"20px"
    // borderRadius:"20px"
}
  return (
    <div>
        {
              p.comp.map((el,i)=>{  
                // console.log(File.type(el.File))
                return(
    <div style={styles}>  
        <div style={styles1}>
            {
            
                el.filetype=="png" || el.filetype=="jpg"?
                <div key={i} className='_Cardsimage'>
                <img src={el}/>
             </div>:
        <div key={i}>
              {el}
        </div>    
            }
        </div>
    </div>
    )
    })
}
    </div>
  )
}
