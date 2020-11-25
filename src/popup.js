import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './popup.css';



class Popup extends Component {
constructor(props)
{
  super(props)
  this.state={name:"",corporation:"",mail:"",Phone:"",msg:"",deliver_lec:false,start_proj:false,conduct_workshop:false,
  	director:"abcdef dvgxhfxh (Ass. Dean)",dire_phone:"7685867979",head:"himanshu pal (chairperson)",head_phone:"76480958",force:false};
  this.handleChange = this.handleChange.bind(this);
  this.handleChange_a = this.handleChange_a.bind(this);
  this.handleChange_b = this.handleChange_b.bind(this);
  this.handleChange_c = this.handleChange_c.bind(this);
  this.handleChange_d = this.handleChange_d.bind(this);
    this.submit = this.submit.bind(this);
  this.toggle= this.toggle.bind(this);
}

handleChange(e)
{
	this.setState({name:e.target.value});
}

handleChange_a(e)
{
	this.setState({corporation:e.target.value});
}

handleChange_b(e)
{
	this.setState({mail:e.target.value});
}

handleChange_c(e)
{
	this.setState({Phone:e.target.value});
}

handleChange_d(e)
{
	this.setState({msg:e.target.value});
}


submit(){
	console.log("vis")
	this.props.visible();
    this.props.hide();
}

toggle(e){
	var obj=e.target.name;
   
	       this.setState((prevState, props) => ({
  [obj]: !prevState[obj]}));
	   
}


render(){
 
return(
       <div  id="form_bg_a" >
       <div id="form_title"> Fill out this form & we will contact you soon.</div>
       <div id="form_sub">  marked fields are mandatory</div>
       <input  required id="form_name" className="no_outline" placeholder="Enter your full Name" onChange={this.handleChange}></input>
       <div id="name_focus"></div>
       <input  required id="form_corp" className="no_outline" placeholder="Enter your corporation name" onChange={this.handleChange_a}></input>
       <div id="corp_focus"></div>
       <input  required id="form_mail" className="no_outline" placeholder="Enter your e-mail address" onChange={this.handleChange_b}></input>
       <div id="mail_focus"></div>
       <input required  id="form_phone" className="no_outline" placeholder="Enter your Phone number" onChange={this.handleChange_c}></input>
       <div id="phone_focus"></div>
        <input required  id="form_msg_a" className="no_outline" placeholder="Enter your Phone number" onChange={this.handleChange_c}></input>
       <div id="msg_focus_a"></div>

       <div id="name_head">Name </div>
        <div id="Corporation_head">Corporation </div>
         <div id="mail_head">E-mail </div>
          <div id="phone_head">Phone </div>
          <div id="interest">I am interested in</div>





       
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


<label className="container_r" id="rad">Other
  <input type="radio"  name="radio"/>
  <span className="checkmark_r"></span>
</label>



    <div id="msg_form_a">Message</div>





    <div id="btn_form_a" onClick={this.submit}>Send</div>
        </div>



)

}
}


export default Popup;
