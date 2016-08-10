import {getTodos} from '../services/api'
import {put} from 'redux-saga/effects'

export function* loadTodos(){
  const todos = yield getTodos();
  // put dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}