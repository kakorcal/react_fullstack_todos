import React, {Component} from 'react'

export default class TodoInput extends Component {
  updateText(e){
    this.props.updateText();
  }
  render(){
    return (
      <div>
        <input type="text" 
          ref='text'
          placeholder='Add Todos...'
          value={this.props.text}
          onChange={this.updateText.bind(this)}
        />
        <button>SUBMIT</button>
      </div>
    );
  }
}