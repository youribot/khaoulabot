import React, { PropTypes, Component } from 'react'
import { SubmissionError, Field, reduxForm } from 'redux-form'
import { pacomoTransformer } from '../utils/pacomo'


const renderInput = field =>
  <div>
    <input {...field.input} type = {field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className = "error">{field.meta.error}</span>}
  </div>

const validate = (values, props) => {

  const errors = {}
  if (!values.chatMessage) {
    errors.mytext = 'Field can not be empty!'
  }
  return errors
}

let MessageInput = ({ handleSubmit, onSubmit }) => {

  return (

    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <div id='sendmessagebox'>
            <Field
              name = "chatMessage"
              component = {renderInput}
              type = "text"
              placeholder="Send message..."
              className="ui input fluid" />
              <button id='send' className = {'btn'} type = "submit"></button>
          </div>
        </form>
    </div>

  )
}

MessageInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

MessageInput = reduxForm({
  form: 'conversation',
  validate
})(pacomoTransformer(MessageInput))

export default MessageInput
