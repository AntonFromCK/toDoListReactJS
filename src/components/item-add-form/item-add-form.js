import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      })
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ''
      })
    }
  }
  render() {
    return (
      <form
        className="item-add-form"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className='form-control'
          onChange={this.onLabelChange}
          placeholder='shto tebe nuzhno?'
          value={this.state.label}
        />
        <br />
        <button
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    )
  }
}