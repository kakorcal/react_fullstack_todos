import React, {Component} from 'react';

export default class TextDisplay extends Component {
  handleClick(){
    if(this.props.text.length){
      this.props.deleteLetter();
    }
  }
  render(){
    return (
      <div>
        <h3>{this.props.text}</h3>
        <button onClick={this.handleClick.bind(this)}>Delete One Letter</button>
      </div>
    );
  }
}