import React, { PropTypes } from 'react'
import MessageRow from './MessageRow'
import { pacomoTransformer } from '../utils/pacomo'


const MessageList = props => {

  let messages = {}
  if(props.data && props.data.length > 0)
    messages = props.data.map((item, index) => {
      return <MessageRow key = {index} id = {index} message = {item.message} position = {item.position} icon = {item.icon}/>
    })
  else
    messages = <div>Lets start a conversation</div>
  return (
    <ul>{messages}</ul>
  )

}

MessageList.propTypes = {
  data: PropTypes.array
}

export default pacomoTransformer(MessageList)
