import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
// wraps the app and grabs state from store to pass it down to components as props
import {Provider} from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial Todo'
  }]
};

let store = configureStore(initialState);

// configure and create store
// store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));