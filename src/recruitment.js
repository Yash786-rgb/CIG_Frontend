import React, { Component } from "react";
import "./recruitment.css";
import img1 from "./images/taken.svg";
import img2 from "./images/recruitment illustration 1.svg";
import img3 from "./images/recruitment illustration 2.svg";
import img4 from "./images/recruitment illustration 3.svg";
import img5 from "./images/recruitment illustration 4.svg";
import img6 from "./images/question.svg";
import img7 from "./images/no-recruit-illustration.svg";
import vector from "./images/upload.svg";
import vector2 from "./images/download.svg";
import axios from "axios";
import { url } from "./config";
import Helpers from "./Helper.js";

import googleFormLink from "./googleform";
import recruitmentDeadline_Data from "./recruitmentDeadline_Data";

class Recruitment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [
        {
          id: 1,
          ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 2,
          ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 3,
          ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 4,
          ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 5,
          ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et? ",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
      editVisibles: {},
      googleFormLinks: [],

      deadline: recruitmentDeadline_Data,
    };
  }

  handleClick = (id) => {
    this.setState((prevState) => ({
      editVisibles: {
        ...prevState.editVisibles,
        [id]: !prevState.editVisibles[id],
      },
    }));
  };

  handleOk = () => {
    document.getElementById("overlay").style.display = "none";
  };

  componentDidMount() {
    console.log("requesting");
    axios({
      method: "GET",
      withCredentials: true,
      url: url + "faq",
    }).then((d) => {
      console.log("data coming");
      console.log(d);
      this.setState({ faqs: d.data });
      console.log("state set");
    });

    axios({
      method: "GET",
      withCredentials: true,
      url: url + "googleForm",
    }).then((d) => {
      console.log("data coming");
      console.log("googleForm", d);
      const arr = d.data;
      const webD = arr[0].link;
      const contentD = arr[1].link;
      const eventsD = arr[2].link;
      const designD = arr[3].link;
      console.log(arr);
      this.setState({
        googleFormLinks: {
          webDev: webD,
          contentDev: contentD,
          events: eventsD,
          design: designD,
        },
      });
    });

    // axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: url + "deadline",
    // }).then((d) => {
    //   console.log("data coming");
    //   console.log("deadline data", d);
    //   const arr = d.data;
    //   const webD = arr[0].date;
    //   const contentD = arr[1].date;
    //   const eventsD = arr[2].date;
    //   const designD = arr[3].date;
    //   console.log("ege", eventsD);
    //   this.setState({
    //     deadline: {
    //       webDev: webD,
    //       contentDev: contentD,
    //       events: eventsD,
    //       design: designD,
    //     },
    //   });
    // });
  }

  handleDownload = (e) => {
    //  axios({
    //      method : "GET",
    //      url : "http://localhost:3001/download/" + e,
    //      withCredentials : true
    //  })
    Helpers.httpRequest(url + "download/" + e, "get")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "recruitment.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  render() {
    console.log(this.props.recruit);
    console.log("d", this.state.googleFormLinks);
    return (
      <div className="start">
        <div className="recruitment">Recruitment</div>
        <div className="content">
          Get a chance to be part of CIG Team. With CIG, you will be able to
          gain first-hand work-experience by constructively contributing along
          with Deans, Professors and Industrial Assets.
        </div>
        <div className="img1">
          <img className="imgWidth" src={img1} />
        </div>
        <div className="prob">Problem Statements</div>
        <div>
          <div className="img2">
            <img className="imgWidth" src={img2} />
          </div>
          <div className="P1">#Problem 1</div>
          <div className="p1">(Event Management)</div>
          <div className="C1">
            This Vertical of CIG works on the organization and proper
            implementation of all the events such as Sponsored Research and BTPs
            i.e. (B.Tech Projects), Industrial Projects, Inter departmental
            Research, separate Industrial day for each department, Various
            Industrial Elective Courses and many more.
          </div>
          <div className="D1">Deadline: {this.state.deadline.events}</div>

          <a href={googleFormLink[0].events}>
            <div className="B1"></div>
            <div className="T1">Your Submission Here</div>
          </a>

          <div
            onclick="location.href='#'"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.handleDownload("events");
            }}
          >
            <div className="b1"></div>
            <div className="t1">PDF for instructions</div>
          </div>
        </div>
        <div>
          <div className="img3">
            <img className="imgWidth" src={img3} />
          </div>
          <div className="P2">#Problem 2</div>
          <div className="p2">(Web Development)</div>
          <div className="C2">
            This section primarily focuses on delivering a clear picture of CIG,
            its events, collaborations, etc. through the website. It aims for
            the development of CIG-IITR website. It ensures regular updation,
            proper functioning and maintanence of the website. Also the members
            are expected to be flexible enough to contribute to other sections
            as well.
          </div>
          <div className="D2">Deadline: {this.state.deadline.webDev}</div>

          <a href={googleFormLink[0].webDev}>

            <div className="B2"></div>
            <div className="T2">Your Submission Here</div>
          </a>
          <div
            onclick="location.href='#'"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.handleDownload("webDev");
            }}
          >
            <div className="b2"></div>
            <div className="t2">PDF for instructions</div>
          </div>
        </div>
        <div>
          <div className="img4">
            <img className="imgWidth" src={img4} />
          </div>
          <div className="P3">#Problem 3</div>
          <div className="p3">(Designing)</div>
          <div className="C3">
            This vertical is mainly involved in delivering a glimpse of events
            at CIG IITR in an innovative manner through posters for the upcoming
            events .Also, this vertical is involved in designing various logos,
            images and watermarks which is used on the website. It also
            contributes to content development in relation to design and
            creative outputs.
          </div>
          <div className="D3">Deadline: {this.state.deadline.design}</div>

          <a href={googleFormLink[0].design}>
            <div className="B3"></div>
            <div className="T3">Your Submission Here</div>
          </a>
          <div
            onclick="location.href='#'"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.handleDownload("design");
            }}
          >
            <div className="b3"></div>
            <div className="t3">PDF for instructions</div>
          </div>
        </div>
        <div>
          <div className="img5">
            <img className="imgWidth" src={img5} />
          </div>
          <div className="P4">#Problem 4</div>
          <div className="p4">(Content Development)</div>
          <div className="C4">
            This vertical of CIG specializes in providing the relevant content
            to everyone rest it be the viewers, or the website, or the
            pamphlets, notices, emails and all other material that goes out in
            writing. Content developers are essentially involved in the
            creation, development, and editing of content for various activities
          </div>
          <div className="D4">Deadline: {this.state.deadline.contentDev}</div>

          <a href={googleFormLink[0].contentDev}>

            <div className="B4"></div>
            <div className="T4">Your Submission Here</div>
          </a>
          <div
            onclick="location.href='#'"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.handleDownload("contentDev");
            }}
          >
            <div className="b4"></div>
            <div className="t4">PDF for instructions</div>
          </div>
        </div>
        <div className="heading">FAQs</div>
        <div className="img6">
          <img className="imgWidth" src={img6} />
        </div>
        <div className="accordian">
          {this.state.faqs.map((faq, index) => (
            <div
              className={`contentBx ${
                !this.state.editVisibles[index] ? "unactive" : "active"
              }`}
              onClick={() => {
                this.handleClick(index);
              }}
            >
              <div className="label">{faq.question}</div>
              <div className="answer">{faq.ans}</div>
            </div>
          ))}
          {!this.props.recruit ? (
            <div></div>
          ) : (
            <div id="overlay">
              <div id="over">
                <div id="notice">
                  Upcoming recruitment dates will be announced. Stay tuned!!
                </div>
                <img src={img7} id="img7" />
                <div onClick={this.handleOk} id="ok">
                  Ok
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Recruitment;
