import React, { Component } from 'react'

import QrReader from "react-qr-scanner";







class QrScanner extends Component {
    constructor(props){
      super(props)
      this.state = {
        delay: 100,
        result: 'No result',
        
      }
  
      this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
      this.setState({
        result: data,
      })
    }
    handleError(err){
      console.error(err)
    }
    render(){
      const previewStyle = {
        height: '100%',
        width: '100%',
      }
     
  
      return(
        <div>
          <header className="Navbar">
          <div className="Toolbar">
           
            <div className="Title"> QR Scanner </div>
            
          </div>
        </header>
          {/* <div id="container">
          <div className="navi">
          <QrReader 
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            facingMode="rear"
            /></div>
            <div className='infoi'>
            top
            </div>
            </div>
            
            
          <p>{this.state.result}</p> */}
        </div>
      )
    }
  }




  export default QrScanner