let actions = {
  addTodo(text){
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
  completeTodo(id){
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  deleteTodo(id){
    return {
      type: 'DELETE_TODO',
      id: id
    }
  }
};

export default actions
// store.dispatch(actions.addTodo('some text'))