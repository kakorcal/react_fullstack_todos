import React, {Component} from 'react'

export default class TodoItem extends Component {
  handleEdit(e){
    this.props.actions.editTodo(this.props.item);
  }
  handleDelete(e){
    this.props.actions.deleteTodo(this.props.item.id);
  }
  render(){
    let linethrough = {textDecoration: 'line-through'};
    let clearline = {textDecoration: 'none'};

    return (
      <li className='pure-menu-item'>
        <p style={this.props.item.completed ? linethrough : clearline}>{this.props.item.todo}</p>
        <button onClick={this.handleEdit.bind(this)}>
          {this.props.item.completed ? 'Mark As Incomplete' : 'Mark As Complete'}
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <i className='fa fa-rocket'></i>
      </li>
    );
  }
}