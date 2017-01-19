import { combineReducers } from 'redux'
import myReducer from './myreducer'
import { reducer as formReducer } from 'redux-form'

const reduxApp = combineReducers({
  form: formReducer,
  mystatus: myReducer,
})

export default reduxApp
