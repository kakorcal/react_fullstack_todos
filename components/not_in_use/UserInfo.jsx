import React, {Component} from 'react'

export default class UserInfo extends Component{
  handleNewId(){
    this.props.createNewUserId();
  }
  render(){
    return (
      <div>
        <div>Username: {this.props.user.username}</div>
        <div>Id: {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update With Random Id</button>
        <p></p>
      </div>
    );
  }
}