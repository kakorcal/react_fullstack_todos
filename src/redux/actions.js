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
        todo: updatedTodo.todo,
        id: updatedTodo.id,
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
  }
};

export default actions