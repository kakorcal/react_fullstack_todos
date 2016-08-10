function getId(todos){
  return todos.reduce((maxId, todo)=>{
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

export default function todoReducer(todos = [], action){
  switch(action.type){
    case 'GET_TODOS':
      return action.todos ? action.todos : [];
    case 'ADD_TODO':
      return [
        {
          todo: action.todo.todo,
          completed: false,
          id: getId(todos)
        }, 
        // adding rest of todos
        ...todos
      ];
    case 'COMPLETE_TODO':
      return todos.map(todo=>{
        // NOTE: don't want to mutate todo as well
        return todo.id === action.id ? 
          Object.assign({}, todo, {completed: !todo.completed}) : todo;
      });
    case 'DELETE_TODO':
      return todos.filter(todo=>{
        return todo.id !== action.id;
      });
    default:
      return todos;
  }
}