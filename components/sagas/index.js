import {getTodos} from '../services/api'
import {put} from 'redux-saga/effects'

export function* loadTodos(){
  const todos = yield getTodos();
  // the put function dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}