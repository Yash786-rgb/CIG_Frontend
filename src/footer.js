import React, { Component } from 'react';
import logo from './logo.svg';
import './footer.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import rectangle from './images/rectangle.png';
import iitr from './images/iitr.png';
import cig_logo from './images/cig_logo.png';
import msg from './images/msg.png';
import call from './images/call.png';
import location from './images/location.png';
import luv from './images/luv.png';
import lnk from './images/lnk.png';
import fb from './images/fb.png';
import link from './images/linkdin.svg';
import fb_hov from './images/fb.svg';
import {Link} from 'react-router-dom';

class Footer extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div id="rect">
       
       <img id="foot" src={iitr}/>
       <img id="foot_b" src={cig_logo}/>
       <img id="msg" src={msg}/>
       <img id="call" src={call}/>
       <img id="location" src={location}/>
        <img id="lnk" src={lnk}/>
       <img id="fb" src={fb}/> 
    <a href="https://www.linkedin.com/in/cig-iitroorkee/?originalSubdomain=in">    <img id="lnk_hov" src={link}/></a>
    <a href="https://www.facebook.com/cig.iitroorkee"> <img id="fb_hov" src={fb_hov}/> </a>


<div id="footer_a"> We bring Corporate and Academia together for valuable collaborations.</div>

<div id="footer_b">For institute details visit </div>
<a className="footerLink" id="footer_c" href="https://www.iitr.ac.in/">www.iitr.ac.in</a>

<a id="footer_d">Information  </a>
<Link to="/project"><a  className="footerLink" id="footer_e">Our Projects </a></Link>
<Link to="/resources"><a  className="footerLink" id="footer_f">Resources  </a></Link>
<Link to = "/about"><a className="footerLink" id="footer_g"> Team </a></Link>


<a id="footer_h">Collaborate  </a>
<Link to="/collaboration"><a  className="footerLink" id="footer_i">Deliver Lecture </a></Link>
<Link to="/collaboration"><a  className="footerLink" id="footer_j">Start Project  </a></Link>
<Link to="/collaboration"><a   className="footerLink" id="footer_k">  Conduct Workshop </a></Link>



<a id="footer_l">contact us  </a>
<a  className="footerLink"  href = "mailto:cig@iitr.ac.in" id="footer_m">cig@iitr.ac.in </a>
<a id="footer_n">13332-28-6264 </a>
<a id="footer_o"> SAC, IIT Roorkee Roorkee, Uttrakhand, India- 247667</a> 
        </div>

)}}


export default Footer;
