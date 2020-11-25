import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './collaboration.css';
import collab_bg from './images/collab_bg.png';
import cls_img from './images/cls_img.png';
import lec_img from './images/lec_img.png';
import work_img from './images/work_img.png';
import proj_img from './images/proj_img.png';
import left_arrow from './images/left_arrow.svg';
import right_arrow from './images/right_arrow.svg';
import Mask from './images/mask.png';
import Img from './images/image.png';
import Comp from './images/cls_comp.svg';
import line from './images/line.svg';
import Collab from './collab.js';
import View from './view.js';
import Success from './success.js';
import Popup from './popup.js'
import CLS from './cls.js'
import axios from "axios";

//alert(window.innerWidth);
class Colloboration extends Component {
constructor(props)
{
  super(props)
  this.state={lecture:{heading:"Lecture",sub:"We organise lecture series delivered by professionals , in institute premises",link:"Deliver Lectures"}
  ,workshop:{heading:" Workshop",sub:" We organise workshops that are  conducted by skilled professionals & teams",link:"Conduct Workshop"},
  project:{heading:"Projects",sub:"We are willing to do industrial projects in collaboration with corporates.",link:"Start Project",visible:false,form:false},
  x_disp:0,
  // CLS:[{date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology  in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  // {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  // {date:" 5 sept 2019",name:"ZAID",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  // {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  // {date:" 5 sept 2019",name:"BIN JUNAID",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  // {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"}
  // ], 
  images:[{img:Img},{img:Img},{img:Img},{img:Img},{img:Img},{img:Img},{img:Img},{img:Img}],
  CLS : []

}

 this.form_ref = React.createRef();
this.scroll_bar= React.createRef();
 this.visible= this.visible.bind(this);
 this.hide= this.hide.bind(this);
 this.form_vis= this.form_vis.bind(this);
 this.form_hide= this.form_hide.bind(this);
 this.slide=this.slide.bind(this);
 this.getViewportSize=this.getViewportSize.bind(this)
  
}

componentDidMount(){
  console.log("requesting");
  axios({
    method : "GET",
    withCredentials : true,
    url : "http://localhost:3001/cls"
  }).then((d)=>{
    console.log("data coming");
    console.log(d);
    this.setState({CLS:d.data});
    console.log("state set");
  })
}


hide()
{
  this.setState({visible:false});
}

getViewportSize(){
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)){
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

visible(){
  this.setState({visible:true});
}

form_vis(){

  (this.form_ref.current).style.display="block";
   window.onclick = (event) =>{
  if (event.target == (this.form_ref.current)) {
    (this.form_ref.current).style.display = "none";
  }
}
}

form_hide(){

  (this.form_ref.current).style.display="none";
 
}

slide(e)
{  var arr =this.getViewportSize();
    let wdth =arr.width;
  let mov =( 0.8625 * wdth)/5 *5;
   let add = 0;
if(e.target.name=="right"){
 
  var sliding= setInterval(

    ()=>{ 
      add+=100;
   if(add>mov){
    clearInterval(sliding);
    this.state.x_disp=mov;
    return;
  }

   (this.scroll_bar.current).scrollLeft+=50;
     }, 
    17);
}
else
{
   let position=this.state.x_disp;
  var sliding= setInterval(

    ()=>{ 
      position-=100;
   if(position<=0){
    clearInterval(sliding);
    return;
  }

   (this.scroll_bar.current).scrollLeft-=50;
     }, 
    17);

}

  
//  (this.scroll_bar.current).scrollLeft+=mov;
  
}


render(){


return(
       <div >

       {(this.state.visible)? <Success visible={this.hide}/> :  null }
       

<div id="title_collab"> Collaborations</div>
<div id="sub_collab">We collaborate and come together for projects, 
workshops and lecture series with different coorporations and industries</div>
       <img id="collab_bg" src={collab_bg}/>

 <img name="left" id="left_arrow" src={left_arrow}  onClick={this.slide}/>
 <img name="right" id="right_arrow" src={right_arrow} onClick={this.slide}/>

<img  id="line_a" src={line}/>

  <div className="row_view">
    <div  onClick ={this.form_vis} className="column_view">
    < View   icon={lec_img} data={this.state.lecture}/>
      </div>
      <div onClick ={this.form_vis}  className="column_view">
      <View icon={work_img} data={this.state.workshop}/>
       </div>

      <div  onClick ={this.form_vis} className="column_view">
      <View icon={proj_img} data={this.state.project}/>
      </div>
       </div>


      <div id="cls_head">Corporate Lecture Series </div>
      <div id="cls_subhead">Proident laborum culpa incididunt do cupidatat dolore dolor amet nulla amet est voluptate 
      dolor Lorem. Do ipsum irure officia reprehenderit anim officia elit. Laborum cupidatat cillum ipsum non magna
       esse ipsum dolor.</div>
       <img id="cls_img" src={cls_img}/>

<div  ref={this.scroll_bar}  className="scroll_view">
{this.state.CLS.length != 0 && this.state.CLS.map((adm, index) => (
  <div className="hor_card">  <CLS info={adm}/>  </div>
))}
</div>




<div id="cc"> Successful Collaborations</div>
       <Collab/>
       <div ref={this.form_ref} id="myModal" className="modal">
      
       <Popup id="modal-content" hide={this.form_hide}  visible={this.visible}/>
      
       </div>



     


<div className="row_shots">
{this.state.images.map((obj, index) => (
  
   <div className="column_shots">
    <div className="wrap">
     <img   className="shots" src={obj.img}/>
     </div>
     </div>
))}
</div>


        </div>



)

}
}


export default Colloboration;
