import React, {Component}  from 'react';
import { connect } from "react-redux";
// import TestComponent from "../components/component";
import '../style/main.css';
import TodoList from '../components/todo/Todo';
import SearchPanel from '../components/search-panel/SearchPanel';
import Header from '../components/header/Header';
import ItemStatusFilter from '../components/item-status-filter/item-status-filter';
import ItemAddForm from '../components/item-add-form/item-add-form';


export default class TestContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoData: [
        {label: 'Drink vodka', important: false, id: 1, done:false},
        {label: 'Work', important: true, moreInformations: 'syka', id: 2, done:false},
        {label: 'Drink beer', important: false, id: 3, done:false },
      ],
      term: '',
      filter: 'all'
    };

    this.customID = 4;

    this.createToDoItem = (label) => {
      return{
        label,
        important: false,
        done: false,
        id: this.customID++
      }
    };

    this.removeItemElement = (id) => {
      this.setState((state) => {
        const index = state.todoData.findIndex((element) => element.id === id);

        const newState = [...state.todoData.slice(0, index), ...state.todoData.slice(index + 1)];

        return {
          todoData: newState
        }
      })
    };

    this.onItemAdded = (text) => {
      const newItem = this.createToDoItem(text);

      this.setState((state) => {

        const newItems = [
          ...state.todoData, newItem
        ];
        return{
          todoData: newItems
        }
      })
    };

    this.toggleProperty = (arr, id, propName) => {
      const index = arr.findIndex((element) => element.id === id);
      const newItem = {...arr[index], [propName]: !arr[propName]};
      return [
        ...arr.slice(0, index), newItem, ...arr.slice(index +1)
      ];
    };

    this.onToggleDone = (id) => {
      this.setState((state) => {
        return{
          todoData: this.toggleProperty(state.todoData, id, 'done')
        }
      })
    };

    this.onToggleImportant = (id) => {
      this.setState((state) => {
        return{
          todoData: this.toggleProperty(state.todoData, id, 'important')
        }
      })
    };

    this.search = (arr, term) => {
      if (term.length === 0) {
        return arr;
      }
      return  arr.filter((arr) => {
        return arr.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
    };
    this.filter = (arr, filter) => {
      switch (filter) {
        case 'all':
          return arr;
        case 'active':
          return arr.filter((arr) => !arr.done);
        case 'done':
          return arr.filter((arr) => arr.done);
        default:
          return arr;
      }
    };

    this.searchInput = (term) => {

      this.setState({term})
    };
    this.onFilterChange = (filter) => {
      this.setState({filter})
    }
  }

  render() {
    let { todoData, term, filter } = this.state;
    let visibleItem = this.filter(this.search(todoData, term), filter) ;
    let doneFilter = todoData.filter((el) => el.done).length;
    let todoFilter = todoData.length - doneFilter;
    return(
    <div  className="todo-app">
      <Header toDo={todoFilter} done={doneFilter} />
      <div className="top-panel d-flex">
        <SearchPanel searchInput={this.searchInput} />
        <ItemStatusFilter
          filter={filter}
          onfilterChange={this.onFilterChange}
        />
      </div>
      <TodoList
        todoData = {visibleItem}
        removeData = {this.removeItemElement}
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
      />
      <ItemAddForm
        onItemAdded={this.onItemAdded}
      />
    </div>
    )
  }
};



