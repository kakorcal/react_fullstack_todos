export default function apiReducer(list = [], action){
  console.log(action);
  switch(action.type){
    case 'GET_TODOS':
      return list.concat(action.todos);
    default:
      return list;
  }
}