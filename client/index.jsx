import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import {sayHello} from '../components/sagas/index'
import configureStore from '../components/redux/store'
// wraps the app and grabs state from store to pass it down to components as props
import {Provider} from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial Todo'
  }],
  user: {
    username: 'ken',
    id: 13
  },
  list: []
};

let store = configureStore(initialState);
store.runSaga(sayHello);

// configure and create store
// store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);