import React, {Component} from 'react'

export default class TodoItem extends Component {
  handleComplete(e){
    this.props.actions.completeTodo(this.props.todo.id);
  }
  handleDelete(e){
    this.props.actions.deleteTodo(this.props.todo.id);
  }
  render(){
    let linethrough = {
      textDecoration: 'line-through'
    };
    return (
      <li>
        {
          this.props.todo.completed 
          ? <p style={linethrough}>{this.props.todo.text}</p>
          : <p>{this.props.todo.text}</p>
        }
        <button onClick={this.handleComplete.bind(this)}>
          {this.props.todo.completed ? 'Undo' : 'Completed'}
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    );
  }
}