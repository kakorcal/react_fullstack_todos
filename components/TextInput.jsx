import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TextInput extends Component{
  updateText(e){
    this.props.updateText();
  }
  render(){
    return (
      <div>
        <input type="text" 
          placeholder='TYPE TODOS...' 
          ref='text'
          onChange={this.updateText.bind(this)} 
          value={this.props.text}
        />
      </div>
    );
  }
}

export default TextInput