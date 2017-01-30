import React, { PropTypes } from 'react'

class MessageRow extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={'messagebox ' + 'actor_' + this.props.identity + ' ' + this.props.position}>
        <div className='bubble'>
          {this.props.message}
        </div>
      </div>
    )
  }
}

MessageRow.propTypes = {
  actor: PropTypes.number,
  line: PropTypes.string
}

export default MessageRow
