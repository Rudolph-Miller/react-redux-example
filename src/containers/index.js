import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    let todos = [
      {
        text: 'Use Redux',
        completed: true
      },
      {
        text: 'Learn to connect it to React',
        completed: false
      }
    ];
    return (
      <div>
        <AddTodo />
        <TodoList
          todos={todos}
          onTodoClick={index => { console.log('todo clicked', index); }} />
        <Footer />
      </div>
    );
  }
}
