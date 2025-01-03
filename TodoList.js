import React, { Component } from 'react'
import Item from './Todoitem';
export default class Todo extends Component {
  render() {
    return (
      <div>
        <h2>todo list</h2> 
        <Item />
      </div>
    )
  }
}
