import React, { PropTypes } from 'react'


const MessageRow = props => {
  return (
    <div className={"messagebox " + props.position}>
      <img src={props.icon} />
      <div className='bubble'>
        {props.message}
          <div className='corner'></div>
          <span>3 min</span>
      </div>
    </div>
  )
}

MessageRow.propTypes = {
  actor: PropTypes.number,
  line: PropTypes.string
}

export default MessageRow
