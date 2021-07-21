import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from  './login.js';
import feat_rect from './images/feat_rect.png';
import icon from './images/feat_icon.png';
import axios from "axios";
import {url} from './config';
import './featured.css';
class Featured extends Component {
constructor(props)
{
  super(props)
  // this.state={feat:[{head:"zaud ",sub:"dffd"},{head:"zaud ",sub:"dffd"},{head:"zaud ",sub:"dffd"}]}
  this.state = {
    feats : []
  }
}

componentDidMount(){
  console.log("data featured");
  axios({
    method : "GET",
    withCredentials : true,
    url : url+"featured"
  }).then((d)=>{
    console.log("data coming feat");
    console.log(d);
    this.setState({feats:d.data});
  })
}


render(){


return(
       <div id="featured_bg" >

   <div  className="row_feat" >
{this.state.feats.length != 0 && this.state.feats.map((feat, index) => (
    <div  className="card_feat" id={index} > 
    <div className = "icn">
<img className = "imgWidth" src={"http://localhost:3001" + feat.icon}/>
</div>
<div id="card_heading">{feat.heading}</div>
<div id="card_content">{feat.content}</div>

    </div>
  
    ))}

    </div>
        </div>



)

}
}


export default Featured;
