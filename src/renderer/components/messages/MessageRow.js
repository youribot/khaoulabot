import React, { PropTypes } from 'react'

const MessageRow = props => {
  return (
    <div className={'messagebox ' + 'actor_' + props.identity + ' ' + props.position}>
      <div className='bubble'>
        {props.message}
      </div>
    </div>
  )
}

MessageRow.propTypes = {
  actor: PropTypes.number,
  line: PropTypes.string
}

export default MessageRow
