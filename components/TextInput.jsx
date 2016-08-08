import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TextInput extends Component{
  updateText(e){
    this.props.updateText(
      ReactDOM.findDOMNode(this.refs.inputText).value
    );
  }
  render(){
    return (
      <div>
        <input type="text" 
          placeholder='TYPE TODOS...' 
          ref='inputText'
          onChange={this.updateText.bind(this)} 
          value={this.props.text}
        />
      </div>
    );
  }
}

export default TextInput