import {getTodos, postTodo} from '../services/api'
import {put, take, call, fork, select} from 'redux-saga/effects'

export function* loadTodos(){
  const todos = yield getTodos();
  // the put function dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}

export function* watchForLoadTodos(){
  while(true){
    // the take function listens fro
    yield take('GET_TODOS');
    yield fork(loadTodos);
  }
}

