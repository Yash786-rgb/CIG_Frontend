import React, { Component } from 'react';
import {Switch,Route,Redirect,Link} from 'react-router-dom';
import Vector from './images/vec.svg'
import './view.css';



class View extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div id="view_bg">

<div className="view_head">{this.props.data.heading}</div>
      <img className="view_logo" src={this.props.icon}/>
<div className ="view_sub">{this.props.data.sub} </div>
<Link className="view_link">{this.props.data.link}</Link>

</div>


)

}
}


export default View;
