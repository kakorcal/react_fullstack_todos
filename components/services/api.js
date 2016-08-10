export function getTodos(){
  const uri = 'http://localhost:2000/api/todos';
  
  return fetch(uri).then(res => {
    return res.json().then(todos => {
      return todos;
    });
  })
}