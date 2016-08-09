import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoInput extends Component {
  render(){
    return (
      <div>
        <p>Todo List!</p>
        <ul>
          {
            this.props.todos.map(todo=>{
              return <TodoItem key={todo.id} todo={todo}/>;
            })
          }
        </ul>
      </div>
    );
  }
}