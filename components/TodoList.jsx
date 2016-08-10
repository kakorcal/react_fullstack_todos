import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoInput extends Component {
  render(){
    return (
      <div>
        <p>Lots Of Stuff Todo!</p>
        <ul>
          {
            this.props.todos.map(todo=>{
              return <TodoItem key={todo.id} item={todo} actions={this.props.actions}/>;
            })
          }
        </ul>
      </div>
    );
  }
}