import React, { Component } from 'react';
import logo from './logo.svg';
import './navigation.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from  './login.js';
import About from  './about.js';
import NavBar from  './navbar.js';
import Home from  './home.js'
import Footer from './footer.js';
import Resources from './resources.js'; 
import Project from './project.js'; 
import Contact from './contact.js'; 
import Colloboration from './collaboration.js'; 
import Event from './event.js'; 
import Recruitment from './recruitment';

class App extends Component {
constructor(props)
{
  super(props);
  this.state={
    recruit:false
  }
  
}




render(){


return(
       <div id="rt">

        <NavBar/>
<div >
        <Switch>
        <Route exact path="/" render={() => (
       <Redirect to="/home"/>
            )}/>
          <Route path="/about"  render={(props)=><About/>} />
          <Route path="/home"  render={(props)=><Home/>}/>
          <Route path="/resources"  render={(props)=><Resources/>}/>
          <Route path="/project"  render={(props)=><Project/>}/>
          <Route path="/contact"  render={(props)=><Contact/>}/>
          <Route path="/collaboration"  render={(props)=><Colloboration  />}/>
           <Route path="/event"  render={(props)=><Event/>}/>
           <Route path="/recruitment"  render={(props)=><Recruitment recruit={this.state.recruit}/>}/>
        </Switch>
        </div>
   <Footer/>
        </div>



)

}
}


export default App;
