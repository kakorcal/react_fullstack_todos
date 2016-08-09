import React, {Component} from 'react'
import actions from './redux/actions'

export default class TodoItem extends Component {
  handleComplete(e){
    this.props.dispatch(actions.completeTodo(this.props.todo.id));
  }
  handleDelete(e){
    this.props.dispatch(actions.deleteTodo(this.props.todo.id));
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