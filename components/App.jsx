import React, {Component} from 'react'
import TextInput from './TextInput'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }
  updateText(text){
    this.setState({text});
  }
  render(){
    return (
      <div>
        <h1>This a react app~</h1>
        <TextInput updateText={this.updateText.bind(this)} text={this.state.text}/>
      </div>
    );
  }
}

export default App