import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import resources_bg from './images/resources_bg.svg';
import './resources.css';
import dep from './images/dep.png';

class Resources extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div >
<img id="resources_bg" src={resources_bg}/>
<div id="resource_heading">Resources</div>
<div id="resource_sub">IIT Roorkee is one of the biggest technical institutions
 in the country having the largest number of academic units.</div>

<div className="row_res">
    <div className="column_res_a">
    <img className="icon_resource" src={dep}/>
    <div className="res_card">Departments</div>
    <div className="res_content"> It has 22 academic departments covering engineering,
     applied sciences, humanities & social sciences, & management programmes.</div>
     <a className="res_link">View Departments</a>
      </div>
      <div className="column_res_b">
      <img className="icon_resource" src={dep}/>
    <div className="res_card_con">Centres</div>
    <div className="res_content"> It has 2 academic centre, 2 centres of excellence, 8 academic 
    service centres and 4 supporting units.</div>
    <a className="res_link_b">View Centres</a>
       </div>

       </div>


        </div>



)

}
}


export default Resources;
