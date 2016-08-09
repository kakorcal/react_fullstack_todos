import React, {Component} from 'react'

export default class TodoInput extends Component {
  render(){
    return (
      <div>
        <input type="text" 
          placeholder='Add Todos...'
          value={this.props.text}
        />
      </div>
    );
  }
}