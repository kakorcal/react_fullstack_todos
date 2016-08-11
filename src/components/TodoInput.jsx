import React, {Component} from 'react'

export default class TodoInput extends Component {
  updateText(e){
    this.props.updateText();
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.postTodo(this.props.text);
    this.props.clearText();
  }
  render(){
    return (
      <form className='pure-form' onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" 
          ref='text'
          placeholder='Lots Of Stuff Todo!!'
          value={this.props.text}
          onChange={this.updateText.bind(this)}
          className='todo-input'
          autoFocus
        />
        <button type='submit' className='pure-button pure-button-primary'>SUBMIT</button>
      </form>
    );
  }
}