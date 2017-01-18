import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import MessageList from '../components/messages/MessageList'
import MessageSend from '../components/messages/MessageSend'


export const inputClickHandler = (line, dispatch) => {
  dispatch({type: 'QUESTION_MADE', line: line.chatMessage})
  dispatch(reset('chatbot'))
}

const BotContainer = props => {

  return (
    <div id = {'chatbox'}>
      <MessageList data = {props.statusdata} />
      <MessageSend onSubmit = {inputClickHandler.bind(this)} />
    </div>
  )

}


BotContainer.propTypes = {
  statusdata: PropTypes.array,
  //dispatch: PropTypes.func.isRequired,
}


export default BotContainer
