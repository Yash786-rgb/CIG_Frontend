import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './contact.css';
import contact_map from './images/contact_map.png';
import contact_phone from './images/contact_phone.png';
import contact_msg from './images/contact_msg.png';
import lin_contact  from'./images/lin_contact.png';
import fb_contact from './images/fb_contact.png';
import mail_contact from './images/mail_contact.png';
import adress from './images/adress.svg';
import link_con from './images/linkdin.svg';
import fb_con_hov from './images/fb.svg';
import mail_con from './images/mail.svg';
import Success from './success.js';
import Form from './form.js'
import cig_map from './images/cig_map.png';
import axios from "axios";
import {url} from './config';
class Contact extends Component {
constructor(props)
{
  super(props)
  this.state={assistantDean:"abcdef dvgxhfxh (Ass. Dean)",assistantDean_phone:"7685867979",chairperson:"himanshu pal (chairperson)",chairperson_phone:"76480958",visible:false}
  this.visible= this.visible.bind(this);
  this.hide= this.hide.bind(this);
}


componentDidMount(){
    axios({
      method : "GET",
      url  : url+"dean_chaiperson",
      withCredentials : true
    }).then((d)=>{
      console.log("dean and chairperson data",d.data[0]);
      const arr = d.data[0];
      this.setState({
         assistantDean : arr.dean.name,
         assistantDean_phone :  arr.dean.contact,
         chairperson :  arr.chairPerson.name,
         chairperson_phone : arr.chairPerson.contact
      })
    })
}


hide()
{
	this.setState({visible:false});
}

scroll(){
	window.scrollTo(0, 600);
}

visible(){
	this.setState({visible:true});
}

render(){


return(
       <div id="contact_bg" >
<div id="contact_head"> Contact Us</div>
<div id="dir_name">{this.state.assistantDean}</div>

<div id="dir_mob">{this.state.assistantDean_phone}</div>

<div id="head_name">{this.state.chairperson}</div>

<div id="head_mob">{this.state.chairperson_phone}</div>
<div>
<img id="contact_phone" src={contact_phone}/>
</div>
<div id="contact_map">
<img id="cig_map" src={cig_map}/>
</div>
<div id="soc">Social Links</div>
<img id="contact_msg" src={contact_msg}/>
<img id="lin_contact" src={lin_contact}/>
<img id="fb_contact" src={fb_contact}/>
<img id="mail_contact" src={mail_contact}/>

<a href="https://www.linkedin.com/in/cig-iitroorkee/?originalSubdomain=in">
<img id="lin_contact_hov" src={link_con}/>
</a>

<a href="https://www.facebook.com/cig.iitroorkee">
<img id="fb_contact_hov" src={fb_con_hov}/>
</a>

<img id="mail_contact_hov" src={mail_con}/>

<img id="adress" src={adress}/>
{(this.state.visible)? <Success visible={this.hide}/> :  null }
<Form scroll={this.scroll} visible={this.visible}/>
        </div>



)

}
}


export default Contact;
