let actions = {
  postTodo(text){
    return {
      type: 'POST_TODO',
      todo: {
        todo: text,
        completed: false
      }
    }
  },
  editTodo(updatedTodo){
    return {
      type: 'EDIT_TODO',
      todo: {
        id: updatedTodo.id,
        todo: updatedTodo.todo,
        completed: !updatedTodo.completed
      }
    }
  },
  deleteTodo(id){
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },
  // createNewUserId(){
  //   return {
  //     type: 'CREATE_USER_ID',
  //     id: Math.round(Math.random() * 100)
  //   }
  // },
  getTodos(){
    return {
      type: 'GET_TODOS'
    }
  },
  filterTodos(search){
    return{
      type: 'FILTER_TODOS',
      search
    }
  }
};

export default actions