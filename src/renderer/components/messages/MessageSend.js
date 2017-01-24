import React, { PropTypes, Component } from 'react'
import { SubmissionError, Field, reduxForm } from 'redux-form'

const renderInput = field =>
  <div>
    <input {...field.input} type={field.type} placeholder={field.placeholder} defaultValue={field.defaultValue} />
    {field.meta.touched &&
     field.meta.error &&
     <span className='error'>{field.meta.error}</span>}
  </div>

const validate = (values, props) => {
  const errors = {}
  if (!values.chatmessage) {
    errors.chatmessage = 'Type your message here!'
  }
  return errors
}

let MessageInput = ({ handleSubmit, onSubmit }) => {
  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id={'sendmessagebox'} >
          <Field
            name={'chatmessage'}
            component={renderInput}
            type={'text'}
            placeholder={'Send message...'}
            defaultValue=''
            className={'ui input fluid'} />
          <button id={'send'} className={'ui icon basic noborder large button'} type={'submit'}><i className={'send icon'} /></button>
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
  form: 'chatBot',
  validate
})(MessageInput)

// validate
export default MessageInput
