import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index'
import logger from 'redux-logger'

export default function configureStore(initialState = {todos: [], user: {}}){
  const sagaMiddleware = createSagaMiddleware();
  const store =  createStore(
    rootReducer, 
    initialState,
    compose(
      applyMiddleware(logger(), sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  store.runSaga = sagaMiddleware.run;
  return store;
}