import {getTodos} from '../services/api'

export function* sayHello(){
  console.log('Hello');
}

export function* loadTodos(){
  const todos = yield getTodos();
  console.log(todos);
}