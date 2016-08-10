import {getTodos, postTodo} from '../services/api'
import {put, take, call, fork, select} from 'redux-saga/effects'

function* loadTodos(){
  console.log('Load Todos');
  const todos = yield getTodos();
  // the put function dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}

function* watchForLoadTodos(){
  while(true){
    // the take function listens for actions of a given type, and when they occur, 
    // it advances the saga to the next yield.
    console.log('Watch For Load Todos');
    yield take('GET_TODOS');
    // the fork function converts watchForLoadTodos into a non-blocking saga, 
    // meaning other effects can run concurrently.
    // https://yelouafi.github.io/redux-saga/docs/advanced/NonBlockingCalls.html
    yield fork(loadTodos);
  }
}

function* loadPost({todo}){
  console.log('Load Post');
  console.log('TODO', todo);
  const message = yield postTodo(todo);
  console.log(message);
}

function* watchForLoadPost(){
  while(true){
    console.log('Watch For Load Post');
    const todo = yield take('ADD_TODO');
    console.log('TODO: ', todo);
    yield fork(loadPost, todo);
  }
}

export default function* root(){
  yield [
    fork(watchForLoadTodos),
    fork(watchForLoadPost)
  ];
}