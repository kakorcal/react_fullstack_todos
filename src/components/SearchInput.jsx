import React, {Component} from 'react'

export default class SearchInput extends Component{
  handleSearch(e){
    this.props.handleSearch();
  }

  render(){
    return (
      <div className='pure-form search-form'>
        <input type="text" ref='search'
          placeholder='Search...' 
          value={this.props.search}
          onChange={this.handleSearch.bind(this)}
        />
      </div>
    );
  }
}