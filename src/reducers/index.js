import { VisibilityFilters } from '../actions';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionTypes';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action = {}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign( {}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign( {}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.index),
          Object.assign({}, state.todos[action.index], {
            completed: true
          }),
          ...state.todos.slice(action.index + 1)
        ]
      });
    default:
      return state; 
  }
}
