import React, { PropTypes } from 'react'


const MessageRow = props => {
  return (
    <div className={"messagebox " + props.position}>
      <div className='bubble'>
        {props.message}
          <div className='corner'></div>
      </div>
    </div>
  )
}

MessageRow.propTypes = {
  actor: PropTypes.number,
  line: PropTypes.string
}

export default MessageRow