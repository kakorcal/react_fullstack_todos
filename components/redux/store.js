import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

// can add middleware before starting up the store

let finalCreateStore = compose(
  applyMiddleware(logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState = {todos: [], user: {}}){
  return finalCreateStore(rootReducer, initialState);
}