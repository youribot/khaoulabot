import { reset } from 'redux-form'

export const ADD_LINE = 'ADD_LINE'
export const ADD_LINES = 'ADD_LINES'
export const ADD_LINE_BY_USER = 'ADD_LINE_BY_USER'

export const addLine = line => {
  return {
    type: ADD_LINE,
  line}
}

export const addLines = lines => {
  return {
    type: ADD_LINES,
  lines}
}

export const addLineByUser = line => {
  return {
    type: ADD_LINE_BY_USER,
  line}
}

export const inputClickHandler = (chat, dispatch) => {
  console.log(dispatch)
  dispatch({type: 'ADD_LINE_BY_USER', chatmessage: chat.chatmessage})
  dispatch({type: 'ADD_LINE', chatmessage: 'Welcome!'})
  dispatch(reset('chatBot'))
}
