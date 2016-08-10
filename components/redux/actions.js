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