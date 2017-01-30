import React, { PropTypes } from 'react'
import functional from 'react-functional'
import MessageRow from './MessageRow'

class MessageList extends React.Component {
  constructor (props) {
    super(props)
  }

  let messages = {}
  if (this.props.data && this.props.data.length > 0) {
    messages = this.props.data.map((item, index) => {
      return <MessageRow
               key={index}
               id={index}
               message={item.line}
               position={item.position}
               identity={item.actor} />
    })
  } else {
    messages = <MessageRow
                 key={0}
                 id={0}
                 message={'What can i do for you?'}
                 position={'left'} />
  }

  render () {
    return (
      <div id={'chat-messageboxs'} className={'animate'}>
        {messages}
      </div>
    )
  }
}

MessageList.propTypes = {
  data: PropTypes.array
}

export default MessageList
