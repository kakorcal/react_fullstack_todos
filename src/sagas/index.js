import {getTodos, postTodo, editTodo, deleteTodo} from '../services/api'
import {put, take, fork} from 'redux-saga/effects'

//***************************************************************************
  // loaders
//***************************************************************************

function* loadTodos(){
  console.log('Load Todos');
  const todos = yield getTodos();
  // the put function dispatches actions for you
  yield put({type: 'GET_TODOS', todos});
}

function* loadPost({todo}){
  console.log('Load Post');
  const newTodo = yield postTodo(todo);
  console.log('Post Todo', newTodo);
  yield put({type: 'ADD_TODO', todo: newTodo});
}

function* loadEdit({todo}){
  console.log('Load Edit');
  const newTodo = yield editTodo(todo);
  console.log('Edit Todo', newTodo);
  yield put({type: 'UPDATE_TODO', todo: newTodo});
}

function* loadDelete(id){
  console.log('Load Delete');
  const message = yield deleteTodo(id);
  console.log(message);
}

//***************************************************************************
  // watchers
//***************************************************************************

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

function* watchForLoadPost(){
  while(true){
    console.log('Watch For Load Post');
    const todo = yield take('POST_TODO');
    yield fork(loadPost, todo);
  }
}

function* watchForLoadEdit(){
  while(true){
    console.log('Watch For Load Edit');
    const todo = yield take('EDIT_TODO');
    yield fork(loadEdit, todo);
  }
}

function* watchForLoadDelete(){
  while(true){
    console.log('Watch For Load Delete');
    const todo = yield take('DELETE_TODO');
    yield fork(loadDelete, todo.id);
  }
}

//***************************************************************************
  // Root Saga
//***************************************************************************

export default function* root(){
  yield [
    fork(watchForLoadTodos),
    fork(watchForLoadPost),
    fork(watchForLoadEdit),
    fork(watchForLoadDelete)
  ];
}