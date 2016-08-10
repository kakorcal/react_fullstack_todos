import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import actions from '../redux/actions'
// connects component with the redux state. 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component{
  constructor(){
    super();
    this.state = {text: ''};
  }
  componentDidMount(){
    // init todos. might want to add a loading
    this.props.actions.getTodos();
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
          postTodo={this.props.actions.postTodo}
        />
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  // the state comes from the store in the Provider component
  // return the part of the state you want the component to receive
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    // bindActionCreators wraps all actions with the dispatch
    // so you don't have to do stuff like this.props.dispatch(ACTION)
    // instead you can just call the action and it will automatically dispatch.
    // And you don't have to pass dispatch down as props and import actions on each file anymore!
    // if you look at App in the developer tools, you will only see this property as the App props
    // because this is the only thing we are returning.
    actions: bindActionCreators(actions, dispatch)
  };
}

// now App has todos as its this.props
export default connect(mapStateToProps, mapDispatchToProps)(App);