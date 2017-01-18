import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BotState from "../redux/modules/BotState"

var bot = "../../../assets/youribot.icns";

export default class BotAppContainer extends React.Component {

render() {

  var MessageRow = React.createClass({
    render: function() {
    return <div className={"messagebox " + this.props.position}>
            <img src='../../assets/youribot.png' />
              <div className='bubble'>
                {this.props.message}
                  <div className='corner'></div>
                  <span>3 min</span>
              </div>
          </div>;
        }
    });

  return (
    <div id='chatbox'>
      <div id='chat-messageboxs' className='animate'>
       <MessageRow message="Really cool stuff!" position="left"></MessageRow>
       <MessageRow message="Ooo Awesome!" position="right"></MessageRow>
       <MessageRow message="Thank you!" position="left"></MessageRow>
      </div>
      <div id='sendmessagebox'>
      <input className='ui input fluid' type='text' placeholder='Send message...' />
        <button id='send'></button>
    </div>
  </div>);

  }
}
