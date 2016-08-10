import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import {loadTodos} from '../components/sagas/index'
import configureStore from '../components/redux/store'
// wraps the app and grabs state from store to pass it down to components as props
import {Provider} from 'react-redux'

let initialState = {todos: []};
let store = configureStore(initialState);
store.runSaga(loadTodos);

// configure and create store
// store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);