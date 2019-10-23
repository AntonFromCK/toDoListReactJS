import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.searchInput = (e) => {
      this.setState({
        term: e.target.value
      });
      this.props.searchInput(e.target.value)
    };
  }


  render() {
    return (
      <input
        type="text"
        placeholder='type to search'
        className='form-control search-input'
        onChange={this.searchInput}
        value={this.state.term}
      />
    )
  }
};
