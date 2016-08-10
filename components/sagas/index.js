import {getTodos, postTodo} from '../services/api'
import {put, take, call, fork, select} from 'redux-saga/effects'

function* loadTodos(){
  const todos = yield getTodos();
  // the put function dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}

function* watchForLoadTodos(){
  while(true){
    // the take function listens for actions of a given type, and when they occur, 
    // it advances the saga to the next yield.
    console.log('watch for load todos');
    yield take('GET_TODOS');
    // the fork function converts watchForLoadTodos into a non-blocking saga, 
    // meaning other effects can run concurrently.
    // https://yelouafi.github.io/redux-saga/docs/advanced/NonBlockingCalls.html
    yield fork(loadTodos);
  }
}

export default function* root(){
  yield [
    fork(watchForLoadTodos)
  ];
}