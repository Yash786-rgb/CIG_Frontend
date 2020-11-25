import React, { Component } from 'react';
import './card.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import card_msg from './images/card-msg.svg'; 
import card_mob from './images/card-mob.svg'; 



class Card extends Component {
constructor(props)
{
  super(props)
  
}




render(){


return(
       <div >
      <div id="big">

 <img src={"http://localhost:3001" + this.props.admin.image} id="img_card"/>
  <img src={card_msg} id="crd_msg" />
   <img src={card_mob}  id="crd_mob"/>
 <div id="nm">{this.props.admin.name} </div>
 <div id="desig">{this.props.admin.designation}</div>
 <div id="email_id">{this.props.admin.email}</div>
 <div id="mob_num">{this.props.admin.contact}</div>
      </div>
        </div>



)}}


export default Card;
