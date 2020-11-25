import React,{Component} from 'react';
import './recruitment.css';
import img1 from './images/taken.svg';
import img2 from './images/recruitment illustration 1.svg';
import img3 from './images/recruitment illustration 2.svg';
import img4 from './images/recruitment illustration 3.svg';
import img5 from './images/recruitment illustration 4.svg';
import img6 from './images/question.svg';
import img7 from './images/no-recruit-illustration.svg';
import vector from './images/upload.svg';
import vector2 from './images/download.svg';
import axios from "axios";
    
class Recruitment extends Component{
    constructor(props){
        super(props);
        this.state={faqs:[
            {id:1,ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id:2,ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id:3,ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id:4,ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {id:5,ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
        ],
        editVisibles: {},
        }

    }

    handleClick = id => {
        this.setState(prevState => ({
          editVisibles: {
            ...prevState.editVisibles,
            [id]: !prevState.editVisibles[id]
          }
        }));
      };

    handleOk=()=>{
        document.getElementById("overlay").style.display="none";
    }


    componentDidMount(){
        console.log("requesting");
        axios({
          method : "GET",
          withCredentials : true,
          url : "http://localhost:3001/faq"
        }).then((d)=>{
          console.log("data coming");
          console.log(d);
          this.setState({faqs:d.data});
          console.log("state set");
        })
      }
  
handleDownload = (e) =>{
         axios({
             method : "GET",
             url : "http://localhost:3001/download/" + e,
             withCredentials : true
         })
       }



render(){
        return(
            <div className="start">
                <div className="recruitment">Recruitment</div>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="img1"><img className ="imgWidth" src={img1} /></div>
                <div className="prob">Problem Statements</div>
                <div>
                    <div className="img2"><img  className ="imgWidth" src={img2} /></div>
                    <div className="P1">#Problem 1</div>
                    <div className="p1">(Event Management)</div>
                    <div className="C1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="D1">Deadline: November 26,2020</div>
                    
                    <div onClick="/">
                            <div className="B1"></div>
                            <div className="T1">Your Submission Here</div>
                            <div className="V1"><img  className ="imgWidth" src={vector} /></div>
                    </div>
                        
                    <div onClick={()=>{
                        this.handleDownload("events");
                    }}>
                        <div className="b1"></div>
                        <div className="t1">PDF for instructions</div>
                        <div className="v1"><img  className ="imgWidth" src={vector2} /></div>
                    </div>
                </div>
                <div>
                    <div className="img3"><img  className ="imgWidth" src={img3} /></div>
                    <div className="P2">#Problem 2</div>
                    <div className="p2">(Web Development)</div>
                    <div className="C2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="D2">Deadline: November 26,2020</div>
                    <div onClick="/">
                            <div className="B2"></div>
                            <div className="T2">Your Submission Here</div>
                            <div className="V2"><img  className ="imgWidth" src={vector} /></div>
                    </div>
                    <div onClick={()=>{
                        this.handleDownload("webDev");
                    }}>
                        <div className="b2"></div>
                        <div className="t2">PDF for instructions</div>
                        <div className="v2"><img  className ="imgWidth" src={vector2} /></div>
                    </div>
                </div>
                <div>
                    <div className="img4"><img  className ="imgWidth" src={img4} /></div>
                    <div className="P3">#Problem 3</div>
                    <div className="p3">(Designing)</div>
                    <div className="C3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="D3">Deadline: November 26,2020</div>
                    <div onClick="/">
                            <div className="B3"></div>
                            <div className="T3">Your Submission Here</div>
                            <div className="V3"><img  className ="imgWidth" src={vector} /></div>
                    </div>
                    <div onClick={()=>{
                        this.handleDownload("design");
                    }}>
                        <div className="b3"></div>
                        <div className="t3">PDF for instructions</div>
                        <div className="v3"><img  className ="imgWidth" src={vector2} /></div>
                    </div>
                </div>
                <div>
                    <div className="img5"><img  className ="imgWidth" src={img5} /></div>
                    <div className="P4">#Problem 4</div>
                    <div className="p4">(Content Development)</div>
                    <div className="C4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="D4">Deadline: November 26,2020</div>
                    <div onClick="/">
                            <div className="B4"></div>
                            <div className="T4">Your Submission Here</div>
                            <div className="V4"><img   className ="imgWidth" src={vector} /></div>
                    </div>
                    <div onClick={()=>{
                        this.handleDownload("contentDev");
                    }}>
                        <div className="b4"></div>
                        <div className="t4">PDF for instructions</div>
                        <div className="v4"><img  className ="imgWidth" src={vector2} /></div>
                    </div>
                </div>
                <div className="heading">FAQs</div>
                <div className="img6"><img  className ="imgWidth" src={img6} /></div>
                <div className="accordian">
                {this.state.faqs.map((faq,index)=>(
                    <div className={`contentBx ${!this.state.editVisibles[faq.id]? "unactive": "active"}`} onClick={()=>{this.handleClick(faq.id)}}>
                        <div className="label">{faq.question}</div>
                        <div className="answer">{faq.ans}</div>
                    </div>
                )
                )}
                {this.props.recruit?
                <div></div>:
                <div id="overlay">
                    <div id="over">
                      <div id="notice">Upcoming recruitment dates will be announced. Stay tuned!!</div>
                      <img    src={img7} id="img7"/>
                      <div onClick={this.handleOk} id="ok">
                        Ok
                      </div>
                    </div>
                </div>}
               </div> 
            </div>
        )
    }
}

export default Recruitment;