import React, {Component} from 'react'

export default class DbList extends Component{
  getTodos(e){
    // dispatch action here
    this.props.actions.getTodos();
  }
  render(){
    return (
      <div>
        <button onClick={this.getTodos.bind(this)}>Generate</button>
        <ul></ul>
      </div>
    );
  }
}