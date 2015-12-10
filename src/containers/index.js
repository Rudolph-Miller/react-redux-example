import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { VisibilityFilters, addTodo, completeTodo, setVisibilityFilter } from '../actions';

const filters = [];
for ( let key in VisibilityFilters ) {
  filters.push(VisibilityFilters[key]);
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => { dispatch(addTodo(text)); }} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => { dispatch(completeTodo(index)); }} />
        <Footer 
          filter={visibilityFilter}
          onFilterChange={filter => { dispatch(setVisibilityFilter(filter)); }} />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf(filters).isRequired
};

export default connect(state => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
})(App);
