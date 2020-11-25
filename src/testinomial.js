import React, { Component } from 'react';
import logo from './logo.svg';
import './cls.css'
import './testinomial.css'
import {Switch,Route,Redirect} from 'react-router-dom';
import Mask from './images/mask.png';
import Comma from './images/comma.svg';
import Line from './images/line.svg';
import axios from "axios";


class Testinomials extends Component {
constructor(props)
{ 
  
  super(props);
  this.state={
    testimonialArr : []
  }
}

// componentDidMount(){  
//   console.log("req to backend to fetch testimonial");
//   axios({
//     method : "GET",
//     withCredentials : true,
//     url : "http://localhost:3001/testimonial"
//   }).then((d)=>{
//     console.log("data");
//     this.setState({testimonialArr : d.data});
//     console.log(d);
//   })
// }
render(){
  console.log(this.props.info.name);

return(

  <div id="t_bg">
  <div>
  <div id="t_head">{this.props.info.heading}</div>
  <div id="t_content">{this.props.info.content}</div>
  <img src={"http://localhost:3001" + this.props.info.image} id="t_img"/>
  <img src={Comma} id="t_comma"/>
  <img src={Line} id="t_line"/>
  <div id="t_name"> {this.props.info.name}</div>
  <div id="t_des">{this.props.info.designation}</div>
  </div>
  </div>




)


}}


export default Testinomials;
