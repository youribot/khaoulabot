import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import MessageList from '../components/messages/MessageList'
import MessageSend from '../components/messages/MessageSend'

import { addLine, inputClickHandler } from '../actions/myaction'

import { getLines } from '../reducers/myreducer'


const BotContainer = props => {

  return (
    <div id = {'chatbox'}>
      <MessageList data = {props.statusdata} />
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
