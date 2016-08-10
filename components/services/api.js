import axios from 'axios'
const BASE_URI = 'http://localhost:2000/api/todos';

export function getTodos(){  
  return axios(BASE_URI)
    .then(({data}) => data)
    .catch(err => {throw err});
}

export function postTodo(todo){
  console.log(todo);
  return axios.post(BASE_URI, {todo})
    .then(({data}) => data)
    .catch(err => {throw err});
}

// return fetch(BASE_URI).then(res => {
//   return res.json().then(todos => {
//     return todos;
//   });
// })