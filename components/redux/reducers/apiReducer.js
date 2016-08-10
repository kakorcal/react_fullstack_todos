export default function apiReducer(list = [], action){
  switch(action.type){
    case 'GET_TODOS':
      return list;
    default:
      return list;
  }
}