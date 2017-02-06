import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import { SubmissionError, Field, reduxForm } from 'redux-form'
import { Form, Label, Input } from 'semantic-ui-react'
import { inputClickHandler } from '../../actions/myaction'
import ToggleDisplay from 'react-toggle-display'

class MessageInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chatmessage: '',
      isShown: false
    }
  }

  onChange (e) {
    this.setState({chatmessage: e.target.value})
  }

  onSubmit (e) {
    console.log(this)
    inputClickHandler(this.state, this.props.dispatch)
    this.setState({chatmessage: ''})
  }

  handleToggleClick (e) {
    this.setState({ isShown: !this.state.isShown })
  }

  onScrollEle (el) { this.messagesEnd = el; }

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.messagesEnd)
    node.scrollIntoView({behavior: 'smooth'})
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  renderInput (field) {
    return <div>
             <input {...field.input} type={field.type} placeholder={field.placeholder} />
           </div>
  }

  render () {
    return (
      <div>
        <div id='infoSection' className='hidden'>
          <div className='ui grid'>
            <div className='ten wide column'>
              <a className='ui right pointing label' onClick={this.handleToggleClick.bind(this)}>answer</a>
            </div>
            <div className='five wide column right aligned'>
              <a data-actn='plus' className='ui black label'>+</a>
            </div>
          </div>
        </div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} onChange={this.onChange.bind(this)}>
          <ToggleDisplay show={this.state.isShown}>
            <div id={'sendmessagebox'}>
              <Field
                name={'chatmessage'}
                component={this.renderInput}
                type={'text'}
                placeholder={'Send message...'}
                value={this.state.chatmessage}
                className={'ui input fluid'} />
              <button
                id={'send'}
                className={'ui icon basic noborder large button'}
                type={'submit'}
                disabled={!this.state.chatmessage}>
                <i className={'send icon'} />
              </button>
            </div>
          </ToggleDisplay>
        </form>
        <div className={'scrollBottom'} ref={this.onScrollEle(this)}></div>
      </div>
    )
  }
}

const validate = (values, props) => {
  const errors = {}
  if (!values.chatmessage) {
    errors.chatmessage = 'Type your message here!'
  }
  return errors
}

// MessageInput.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired
// }

MessageInput = reduxForm({
form: 'chatBot'})(MessageInput)

// validate
export default MessageInput
