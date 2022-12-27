import React from 'react'
import SelectVariants from '../StylingComponents/DropDownstyle'
import BasicTextFields from '../StylingComponents/inputstyle'
import BasicModal from '../StylingComponents/Modal'
import BasicButtons from '../StylingComponents/Editbtn'
export const Search = () => {

    const arr=["Shopping","Sports Coach","Others"]
    const components=[ 
    <BasicTextFields label={"Enter Search Keyword"}  width={"100%"}/>,
    <SelectVariants  label={"Choose Category"} variant={"standard"} marginTop={"10px"}width={"100%"} data={arr}/>,
<BasicTextFields label={"Skills"}  marginTop={"20px"} height={"40px"} width={"100%"}/>,
<BasicTextFields label={"Enter Search Location"} marginTop={"20px"} height={"40px"} width={"100%"}/>,
<BasicButtons label={"Search"} marginTop={"20px"} variant={"contained"} backgroundColor={"rgb(243, 52, 73)"} width={"100px"} margin={"auto"}/>
]
   
  return (
    <div>
        <BasicModal borderRadius={"20px"} width={"300px"} height={"300px"} comp={components}/>
    </div>
  )
}
