import React, { PropTypes } from 'react'

class MessageBeat extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='infoSection' className='hidden'>
        <div className='ui grid'>
          <div className='ten wide column'>
            <a className='ui right pointing label' onClick={this.props.handleToggleClick}>answer</a>
          </div>
          <div className='five wide column right aligned'>
            <a data-actn='plus' className='ui black label'>+</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageBeat
