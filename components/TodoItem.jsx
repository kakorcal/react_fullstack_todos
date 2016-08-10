import React, {Component} from 'react'

export default class TodoItem extends Component {
  handleComplete(e){
    this.props.actions.completeTodo(this.props.item.id);
  }
  handleDelete(e){
    this.props.actions.deleteTodo(this.props.item.id);
  }
  render(){
    let linethrough = {
      textDecoration: 'line-through'
    };
    return (
      <li>
        {
          this.props.item.completed 
          ? <p style={linethrough}>{this.props.item.todo}</p>
          : <p>{this.props.item.todo}</p>
        }
        <button onClick={this.handleComplete.bind(this)}>
          {this.props.item.completed ? 'Undo' : 'Completed'}
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    );
  }
}