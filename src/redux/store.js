import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index'
import logger from 'redux-logger'

export default function configureStore(initialState = {todos: []}){
  const sagaMiddleware = createSagaMiddleware();
  const store =  createStore(
    rootReducer, 
    initialState,
    // for multiple store enhancers, use the compose helper
    compose(
      applyMiddleware(logger(), sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  store.runSaga = sagaMiddleware.run;
  return store;
}