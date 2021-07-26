import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import bg from './images/home_bg.svg';
import hand from './images/home_hand.svg';
import man from './images/man.svg';
import up from './images/up.png';
import home_head from './images/home_head.svg';
import home_head_a from './images/home_head_a.png';
import left_arrow from './images/left_arrow.svg';
import right_arrow from './images/right_arrow.svg';
import man_a from './images/man_a.svg';
import line from './images/line.svg';
import Mask from './images/mask.png';
import Img from './images/image.png';
import Comp from './images/cls_comp.svg';
import Collab from './collab.js';
import Featured from './featured.js';
import Testinomials from './testinomial.js'
import {Link} from 'react-router-dom';
import CLS from './cls.js'
import './home.css';
import axios from "axios";
import {url} from './config';

//alert(window.innerWidth);
class Home extends Component {
constructor(props)
{
  super(props)
  this.state={CLS:[{date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology  in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"ZAID",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"BIN JUNAID",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"Ratan Tata",icon:Comp,img:Mask,heading:"Convergence of Geo-spatial Technology   in AI and IoT for New India ",des:"Director, ESRI India Technologies LTD"},
  {date:" 5 sept 2019",name:"",icon:"",heading:"",des:""}
  ],x_disp:0,
  testimonialArr : []
}
 this.slide=this.slide.bind(this);
 this.getViewportSize=this.getViewportSize.bind(this);
 this.scroll_bar= React.createRef();
}


componentDidMount(){  
  console.log("req to backend to fetch testimonial");
  axios({
    method : "GET",
    withCredentials : true,
    url : url+"testimonial"
  }).then((d)=>{
    console.log("data");
    this.setState({testimonialArr : d.data});
    console.log(d);
  })
}


scroll(){
if(window.scrollY!=0)
{
    setTimeout(()=> {
    	
       window.scrollTo(0,window.scrollY-60);
        this.scroll();
    }, 2);
   }

}

getViewportSize(){
  const vw = window.innerWidth;
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)){
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e.innerWidth , height : e[ a+'Height' ] }
}




slide(e)
{  var arr =this.getViewportSize();
    let wdth =arr.width;
   // alert(wdth);
  let mov =(( 0.615 *wdth)*50)/50;
   let add = 0;
if(e.target.name=="right"){
 
  var sliding= setInterval(

    ()=>{ 
      add+=50;
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
       <div id="home_img">
       <div id="title"> Bridging the gap between Corporate & Academia</div>
       <div id="sub">By providing a platform for academia and industry to interact, CIG proffers to connect, collaborate and innovate</div>
      <Link to="/collaboration"> <div  id="btn_home"><span>  Let’s Collaborate</span> </div></Link>
<img  id="img_home" src={bg}/>
<img  id="home_head" src={home_head}/>
<img  id="home_head_a" src={home_head_a}/>
<img  id="hand" src={hand}/>
<img  id="line" src={line}/>
<img name="left" id="left_arrow_home" onClick={this.slide} src={left_arrow}/>
<img name="right" id="right_arrow_home"  onClick={this.slide}  src={right_arrow}/>

<img  id="arrow" onClick={this.scroll.bind(this)} src={up}/>

</div>
<div>
<img  id="man" src={man}/>
</div>
<div>
<img  id="man_a" src={man_a}/>
</div>

<div id="suc_col">Successful Collaborations </div>
<div id="col">
<Collab />
</div>
<div id="heading_feat">Featured Works</div>
<Featured/>


<div  ref={this.scroll_bar}  className="test_scroll_view">

{this.state.testimonialArr.map((adm, index) => (
  <div className="hor_card_home">
  <Testinomials info = {adm} key = {index}/>  

  </div>
))}
<div id="test_bg"/>
<div className="blur"/>

</div>


<div className="feat_bg"/>

        </div>




)

}
}


export default Home;
