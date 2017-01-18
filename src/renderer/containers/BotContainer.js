import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import MessageList from '../components/messages/MessageList'
import MessageSend from '../components/messages/MessageSend'

import { addLine, inputClickHandler } from '../actions/myaction'

import { getLines } from '../reducers/myreducer'


let dataArray = [];
dataArray[0] = {message : "Hai there?","icon" : "../../assets/youribot.png","position" : "left"};
dataArray[1] = {message : "Yes Here!!!","icon" : "../../assets/user_icon.png","position" : "right"};
dataArray[3] = {message : "What can i do for you?","icon" : "../../assets/youribot.png","position" : "left"};


const BotContainer = props => {

  return (
    <div id = {'chatbox'}>
      <MessageList data = {dataArray} />
      <MessageSend onSubmit = {inputClickHandler.bind(this)} />
    </div>
  )

}


const mapStateToProps = state => {
  return {
    statusdata: getLines(state)
  }
}

BotContainer.propTypes = {
  statusdata: PropTypes.array,
  //dispatch: PropTypes.func.isRequired,
}


export default connect(mapStateToProps)(BotContainer)
