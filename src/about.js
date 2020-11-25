import React, { Component } from 'react';
import logo from './logo.svg';
import './about.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import pic from './images/img-a.svg'; 
import mission from './images/mission.png'; 
import objective from './images/objective.png'; 
import vision from './images/vision.png'; 
import Card from './card.js'; 
import View from './view.js';
import vis from './images/vis_about.svg';
import mis from './images/mis_about.svg';
import obj from './images/obj_about.svg';
import axios from "axios";

class About extends Component {
constructor(props)
{ 
  
  super(props);
//   this.state={admin_body:[{name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
//   {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
//   {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
//   {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"},
//  {name:"zaid",desig:"head",img:"https://cdn.stocksnap.io/img-thumbs/960w/architecture-abstract_0OXTLB0E5N.jpg",email:"z@gmail.com",mob:"4658875"}],
// lecture:{heading:"Mission",sub:"Building a stronger connection between Academia & Industry via valuable collaborations",link:""}
//   ,workshop:{heading:"Vision",sub:" To make IIT Roorkee a hub of Innovation , Research and opportunities",link:""},
//   project:{heading:"Objective",sub:"Knowledge Exchange Seminars Industry Interactions Events Corporate Collaborations",link:"",visible:false,form:false}
// }
this.state = {
  adminBody : [],
  studentBody : [],
  lecture:{heading:"Mission",sub:"Building a stronger connection between Academia & Industry via valuable collaborations",link:""},
  workshop:{heading:"Vision",sub:" To make IIT Roorkee a hub of Innovation , Research and opportunities",link:""},
  project:{heading:"Objective",sub:"Knowledge Exchange Seminars Industry Interactions Events Corporate Collaborations",link:"",visible:false,form:false}
}

}

componentDidMount(){
  axios({
    method : "GET",
    withCredentials : true,
    url : "http://localhost:3001/team/adminBody"
  }).then((d)=>{
    this.setState({adminBody : d.data});
    console.log("adminBody set");
  })
  axios({
    method : "GET", 
    withCredentials : true,
    url : "http://localhost:3001/team/studentBody"
  }).then((d)=>{
    this.setState({studentBody:d.data});
    console.log("studentBody set");
  })
}





render(){


return(


      <div>


<div id="about_heading">Coorporate Interaction Group IIT Roorkee</div>
<div id="about_sub_heading">Corporate Interaction Group(CIG) is a student body of IITR founded on 1st October 2015 that 
works for creating and nurturing excellent relationships with Industries catering to technological and 
research needs of Industry and walking together towards innovating our society that is mutually beneficial to both
 IIT Roorkee and the Industries</div>

  <div id="pic">
    <img  id="pc" src={pic}/>
 </div>

  <div className="row_abt">
    <div  onClick ={this.form_vis} className="column_view">
    < View   icon={vis} data={this.state.lecture}/>
      </div>
      <div onClick ={this.form_vis}  className="column_view">
      <View icon={mis} data={this.state.workshop}/>
       </div>

      <div  onClick ={this.form_vis} className="column_view">
      <View icon={obj} data={this.state.project}/>
      </div>
       </div>

<div id="tm"> Our Team </div>
<div id="adm"> Administrative Body </div>
  <div  className="row" >
  {this.state.adminBody.length != 0  && this.state.adminBody.map((adm, index) => (
    <Card id={index} admin={adm}/> 
    ))}
 </div>

 <div id="std">Student body</div>

   <div  className="row" >
   {this.state.studentBody.length != 0 && this.state.studentBody.map((adm, index) => (
    <Card id={index} admin={adm}/> 
    ))}
 </div>
 

    </div>


)


}}


export default About;
