import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import MessageList from '../components/messages/MessageList'
import MessageSend from '../components/messages/MessageSend'


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
  dispatch: PropTypes.func.isRequired,
}


export default BotContainer
