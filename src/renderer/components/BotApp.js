import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BotState from "../redux/modules/BotState"

const bot_icon = "../../assets/youribot.png";
const user_icon = "../../assets/user_icon.png";

export default class BotAppContainer extends React.Component {

render() {

  var MessageRow = React.createClass({
    render: function() {
    return <div className={"messagebox " + this.props.position}>
            <img src={this.props.icon} />
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
       <MessageRow message="Really cool stuff!" position="left" icon={bot_icon}></MessageRow>
       <MessageRow message="Ooo Awesome!" position="right" icon={user_icon}></MessageRow>
       <MessageRow message="Thank you!" position="left" icon={bot_icon}></MessageRow>
      </div>
      <div id='sendmessagebox'>
      <input className='ui input fluid' type='text' name="chatMessage" placeholder='Send message...' />
        <button id='send'></button>
    </div>
  </div>);

  }
}
