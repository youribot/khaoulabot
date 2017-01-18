import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import QuestionInput from '../components/MessageSend'


const MyContainer = props => {

  return (
    <div className = {'conversation-container'}>
      <ConversationList data = {props.statusdata} />
      <QuestionInput onSubmit = {inputClickHandler.bind(this)} />
    </div>
  )

}
