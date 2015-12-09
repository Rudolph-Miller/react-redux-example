import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    const todos = [
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
        <AddTodo
          onAddClick={text => { console.log('Todo added:', text); }} />
        <TodoList
          todos={todos}
          onTodoClick={index => { console.log('Todo clicked:', index); }} />
        <Footer 
          filter='SHOW_ALL'
          onFilterChange={filter => { console.log('Filter change:', filter); }} />
      </div>
    );
  }
}
