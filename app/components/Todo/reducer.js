import produce from 'immer';
import { ADD_TODOITEM, REMOVE_TODOITEM } from './constants';

// The initial state of the App
export const initialState = {
  todos: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODOITEM:
        draft.todos = [...draft.todos, action.todo];
        break;
      case REMOVE_TODOITEM:
        draft.todos = state.todos.filter(val => val !== action.todo);
        break;
    }
  });
export default homeReducer;
