export default function todoReducer(todos = [], action){
  switch(action.type){
    case 'GET_TODOS':
      return action.todos ? action.todos : [];
    case 'POST_TODO':
      return todos.map(e => e);
    case 'ADD_TODO':
      return [
        {
          todo: action.todo.todo,
          completed: false,
          id: action.todo.id
        }, 
        // adding rest of todos
        ...todos
      ];
    case 'EDIT_TODO':
      return todos.map(e => e);
    case 'UPDATE_TODO':
      return todos.map(todo=>{
        // NOTE: don't want to mutate todo as well
        return todo.id === action.todo.id ? 
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