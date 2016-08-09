import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoInput from './TodoInput'

class App extends Component{
  constructor(){
    super();
    this.state = {
      text: ''
    };
  }
  updateText(){
    let text = ReactDOM.findDOMNode(this.refs.input.refs.text).value;
    this.setState({text});
  }
  deleteLetter(){
    // UNUSED
    let text = ReactDOM.findDOMNode(this.refs.input.refs.text).value;
    this.setState({text: text.slice(0, text.length - 1)});
  }
  render(){
    return (
      <div>
        <h1>React Todos App</h1>
        <TodoInput ref='input' 
          text={this.state.text}
          updateText={this.updateText.bind(this)}
        />
      </div>
    );
  }
}

export default App