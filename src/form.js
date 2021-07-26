import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './form.css';
import axios from "axios";
import {url} from './config';

import emailjs from 'emailjs-com';

var receivingEmail;

var user_id =process.env.REACT_APP_USER_ID;

var template_id =process.env.REACT_APP_TEMPLATE_ID;

var service_id = process.env.REACT_APP_SERVICE_ID;

emailjs.init(user_id);


class Form extends Component {
constructor(props)
{
  super(props)
  this.state={name:"",corporation:"",mail:"",phone:"",msg:"",deliver_lec:false,start_proj:false,conduct_workshop:false,others:false,p : "check",
  	director:"abcdef dvgxhfxh (Ass. Dean)",dire_phone:"7685867979",head:"himanshu pal (chairperson)",head_phone:"76480958",force:false};
  this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  this.toggle= this.toggle.bind(this);
}

handleChange(e)
{ 
  
  let ky=e.target.name;


	this.setState({[ky]:e.target.value});

}


sendMail (templateId, variables) {
        
  var flag = false;

  emailjs.send(
  service_id, templateId,
  variables
  ).then(res => {
      console.log('Email successfully sent!')
      alert("sent");
      flag = true;
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => {
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
        alert("something went wrong, please try again")
      })
}

ValidateEmail(input){

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return input.match(validRegex);
}


handleSubmit = (event)=>{
  event.preventDefault();
  var isCorrectEmail = true;
  
  if(!this.ValidateEmail(this.state.Email)){
      isCorrectEmail = false;
      alert("invalid email");
  }

  if(isCorrectEmail == true){
  var templateId = template_id;
  var stateObj = this.state;
  var msgToSend = `Hii, Iam ${stateObj.Name} from ${stateObj.Organization} and Iam contacting you for ${stateObj.Message}, Here is my contact number ${stateObj.Phone}`
  this.sendMail(templateId, {message: msgToSend, from_name: this.state.Email, to_name : receivingEmail});
  }
}






submit(e){
  // this.props.scroll()
  e.preventDefault()

  e.target.reset();
  
  var my_interest = [];
  var possible_interest = ["deliver_lec","start_proj","conduct_workshop","others"];
  for(var i=0;i<possible_interest.length;i++){
    if(this.state[possible_interest[i]]){
      my_interest.push(possible_interest[i]);
    }
  }

  var stateObj = this.state;
  var dataObj = {
    name : stateObj.name,
    corporation :stateObj.corporation ,
    email : stateObj.mail,
    phone :stateObj.phone,
    interest :  my_interest,
    msg:stateObj.msg
  }

  
  console.log("dataObj = ", dataObj);

  console.log("sending form data");
  axios({
    method : "POST",
    data : dataObj,
    withCredentials : true,
    url : url+"org",
  }).then((m)=>{
    console.log(m);

    	this.props.visible(); 

        // this.props.scroll()


      // window.location()
  })

}

toggle(e){
	var obj=e.target.name;
   
	       this.setState((prevState, props) => ({
  [obj]: !prevState[obj]}));
	   
}


render(){
 
return(
       <div  id="form_bg" >
       <div id="form_title" > Fill out this form & we will contact you soon.</div>
       <div id="form_sub" className="asterik">  marked fields are mandatory</div>
       <form onSubmit={this.submit}> 
             <textarea name="name" required id="form_name" className="no_outline " placeholder="Enter your full Name" onChange={this.handleChange}>{this.state.name}</textarea>
       <div id="name_focus"></div>
       <textarea name="corporation"  required id="form_corp" className="no_outline " placeholder="Enter your corporation name" onChange={this.handleChange}></textarea>
       <div id="corp_focus"></div>
       <input type="email" name="mail" required id="form_mail" className="no_outline" placeholder="Enter your e-mail address" onChange={this.handleChange}></input>
       <div id="mail_focus"></div>
       <textarea  name="phone" required  id="form_phone" className="no_outline" placeholder="Enter your Phone number" onChange={this.handleChange}></textarea>
       <div id="phone_focus"></div>
        <textarea name="msg"   id="form_msg" className="no_outline" placeholder="Enter your message" onChange={this.handleChange}/>
       <div id="msg_focus"></div>

       <div id="name_head" className="required">Name </div>
        <div id="Corporation_head"  className="required">Corporation </div>
         <div id="mail_head" className="required">E-mail </div>
          <div id="phone_head"  className="required" >Phone </div>
          {/* <div id="interest">I am interested in</div> */}


 


{/* 
<label className="container"  id="box_a">Delivering Lecture
  <input  name="deliver_lec"  onClick={this.toggle}  type="checkbox" c/>
  <span className="checkmark"></span>
</label>

<label className="container"  id="box_b">Starting Projects
  <input name="start_proj"    onClick={this.toggle} type="checkbox"/>
  <span className="checkmark"></span>
</label>

<label className="container"  id="box_c">Conducting Workshops
  <input  name="conduct_workshop"   onClick={this.toggle} type="checkbox"/>
  <span className="checkmark"></span>
</label>



<label className="container" id="rad">Other
  <input  onClick={this.toggle} type="checkbox" name="others"/>
  <span className="checkmark"></span>
</label> */}




    <div id="msg_form">Message</div>





    <button type="submit" id="btn_form" >Send</button>

    </form>
        </div>



)

}
}


export default Form;
