import React, { PropTypes, Component } from 'react'
import { SubmissionError, Field, reduxForm } from 'redux-form'


const renderInput = field =>
  <div>
    <input {...field.input} type = {field.type} placeholder = {field.placeholder} value= {field.value} />
    {field.meta.touched &&
     field.meta.error &&
     <span className = "error">{field.meta.error}</span>}
  </div>

const validate = (values, props) => {

  const errors = {}
  if (!values.chatmessage) {
    errors.chatmessage = 'Field can not be empty!'
  }
  return errors
}

let MessageInput = ({ handleSubmit, onSubmit }) => {

  return (

    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <div id = {'sendmessagebox'} >
            <Field
              name = {'chatmessage'}
              component = {renderInput}
              type = {'text'}
              placeholder = {'Send message...'}
              className = {'ui input fluid'} />
              <button id = {'send'} className = {'ui icon basic noborder large button'} type = {"submit"}><i className = {'send icon'}></i></button>
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
  form: 'chatbot',
  validate
})(MessageInput)

export default MessageInput
