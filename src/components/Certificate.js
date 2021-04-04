import axios from 'axios'
import React, { Component } from 'react'
import AuthHeader from '../partials/AuthHeader'
import cert from "../democertificate.png"

export default class Certificate extends Component {
    constructor(props){
        super(props)
        this.state={
            certificate:""
        }
    }
    componentDidMount(){
        var url = "https://eldabackend.herokuapp.com/course/certificate/"+this.props.match.params.id
        axios({
            method:"GET",
            withCredentials:true,
            url:url
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                certificate:res.data.certificate
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.certificate? <div>
                    <img src={cert} style={{height:"100%",width:"100vw"}}/>
                    <p style={{position:"absolute",top:"450px",left:"140px",fontSize:60,fontWeight:800}}>{this.state.certificate.name}</p>
                    <p style={{position:"absolute",top:"620px",left:"180px",fontSize:24,fontWeight:800}}>{this.state.certificate.institute}</p>
                    <p style={{position:"absolute",top:"710px",left:"120px",fontSize:24,fontWeight:800}}>{this.state.certificate.course}</p>
                    <p style={{position:"absolute",top:"620px",right:"450px",fontSize:20,fontWeight:800}}>{this.state.certificate.date}</p>
                    <p style={{position:"absolute",top:"970px",left:"140px",fontSize:14,fontWeight:800}}>{this.state.certificate._id}</p>
                </div>:"No Such Certificate Exists!"}
                
            </div>
        )
    }
}
