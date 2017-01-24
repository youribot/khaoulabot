import React, { PropTypes } from 'react'
import MessageRow from './MessageRow'

const MessageList = props => {
  let messages = {}
  if (props.data && props.data.length > 0) {
    messages = props.data.map((item, index) => {
      return <MessageRow key={index} id={index} message={item.line} position={item.position} identity={item.actor} />
    })
  } else {
    messages = <MessageRow key={0} id={0} message={'What can i do for you?'} position={'left'} />
  }
  return (
    <div id={'chat-messageboxs'} className={'animate'} >{messages}</div>
  )
}

MessageList.propTypes = {
  data: PropTypes.array
}

export default MessageList
