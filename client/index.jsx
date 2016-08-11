import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from '../src/components/App'
import rootSaga from '../src/sagas/index'
import configureStore from '../src/redux/store'
// wraps the app and grabs state from store to pass it down to components as props
import {Provider} from 'react-redux'
import '../src/styles/base.scss'

let initialState = {todos: []};
let store = configureStore(initialState);
store.runSaga(rootSaga);

// configure and create store
// store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);