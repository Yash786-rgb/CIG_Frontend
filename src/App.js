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
import Diaries from './diaries.js';
import axios from "axios";
import {url} from './config';
class App extends Component {
constructor(props)
{
  super(props);
  this.state={
    recruit:false
  }
  
}

componentDidMount(){
    axios({
      method : "GET",
      url : url+"recruit",
      withCredentials : true
    }).then((d)=>{
      console.log("d for recruit",d);
       this.setState({
         recruit : d.data
       })
    })
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
          <Route exact path="/about" render={(props)=><About/>} />
          <Route  exact path="/home"  render={(props)=><Home/>}/>
          {/* <Route path="/resources"  render={(props)=><Resources/>}/>          
  <Route path="/project"  render={(props)=><Project/>}/> */}
          <Route  exact path="/contact"  render={(props)=><Contact/>}/>
          <Route  exact path="/collaboration"  render={(props)=><Colloboration  />}/>
           <Route  exact path="/event"  render={(props)=><Event/>}/>
            <Route  exact path="/diaries"  render={(props)=><Diaries/>}/>
           <Route  exact path="/recruitment"  render={(props)=><Recruitment recruit={this.state.recruit}/>}/>
        </Switch>
        </div>
   <Footer/>
        </div>



)

}
}


export default App;
