import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BotState from "../redux/modules/BotState"



export default class BotAppContainer extends React.Component {
  render() {
      return (
        <div id='chatbox'>
        <div id='chat-messageboxs' className='animate'>
            <div className='messagebox'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg' />
                <div className='bubble'>
                  Really cool stuff!
                    <div className='corner'></div>
                    <span>3 min</span>
                </div>
            </div>
            <div className='messagebox right'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg' />
                <div className='bubble'>
                  Can you share a link for the tutorial?
                    <div className='corner'></div>
                    <span>1 min</span>
                </div>
            </div>
        </div>
        <div id='sendmessagebox'>
          <input className='ui input fluid' type='text' placeholder='Send message...' />
            <button id='send'></button>
        </div>
        </div>);
  }
}
