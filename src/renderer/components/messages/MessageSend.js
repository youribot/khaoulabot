import React, { PropTypes, Component } from 'react'
import { SubmissionError, Field, reduxForm } from 'redux-form'
import { Form, Label, Input } from 'semantic-ui-react'
import functional from 'react-functional'

const renderInput = field => {

  return <div>
           {field.meta.touched &&
            field.meta.error &&
            <Label>
              {field.meta.error}
            </Label>}
           <input
             {...field.input}
             type={field.type}
             placeholder={field.placeholder}
             defaultValue={field.defaultValue} />
         </div>
}

const onchangeHand = (props) => {
  console.log(props)
}
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
        <div id={'sendmessagebox'}>
          <Field
            name={'chatmessage'}
            component={renderInput}
            type={'text'}
            placeholder={'Send message...'}
            defaultValue=''
            className={'ui input fluid'} />
          <button
            id={'send'}
            className={'ui icon basic noborder large button'}
            type={'submit'}
            disabled={'disabled'}>
            <i className={'send icon'} />
          </button>
        </div>
      </form>
    </div>
  )
}

const options = {
  componentDidUpdate: (props, prevProps, refs) => scrollToBottom()
}

MessageInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

MessageInput = reduxForm({
  form: 'chatBot',
validate})(MessageInput)

// validate
export default MessageInput
