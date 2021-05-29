import React, {Component} from 'react'
import QRCode from "react-qr-code";
import './Generator.css';

class Generator extends Component{
    constructor(){
        super()
        this.state={
            url:"",
            qrtext:""
        }
    }

    handleUrl = (event)=>{
        this.setState({
            url: event.target.value
        })
    }

    handleGenerator =()=>{
        this.setState({
            qrtext:this.state.url
        })
        console.log("generated")
    }

    render(){
        let qrcode;
        if(this.state.qrtext===""){
            qrcode="QRCode will display here..."
        }
        else{
            qrcode=<QRCode value={this.state.qrtext} size={200}/>
        }
        return(
            <div className="frame">
            <h1>Generate and download a QR code image in React</h1>
            <input type="text" value={this.state.url} onChange={this.handleUrl} placeholder="Enter input"/>
            <button className="button" type="submit" onClick={this.handleGenerator}><span>Generate</span></button>
            <div className="qrdisplay">{qrcode}</div>
            </div>
        )
    }
}
export default Generator;