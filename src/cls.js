import React, { Component } from 'react';
import logo from './logo.svg';
import './cls.css'
import {Switch,Route,Redirect} from 'react-router-dom';
import {url} from './config';


class CLS extends Component {
constructor(props)
{ 
  
  super(props);
  this.state={}
}
render(){


return(


      <div id="CLS_bg">
      <div id="CLS_hd">
    <div id="CLS_date"> {this.props.info.date} </div>
       <div id="CLS_heading"> {this.props.info.heading} </div>
       <img id="CLS_img" src={url + this.props.info.img}/>
         <img id="CLS_icon" src={url + this.props.info.companyIcon}/>
        <div id="CLS_name"> {this.props.info.name} </div>
        <div id="CLS_des"> {this.props.info.designation}</div>
</div>
    </div>


)


}}


export default CLS;
