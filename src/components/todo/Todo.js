import React from 'react';
import './Todo.css';
import ListItem from '../todo-item/Todo-item'

const TodoList = ( { todoData, removeData, onToggleImportant, onToggleDone } ) => {
  return(
    <ul className='list-group todo-list'>
      {
        todoData.map((item) => {
          const { id, ...itemData } = item; //это делается для того, что бы не передавать ID в компонент из списком дела, все данные кроме ID помещены в itemData
          return (
            <li key={item.id} className='list-group-item'>
              <ListItem
                { ...itemData }
                removeData={()=>removeData(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)}
              />
            </li>
          )
        })
      }
    </ul>
  )
};

export default TodoList;