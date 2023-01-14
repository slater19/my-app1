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
    width:"90%",
    marginBottom:"25px",
    marginTop:"25px"
    // borderRadius:"20px"
}
  return (
    <div>
    <div style={styles}>  
        <div style={styles1}>
            {
                p.comp.map((el,i)=>{

                    if(i==0){
                        return(
                            <div key={i} className='_Cardsimage'>
                                <img src={el}/>
                            </div>
                        )
                    }
                    else{
                    return(
                        <div key={i}>
                            {el}
                        </div>
                    )
                    }
                })
            }
        </div>
    </div>
    </div>
  )
}
