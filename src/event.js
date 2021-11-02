import React, { Component } from 'react';
import './event.css';
import eve from './images/eve.svg';
import poly from './images/Polygon.svg';
import imge from './images/noRecruit.svg';
import ar from './images/ar.svg';
import up from './images/up.png';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import {url} from './config';


import event_data from './event_data';


class Event extends Component {
constructor(props)
{
  super(props);
  this.state={events:[
    // {id:1,topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    // {id:2,topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    // {id:3,topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    // {id:4,topic:"Topic for the event", date:"January 19,2020",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
  ],
  editVisibles: {},
  bg:false
  };
}

componentDidMount(){
    // console.log("requesting");
    // axios({
    //   method : "GET",
    //   withCredentials : true,
    //   url : url +"events"
    // }).then((d)=>{
    //   console.log("data coming");
    //   console.log(d);
    //   var x = d.data.reverse();
    //   this.setState({events:x});
    //   console.log("state set");
    // })

    this.setState({events:event_data});
  }





showEditDiv = id => {
  this.setState(prevState => ({
    editVisibles: {
      ...prevState.editVisibles,
      [id]: !prevState.editVisibles[id]
    },
    bg:!this.state.bg
  }));
};

render(){


  return(
    <div>
      <div className="h">Events</div>
      <div className="description">
      Our events include Corporate Lecture Series and Workshops.
CIG conducts time to time corporate lecture series which acts as platform to bridge the gap between corporates and students of IIT Roorkee.
CIG organizes various workshops to deliver an insight of industrial technologies and projects to students.
      </div>
      <div className="image">
        <img className ="imgWidth" src={eve}></img>
      </div>
      <div className="timeline_head">Timeline for our events</div>
      
      <div className={`timeline ${!this.state.bg? "visible": "unvisible"}`}>
        <ul>
        {this.state.events.map((eve,index)=>(
          <li>
            <div className="text" key={index} >
              <div className="topic">{eve.heading}</div>
              <div className={`design ${!this.state.editVisibles[index]? "visible": "unvisible"}`}>
                <div className={`detail ${!this.state.editVisibles[index]? "visible": "unvisible"}`}>{eve.content}</div>
              
                <img className={`back ${!this.state.editVisibles[index]? "visible": "unvisible"}`} src={poly} ></img>
                <img className={`back2 ${!this.state.editVisibles[index]? "unvisible": "visible"}`} src={up} onClick={() => this.showEditDiv(index)}></img>
                <div  className={`expand ${!this.state.editVisibles[index]? "visible": "unvisible"}`} onClick={() => this.showEditDiv(index)}>
                  <div>Expand</div>
                  <img src={ar}></img>
                </div>
                <div className={`expand2 ${!this.state.editVisibles[index]? "unvisible": "visible"}`}>
                  <img  className ="imgWidth" src={imge}></img>
                </div>
              
                <div className="date">{eve.date}</div>
              
            
              </div>
            </div>
          </li>
        )
        )}
        <div style={{"clear":"both"}}></div>
        </ul>
      </div>
      
     
    </div>



  )}}


export default Event;


