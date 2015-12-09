import { VisibilityFilters } from '../actions';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionTypes';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action = {}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(todos = [], action = {}) {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ];
    }
    case COMPLETE_TODO: {
      return [
        ...state.todos.slice(0, action.index),
        Object.assign({}, state.todos[action.index], {
          completed: true
        }),
        ...state.todos.slice(action.index + 1)
      ];
    }
    default:
      return state;
  }
}

export default function todoApp(state = initialState, action = {}) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
