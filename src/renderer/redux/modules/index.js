import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import statusReducer from './statusReducer'
import BotState from "./BotState";


export default {
  form: formReducer,
  botstate: BotState,
  status: statusReducer
}
