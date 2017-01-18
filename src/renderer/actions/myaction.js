import { reset } from 'redux-form'

export const ADD_LINE = 'ADD_LINE'
export const ADD_LINES = 'ADD_LINES'
export const QUESTION_MADE = 'QUESTION_MADE'
export const RECORD_STEP = 'RECORD_STEP'
export const ADD_LINE_BY_USER = 'ADD_LINE_BY_USER'
export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'
export const ADD_ORDER_ITEMS = 'ADD_ORDER_ITEMS'
export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM'
export const INC_ORDER_ITEM = 'INC_ORDER_ITEM'

export const addLine = line => {

  return {
    type: ADD_LINE,
    line
  }

}

export const addLines = lines => {

  return {
    type: ADD_LINES,
    lines
  }

}

export const addOrderItems = items => {

  return {
    type: ADD_ORDER_ITEMS,
    items
  }

}

export const addOrderItem = item => {

  return {
    type: ADD_ORDER_ITEM,
    item
  }

}

export const incOrderItem = index => {

  return {
    type: INC_ORDER_ITEM,
    index
  }

}

export const removeOrderItem = item => {

  return {
    type: REMOVE_ORDER_ITEM,
    item
  }

}

export const addLineByUser= line => {

  return {
    type: ADD_LINE_BY_USER,
    line
  }

}

export const recordStep = step => {

  return {
    type: RECORD_STEP,
    step
  }

}

export function questionMade() {

  return {
    type: QUESTION_MADE
  }

}

export const inputClickHandler = (line, dispatch) => {
  dispatch({type: 'QUESTION_MADE', line: line.chatmessage})
  // Reset form
  dispatch(reset('chatbot'))
}
