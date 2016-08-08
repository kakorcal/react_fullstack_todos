import React, {Component} from 'react';

export default class TextDisplay extends Component {
  render(){
    return (
      <h3>{this.props.text}</h3>
    );
  }
}