import axios from 'axios'
const BASE_URI = '/api/todos';

export function getTodos(){  
  return axios(BASE_URI)
    .then(({data}) => data)
    .catch(err => {throw err});
}

export function postTodo(todo){
  return axios.post(BASE_URI, {todo})
    .then(({data}) => data)
    .catch(err => {throw err});
}

export function deleteTodo(id){
  return axios.delete(`${BASE_URI}/${id}`)
    .then(({data}) => data)
    .catch(err => {throw err});
}

// return fetch(BASE_URI).then(res => {
//   return res.json().then(todos => {
//     return todos;
//   });
// })