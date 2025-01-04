import React, { Component } from 'react';
import Item from './Todoitem';

export default class Todo extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <Item 
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}  // Fixed this from `this.handleDelete` to `handleDelete`
              handleEdit={() => handleEdit(item.id)}      // Fixed this from `this.handleEdit` to `handleEdit`
            />
          );
        })}
        <button 
          type="button" 
          className="btn btn-danger btn-block text-uppercase mt-5" 
          onClick={clearList}
        >
          Clear
        </button>
      </ul>
    );
  }
}
