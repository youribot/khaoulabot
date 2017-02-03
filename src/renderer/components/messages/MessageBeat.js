import React, { PropTypes } from 'react'

const MessageBeat = props => {
  return (
    <div id={'messagebeat'}>
      {props.item}
    </div>
  )
}

const Form = ({ isSubmitted, buttonText }) => {
  if (isSubmitted) {
    // Form submitted! Return a message element.
    return {
      type: Message,
      props: {
        text: 'Success!'
      }
    }
  }

  // Form is still visible! Return a button element.
  return {
    type: Button,
    props: {
      children: buttonText,
      color: 'blue'
    }
  }
}
export default MessageBeat
