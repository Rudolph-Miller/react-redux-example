import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    const todos = [
      <Todo />,
      <Todo />
    ];

    return (
      <div>
        <h1>TodoList</h1>
        {todos}
      </div>
    );
  }
}
