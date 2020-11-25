import React, { Component } from 'react';
import logo from './logo.svg';
import './collab.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import sample from './images/sample.png';


class Collab extends Component {
constructor(props)
{
  super(props)
  this.state={max_workshop:"6",max_lec:"20",Workshops_count:0,Lecture_count:0,visited:true,visited_lec:true};
  this.onWindowScroll=this.onWindowScroll.bind(this);
    this.onWindowScroll_b=this.onWindowScroll_b.bind(this);
  this.check=this.check.bind(this);
    this.verify=this.verify.bind(this);
   this.count = React.createRef();
 this.lect_count = React.createRef();
}


componentDidMount() {
   window.addEventListener('scroll', this.onWindowScroll);
   window.addEventListener('scroll', this.onWindowScroll_b);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.onWindowScroll);
   window.removeEventListener('scroll', this.onWindowScroll_b);
}

check(){

    var r, html;
  
    html = document.documentElement;
    r = (this.count.current).getBoundingClientRect();

if( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    )
   window.removeEventListener('scroll', this.onWindowScroll);


    return ( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    );
}


verify(){

    var r, html;
  
    html = document.documentElement;
    r = (this.lect_count.current).getBoundingClientRect();
if( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    )
   window.removeEventListener('scroll', this.onWindowScroll_b);

    return ( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    );
}

onWindowScroll(){
   console.log(this.state.max_workshop);
  if(this.check()&&this.state.visited)
    { 
      var num =parseInt(this.state.max_workshop);
     this.intervalId= setInterval(()=> {
        
        if(this.state.Workshops_count==num)
         { 
          
           clearInterval(this.intervalId);
           return;
         }
         else
     this.setState((prevState, props) => ({
  Workshops_count: prevState.Workshops_count +1,visited:false}));
       
    },100);
    
        
    }
}


onWindowScroll_b(){
  if(this.verify()&&this.state.visited_lec)
    {
      var num =parseInt(this.state.max_lec);
     this.intervalId_lec= setInterval(()=> {
        
        if(this.state.Lecture_count==num)
         { 
         
           clearInterval(this.intervalId_lec);
           return;
         }
         else
     this.setState((prevState, props) => ({
  Lecture_count: prevState.Lecture_count +1,visited_lec:false}));
       
    },35);
    
        
    }
}



render(){


return(
       <div  id="collab_card">
<div className="row_collab">
    <div className="column_col">
    <img className="col_img" src={sample}/>
      </div>
      <div className="column_col">
      <img  className="col_img" src={sample}/>
       </div>

      <div className="column_col">
      <img  className="col_img" src={sample}/>
      </div>
      <div className="column_col">
      <img  className="col_img" src={sample}/>
      </div>
      <div className="column_col">
      <img  className="col_img"  src={sample}/>
      </div>
      <div className="column_col">
      <img  className="col_img" src={sample}/>
      </div>
       </div>
<div id="work_count" ref={this.count}> {this.state.Workshops_count}</div>
<div id="lec_count" ref={this.lect_count}> {this.state.Lecture_count}</div>
       <div id="work"> Workshops</div>
    <div id="lec">Lectures & Seminars</div>
        </div>



)

}
}


export default Collab;
