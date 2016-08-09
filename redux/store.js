import {createStore} from 'redux'
import reducer from './reducers'

// can add middleware before starting up the store

export default function configureStore(initialState = {todos: []}){
  return createStore(reducer, initialState);
}