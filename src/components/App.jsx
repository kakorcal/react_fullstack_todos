import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchInput from './SearchInput'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import actions from '../redux/actions'
// connects component with the redux state. 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component{
  constructor(){
    super();
    this.state = {
      text: '',
      search: ''
    };
  }
  componentDidMount(){
    // init todos. might want to add a loading state
    this.props.actions.getTodos();
  }
  updateText(){
    let text = ReactDOM.findDOMNode(this.refs.todoInput.refs.text).value;
    this.setState(Object.assign({}, this.state, {text}));
  }
  clearText(){
    this.setState(Object.assign({}, this.state, {text: ''}));
  }
  handleSearch(){
    let search = ReactDOM.findDOMNode(this.refs.searchInput.refs.search).value;
    this.props.actions.filterTodos(search);
    this.setState(Object.assign({}, this.state, {search}));
  }
  render(){
    return (
      <div>
        <div className='todo-header'>
          <h1>React Todos App</h1>
          <SearchInput ref='searchInput' 
            search={this.state.search} 
            handleSearch={this.handleSearch.bind(this)}
          />
        </div>
        <TodoInput ref='todoInput' 
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