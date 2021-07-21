import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import  './success.css';
import check from './images/check.png';
import cross from './images/shape.png';

class Success extends Component {
constructor(props)
{
  super(props)
  
}



change()
{ 
  this.props.visible();
}


render(){


return(
       <div id="success">
<div id="head_suc">Submission Successful</div>
<div id="sub_suc"> Thank you for contacting us. It is good to see that you are interested 
to conduct workshop/s at IIT Roorkee. We will be contacting you soon.</div>
<img id="check" src={check}/>
<div id="cross"  onClick={this.change.bind(this)}>x</div>
        </div>



)

}
}


export default Success;
