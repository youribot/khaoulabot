import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BotState from "../redux/modules/BotState"

const bot_icon = "../../assets/youribot.png";
const user_icon = "../../assets/user_icon.png";

export default class BotAppContainer extends React.Component {

render() {

  return (
    <div id='chatbox'>
      <div id='chat-messageboxs' className='animate'>

      </div>
      <div id='sendmessagebox'>
      <input className='ui input fluid' type='text' name="chatMessage" placeholder='Send message...' />
        <button id='send'></button>
    </div>
  </div>);

  }
}
