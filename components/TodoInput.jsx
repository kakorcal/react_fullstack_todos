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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" 
            ref='text'
            placeholder='Add Todos...'
            value={this.props.text}
            onChange={this.updateText.bind(this)}
          />
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    );
  }
}