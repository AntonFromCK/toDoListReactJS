import React, { Component } from 'react';
import './Todo-item.css';

export  default class ListItem extends Component{

  render() {
    const {
      label,
      removeData,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;


    let classNames = 'todo-list-item';
    if (done) {
      classNames = classNames + ' done';
    }

    if (important) {
      classNames += ' important'
    } else {
      classNames = 'todo-list-item'
    }

    return(
      <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
          <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={removeData}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
    )
  }
}
