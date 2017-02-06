import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import MessageList from '../components/messages/MessageList'
import MessageSend from '../components/messages/MessageSend'
import MessageBeat from '../components/messages/MessageBeat'
import { inputClickHandler } from '../actions/myaction'
import { getLines } from '../redux/modules/statusReducer'

class BotContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShown: false
    }
  }

  handleToggleClick (e) {
    this.setState({ isShown: !this.state.isShown })
  }

  render () {
    return (
      <div id={'chatbox'}>
        <MessageList data={this.props.statusdata} />
        <MessageBeat handleToggleClick={this.handleToggleClick.bind(this)} />
        <MessageSend isShown={this.state.isShown} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    statusdata: getLines(state)
  }
}

BotContainer.propTypes = {
  statusdata: PropTypes.array,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(BotContainer)
