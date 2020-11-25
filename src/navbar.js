import React, { Component } from 'react';
import logo from './logo.svg';
import './navigation.css';
import cig_logo from './images/cig_logo.png';
import hover from './images/hover.png';
import {Switch,Route,Redirect,Link} from 'react-router-dom';


class NavBar extends Component {
constructor(props)
{
  super(props);
  this.state={last:null,hov:null};
  this.foc = React.createRef();
 this.handleClick=this.handleClick.bind(this);
}

handleClick(event){

  if(event.target.id=="cig_logo")
  {
   if(this.state.last!=null){
(this.state.last).classList.remove("clr");
document.getElementsByClassName("abv")[0].setAttribute("id", "hvr");
this.setState({last:null,hov:"hvr"});
return;
}
return;
  }



if(this.state.last!=null){
(this.state.last).classList.remove("clr");

}
var ele;
if(this.state.last==null)
ele=document.getElementById("hvr");
else
ele=document.getElementById(this.state.hov);

ele.setAttribute("id", event.target.id);
(this.foc.current).classList.add("abv")
event.target.classList.add("clr");
this.setState({last:event.target,hov:event.target.id});
}


render(){

return(


      <div>
  <img  src={hover} ref={this.foc} id="hvr"/>
     
          <div id="bg">
       <Link to="/home"><img id="cig_logo" src={cig_logo} onClick={this.handleClick}/></Link>
          <div id="logo">CIG </div>

          <div id="logo_head" onClick={this.handleClick}>Coorporate Interaction Group </div>
          <Link to="/collaboration" id="first" onClick={this.handleClick}>Collaborations </Link>
          <Link to="/about" ><div id="second"   onClick={this.handleClick}>About Us </div></Link>
            <Link to="/event" id="third" onClick={this.handleClick}>Events </Link>
          <Link id="fourth" to="/project"  onClick={this.handleClick}>Our Projects </Link>
            <Link to="/diaries" id="fifth" onClick={this.handleClick}>Interview Diaries </Link>
              <Link to="/recruitment" id="sixth" onClick={this.handleClick}>recruitment </Link>
        <Link to="/resources" > <div id="seventh"   onClick={this.handleClick}>Resources </div></Link>
          <Link to="/contact" id="eigth"  onClick={this.handleClick}  >Contact</Link>
         
         </div>
         
        </div>



)

}}

export default NavBar;