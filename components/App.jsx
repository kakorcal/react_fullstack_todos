import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
// connects component with the redux state. 
import {connect} from 'react-redux'

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
  clearText(){
    this.setState({text: ''});
  }
  render(){
    return (
      <div>
        <h1>React Todos App</h1>
        <TodoInput ref='input' 
          text={this.state.text}
          updateText={this.updateText.bind(this)}
          clearText={this.clearText.bind(this)}
          dispatch={this.props.dispatch}
        />
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  // the state comes from the store in the Provider component
  // return the part of the state you want the component to receive
  return state;
}

// now App has todos as its this.props
export default connect(mapStateToProps)(App);