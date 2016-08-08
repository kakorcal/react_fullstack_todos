import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TextInput from './TextInput'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }
  updateText(){
    let text = ReactDOM.findDOMNode(this.refs.input.refs.text).value;
    this.setState({text});
  }
  render(){
    return (
      <div>
        <h1>React Todos App</h1>
        <TextInput ref='input' updateText={this.updateText.bind(this)} text={this.state.text}/>
      </div>
    );
  }
}

export default App