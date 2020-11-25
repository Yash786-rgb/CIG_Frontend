import React, { Component } from 'react';
import {Switch,Route,Redirect,Link} from 'react-router-dom';
import './project.css';
import project_bg from './images/project_bg.svg'; 

class Project extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div >
<img id="project_img" src={project_bg}/>
<div id="project_heading">Page under construction</div>
<Link to="/home" id="link_home">go Back to home</Link>
        </div>



)

}
}


export default Project;
