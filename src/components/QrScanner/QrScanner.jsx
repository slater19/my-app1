import React, { Component } from 'react'
import { Container } from '@mui/system';
import QrReader from "react-qr-scanner";
import Grid from '@mui/material/Grid';
import { AiFillEnvironment } from 'react-icons/ai';

import { useNavigate } from "react-router-dom";




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
<<<<<<< HEAD
         {/*  <div id="container">
          <div className="navi"> */}
          {/* <QrReader 
=======
          {/* <div id="container">
          <div className="navi">
          <QrReader 
>>>>>>> 0091bcbd6f2c2de6fca8bbd51668337802ad970d
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