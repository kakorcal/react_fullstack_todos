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
        <button className='pure-button button-white' onClick={this.handleEdit.bind(this)}>
          <i className={this.props.item.completed ? 'fa fa-check-circle-o fa-lg button-success' : 'fa fa-circle-o fa-lg button-success'}></i>
        </button>
        <button className='pure-button button-white' onClick={this.handleDelete.bind(this)}>
          <i className='fa fa-trash-o fa-lg button-error'></i>
        </button>
      </li>
    );
  }
}