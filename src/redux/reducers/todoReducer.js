export default function todoReducer(todos = [], action){
  switch(action.type){
    case 'GET_TODOS':
      return action.todos 
        ? action.todos.map(todo => {
          todo.hide = false;
          return todo;
        }) : [];
    case 'POST_TODO':
      return todos.map(e => e);
    case 'ADD_TODO':
      return [
        {
          id: action.todo.id,
          todo: action.todo.todo,
          completed: false,
          hide: false
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
    case 'FILTER_TODOS':
      return todos.map(item => {
        let stringMatch = item.todo.toLowerCase().includes(action.search);
        if(!stringMatch){
          item.hide = true;
        }else{
          item.hide = false;
        }
        return item;
      });
    default:
      return todos;
  }
}