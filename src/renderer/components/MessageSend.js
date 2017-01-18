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

