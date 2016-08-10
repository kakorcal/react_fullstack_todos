import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import apiReducer from './apiReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  list: apiReducer
})

export default rootReducer